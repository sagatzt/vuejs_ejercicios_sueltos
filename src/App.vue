<template>

  <div id="nav"> 
    <router-link to="/">Home</router-link> |
    <router-link to="/ejercicio1">Ejercicio1</router-link> |
    <router-link to="/ejercicio2">Ejercicio2</router-link> |  
    <router-link to="/ejercicio3">Ejercicio3</router-link> |  
    <router-link to="/ejercicio4">Ejercicio4</router-link> | 
    <router-link to="/ejercicio5">Ejercicio5</router-link> |
    <router-link to="/ejercicio6">Ejercicio6</router-link> |
    <router-link to="/ejercicio7">Ejercicio7</router-link> |    
    <router-link to="/ejercicio8">Ejercicio8</router-link> |     
    <router-link to="/ejercicio9">Ejercicio9</router-link> | 
    <router-link to="/Multilang">Multilang</router-link> |  
    <router-link to="/Storage">Storage</router-link> |  
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .informacion{
    text-align:right;
    padding:10px;
    background: #42b983;
  }
}
</style>

<script>
import Userdata from '@/components/Userdata'
export default {
  components: {
    Userdata
  }
}
</script>