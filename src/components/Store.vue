<template>
  <div class="prueba">
    <h1>Store</h1>
      <p>Contador: <input type="number" v-model="cont"></p>
      <button @click="incrementar">Incrementar</button>
      <button @click="comprobar">Comprobar</button>
  </div>
</template>
<script>
import { ref, reactive, computed, watch } from 'vue'
import { useStore } from 'vuex'

export default {
    name:'Store',
    props:{},
    setup(){
      let cont=ref(useStore().state.contador)

      function incrementar(){
        useStore().commit('incrementar')
      }

      function comprobar(){
        console.log(useStore().state.contador)
      }

      return {
        cont,
        incrementar,
        comprobar
      }
    }
}

</script>

<style lang="scss" scoped>

</style>