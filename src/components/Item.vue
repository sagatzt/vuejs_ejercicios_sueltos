<template>
  <div class="item row">
    <div class="col-4">
      <img :src="imagen" />
    </div>
    <div class="col-8">
      <p class="titulo" v-html="titulo"></p>
      <p v-text="descripcion"></p>
      <p>        
        <span v-text="precio"></span>€ X 
        <input v-model="cantidad" type="number" size="5" />
        = <span v-text="total"></span> €
      </p>
    </div>
    <hr />
  </div>
</template>
<script>
import { ref, reactive, computed,watch } from "vue";
import {useStore} from 'vuex'
export default {
  name: "Item",
  props: {
    imagen: String,
    titulo: String,
    descripcion: String,
    precio: Number,
  },
  setup(props, context) {
    const store=useStore()
    let cantidad = ref(1)
    let total = computed(() => {
      let resultado=(props.precio * cantidad.value)
      context.emit('cambioTotal',props.titulo,resultado)
      return resultado.toFixed(2)
    })


    return {
      cantidad,
      total
    }
  },
}
</script>
<style lang="scss" scoped>
img {
  max-width: 40px;
}
input {
  border:0px;
  text-align: center;
}
p{
  text-align: left;
  font-size: .8em;
  margin:0px;
  &.titulo{
    font-size: 1em;
    font-weight: 900;
  }

}

</style>