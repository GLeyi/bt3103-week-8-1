<template>
  <div>
    <button class="buttons" v-on:click="increaseCounter"> + </button>
    <label id="counter"> {{counter}} </label>
    <button class="buttons" v-on:click="decreaseCounter"> - </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    } 
  },
  methods: {
    increaseCounter: function() {
      if (this.counter == 10) {
        alert('You cannot buy more than 10 items.');
      } else {
        this.counter++;
      }
      this.$emit('counter', this.counterItem, this.counter)
    },
    decreaseCounter: function() {
      if (this.counter > 0) {
        this.counter--;
      }
      this.$emit('counter', this.counterItem, this.counter)
    }
  },
  props: {
    counterItem: {}
  }
}
</script>

<style scoped>
.buttons {
  background-color: orange;
  font-size: 30px;
  padding: 10px;
  border-radius: 10px;
  width: 40px;
  text-align: center;
}
.buttons:hover {
  background-color: white;
}
#counter {
  font-size: 40px;
}
</style>