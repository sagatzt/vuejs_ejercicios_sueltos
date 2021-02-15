<template>
  <h1 v-if="mostrar" v-html="mensaje"></h1>
  <button @click="pasarAMinusculas">Minusculas</button>
  <button @click="pasarAMayusculas">Mayusculas</button>
</template>

<script>
import {ref, reactive, watch} from 'vue'
export default {
    name: 'Prueba',
    props: {},
    setup(){ //Composition API v.3.0

        let mensaje=ref("<span style='color:red'>bienvenido</span>")
        let mostrar=false

        function pasarAMayusculas(){
            mensaje.value=mensaje.value.toUpperCase()
        }

        function pasarAMinusculas(){
            mensaje.value=mensaje.value.toLowerCase()
        }

        //oye vue, vigila esta variable (mensaje) y, si cambia, ejecuta esto
        watch(mensaje,(current,prev)=>{
            console.log(`Valor anterior: ${prev} / Valor actual: ${current}`)
        })
        
        return {
            mensaje, mostrar,
            pasarAMinusculas,
            pasarAMayusculas
        }
    }

}
</script>

<style>

</style>