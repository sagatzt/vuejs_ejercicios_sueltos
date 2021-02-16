<template>
    <div class="weather">
        <h1>El tiempo</h1>
        <div>
            <select v-model="provincia">
                <option v-for="(prov,i) in provincias" :key="i" :value="prov.id">
                    {{prov.nm}}
                </option>
            </select>
            <select v-model="municipio">
                <option v-for="(muni,i) in municipios" :key="i" :value="muni.id">
                    {{muni.nm}}
                </option>
            </select>            
        </div>
    </div>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
    name:'Weather',
    props: {},
    setup(){
        let provincia=ref("00")
        let provincias=reactive([])
        fetch('https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json')
            .then(res=>res.json())
            .then(datos=>{
                datos.forEach(element => {
                    provincias.push(element)
                })
            })        

        watch(provincia,(current,old)=>{
            console.log("current: " + current, "old: " + old)
        })
        return {
            provincia,
            provincias
        }
    }

}
</script>

<style>

    .weather{

    }
</style>