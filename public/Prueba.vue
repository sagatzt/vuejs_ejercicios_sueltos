<template>
    <div class="prueba">
        <h1>Pruebas</h1>
        <select v-model="elemSeleccionado" @change="verSeleccionado">
            <option v-for="(persona,indice) in elementos" :key="indice" :value="persona.imagen">
                {{persona.nombre}} - {{persona.imagen}}
            </option>
        </select>
        <img class="imagen" :src="elemSeleccionado">
    </div>
</template>

<script>
import { ref, onMounted, onBeforeMount, onBeforeUpdate, onUnmounted, onActivated } from 'vue'
export default { //Composition API V.3
    name: 'Prueba',
    props: {},
    setup(){

        let elemSeleccionado=ref("")
        let elementos=[
            {nombre:'PEPE',imagen:'avatar1.jpg'},
            {nombre:'LUIS',imagen:'avatar2.jpg'},
            {nombre:'ANTONIO',imagen:'avatar3.jpg'},
            {nombre:'MARIA',imagen:'avatar4.jpg'}
        ]

        const verSeleccionado=()=>{
            //alert("has cambiado el select " + elemSeleccionado.value)
        }

        return {
            elemSeleccionado, 
            verSeleccionado,
            elementos
        }
    }

}
</script>

<style>
    .imagen{
        max-width:100px;
    }
</style>