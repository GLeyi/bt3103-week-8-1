<template>
    <div>
        <p v-for="(item, index) in datapacket[0]" v-bind:key="index">
            {{itemNames[index]}}: {{item}}<br>
            <input id=index placeholder=0 type="number" min="0" v-model.number="newCount[index]">
        </p>
        <button v-on:click="updateOrder">Update Order</button>
    </div>
</template>

<script>
import database from '../firebase'

export default {
    data() {
        return {
            itemNames: ["Prawn omelette", "Dry Beef Hor Fun", "Sambal KangKung", "Pork Fried Rice", "Mapo Tofu", "Cereal Prawn"],
            datapacket:[],
            newCount: []
        }
    },
    methods: {
        fetchItems: function() {
            console.log("doc_id retrieved is -> " + this.$route.params.id);
            database.collection('orders').doc(this.$route.params.id).get().then(doc => {
                this.datapacket.push(doc.data().order);
            })
        },
        updateOrder: function() {
            var datapacket_copy = this.datapacket;
            for (var i = 0; i < 6; i++) {
                if (this.newCount[i] != null) {
                    datapacket_copy[0][i] = this.newCount[i];
                }
                console.log(datapacket_copy);
            }
            database.collection('orders').doc(this.$route.params.id).update({
                order: datapacket_copy[0],
            }).then(() => {this.$router.push('/orders')});
        }
    },
    created() {
        this.fetchItems();
    }
}
</script>

<style scoped>
</style>