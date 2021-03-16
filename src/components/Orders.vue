<template>
    <div>
        <ul>
            <li v-for="(order,index) in orders" :key="index">
                <span v-for="n in 6" :key="n">{{itemNames[n-1]}}: {{order[1][n-1]}}<br></span>
                <button v-bind:id="order[0]" v-on:click="deleteItem($event)">Delete</button>
                <button v-bind:id="order[0]" v-on:click="route($event)">Modify</button>
            </li>
        </ul>
    </div>
</template>

<script>
import database from "../firebase.js"

export default {
    data() {
        return {
            itemNames: ["Prawn omelette", "Dry Beef Hor Fun", "Sambal KangKung", "Pork Fried Rice", "Mapo Tofu", "Cereal Prawn"],
            orders: [],
        }
    },
    methods: {
        fetchItems: function() {
            database.collection('orders').get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                    this.orders.push([doc.id, doc.data().order]);
                });
            });
        },
        deleteItem: function(event) {
            let doc_id = event.target.getAttribute("id");
            database.collection('orders').doc(doc_id).delete().then(() => {location.reload()});
        },
        route: function(event) {
            let doc_id = event.target.getAttribute("id");
            console.log(doc_id);
            this.$router.push({
                name:'modify', 
                params: {id: doc_id} 
            });
        }
    },
    created() {
        this.fetchItems();
    }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}

button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>