<template>
  <div class="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8 col-md-6">
            <h1>Carrito</h1>
            <ul>
              <li v-for="(item,i) in articulos" :key="i">
                <Item 
                  :titulo="item.nombre" 
                  :descripcion="item.descripcion"
                  :imagen="item.imagen"
                  :precio="item.precio"
                  @cambioTotal="verCambio"
                  />
              </li>
            </ul>
            <p>
              <b>TOTAL: </b> {{totalGlobal}} €
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from '@/components/Item.vue'
import { ref } from 'vue'
export default {
  name: 'Carrito',
  components: {
    Item
  },
  setup(){
    let totalGlobal=ref(0)
    const articulos=[
      {nombre:'cerillas',descripcion:'cerillas bonitas',imagen:'avatar1.jpg',precio:'2.20'},
      {nombre:'zapatos',descripcion:'zapatos feos',imagen:'avatar2.jpg',precio:'2.20'},
      {nombre:'martillo',descripcion:'herramienta',imagen:'avatar3.jpg',precio:'2.20'}
    ]

    function verCambio(total){
      console.log(total)
    }

    return{
      articulos,
      verCambio,
      totalGlobal
    }
  }
}
</script>

<style lang="scss" scoped>
  li{
    list-style:none;
  }
</style>