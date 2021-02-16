<template>
    <h1>{{ titulo }}</h1>
    <h2> {{ tituloConvertido }} </h2>
    <button id="boton" @click="comprobar">Comprobar</button>
</template>

<script>
import { ref, onMounted, onBeforeMount, onBeforeUpdate, onUnmounted, onActivated } from 'vue'
export default { //Composition API V.3
    name: 'Prueba',
    props: {
        titulo: String
    },
    setup(props){
        let tituloConvertido=ref(props.titulo)
        
        onMounted(() => {
            console.log("Aqui el componete se ha montado")
        })
        onBeforeMount(() => {
            console.log("Aqui etsamos antes de montar el comopne")
        })
        onBeforeUpdate(() => {
            console.log("asdfadsfasdf")
        })
        onUnmounted(() => {
            console.log("Easdfadsfasdfasd")
        })
        onActivated(() => {
            console.log("Easdfasdfasdfafdadsa")
        })                                
        
        return {
            tituloConvertido,
        }
    }

}
</script>

<style>

</style>