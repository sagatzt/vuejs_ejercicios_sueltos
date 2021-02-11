<template>
    <div>
        <div class="aura" id="aura">
            <img src="@/assets/goku.webp" class="goku" id="goku" @click="cabrear">
        </div>
        <h3>{{ nombre }}</h3>
        <p>Fuerza: {{ personaje.fuerza }}</p>
        <p>Aura: {{ personaje.aura }}</p>
    </div>
</template>

<script>
import { ref, reactive, computed } from "vue"

export default {
    name: "Guku",
    props: {
        nombre: String,
        fuerza:{
            type: Number,
            default:1
        }
    },
    setup(props){
        let personaje = reactive({
            nombre: props.nombre,
            fuerza: props.fuerza,
            aura: 0
        })
        personaje.aura=computed(()=>personaje.fuerza/100)

        const cabrear = ()=>{
            if(personaje.fuerza<100) personaje.fuerza++
            goku.style.background=`rgb(255,0,0,${personaje.aura})`
        }
        return {
            personaje,
            cabrear
        }
    }
}
</script>


<style lang="scss" scoped>
  .goku{
    max-height: 200px;
  }
</style>