<template>
  <div>
      Menu: <br>
      <ul id="basketItems">
          <li v-for="item in basketItems" v-bind:key="item[0]">
              {{item[0]}} x {{item[1]}}
          </li>
      </ul>
      <button v-on:click="findTotal(); sendOrder();">Calculate Total</button>
      <p v-show="showTotal">Subtotal: ${{subtotal.toFixed(2)}}</p>
      <p v-show="showTotal">Grand Total: ${{grandTotal.toFixed(2)}}</p>
  </div>
</template>

<script>
import database from "../firebase.js"

export default {
    data() {
        return {
            subtotal: 0,
            grandTotal: 0,
            showTotal: false,
        } 
    },
    methods: {
        findTotal: function() {
            this.showTotal = true;
            this.subtotal = 0;
            for (var i = 0; i < this.basketItems.length; i++) {
                var currOrder = this.basketItems[i]
                this.subtotal += currOrder[1] * currOrder[2]
            }
        },
        sendOrder: function() {
            //console.log("basketItems is " + this.basketItems);
            var current_order = []; // Array containing [item_name, item_count] // change to an array of quantities of each item in a particular order
            var items = ["Prawn omelette", "Dry Beef Hor Fun", "Sambal KangKung", "Pork Fried Rice", "Mapo Tofu", "Cereal Prawn"];
            for (var i = 0; i < 6; i++) {
                var currentItem = items[i];
                //console.log("currentItem: " + currentItem);
                var contains = false;
                for (var j = 0; j < this.basketItems.length; j++) {
                    var currentBasketItem = this.basketItems[j]; // currentBasketItem = [item_name, count, item_price]
                    if (currentBasketItem.includes(currentItem)) {
                        //console.log("this.basketItems contains " + currentItem);
                        contains = true;
                        //current_order.push(currentItem + ": " + currentBasketItem[1]);
                        current_order.push(currentBasketItem[1]); // Simply push the count for the item
                        break;
                    }
                }
                if (contains == false) {
                    //current_order.push(currentItem + ": 0");
                    current_order.push(0);
                }
            }
            //console.log("current_order: " + current_order);
            //console.log(current_order);
            database.collection('orders').add({
                order: current_order,
            }).then(() => {location.reload()});
        }
  },
  watch: {
      subtotal: function(val) {
          this.subtotal=val;
          this.grandTotal=val*1.07;
      },
      grandTotal: function(val) {
          this.subtotal=val/1.07;
          this.grandTotal=val;
      },
  },
  props: {
      basketItems: {}
  }
}
</script>

<style scoped>
div {
    font-size: 25px;
    padding: 10px;
    border: 10px solid black;
}
button {
  background-color: orange;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  width: 200px;
  text-align: center;
}
button:hover {
  background-color: white;
}
</style>