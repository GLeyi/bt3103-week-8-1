<template>
    <div>
        <h1>Asian Delights</h1>
        <ul>
            <li><router-link to='/' exact>Home</router-link></li>
            <li><router-link to='/orders' exact>Orders</router-link></li>
            <li><router-link to='/dashboard' exact>Dashboard</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
h1 {
  text-align: center;
  color: white;
  font-size: 50px;
  background-color: orangered;
  padding: 20px;
}
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
</style>