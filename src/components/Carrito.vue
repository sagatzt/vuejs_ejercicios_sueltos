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
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Carrito',
  components: {
    Item
  },
  setup(){
    let totalGlobal=computed(()=>store.getters.getTotal)
    const store = useStore()
    let articulos=[
      {nombre:'cerillas',descripcion:'cerillas bonitas',imagen:'avatar1.jpg',precio:'2.20'},
      {nombre:'zapatos',descripcion:'zapatos feos',imagen:'avatar2.jpg',precio:'2.20'},
      {nombre:'martillo',descripcion:'herramienta',imagen:'avatar3.jpg',precio:'2.20'}
    ]

    function verCambio(art,total){
      console.log(art)
      let index=articulos.findIndex(articulo=>articulo.nombre==art)
      console.log(index)
      articulos[index].subtotal=total
      let acumula=0
      articulos.forEach(articulo=>{
        acumula+=articulo.subtotal
      })
      store.commit('setTotal',acumula.toFixed(2))
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