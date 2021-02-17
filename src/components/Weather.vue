<template>
    <div class="weather">
        <h1>El tiempo</h1>
        <div>
            <select v-model="provincia">
                <option v-for="(prov,i) in provincias" :key="i" :value="prov.CODPROV">
                    {{prov.NOMBRE_PROVINCIA}}
                </option>
            </select>
            <select v-model="municipio">
                <option v-for="(muni,i) in municipios" :key="i" :value="muni.COD_GEO">
                    {{muni.NOMBRE}}
                </option>
            </select>            
        </div>
        <div class="row weather-info" v-if="datos.info">
            <div class="col-6">
                <label><b>FECHA: </b>{{datos.info.fecha}}</label>
                <label><b>Población: </b>{{datos.info.municipio.POBLACION_MUNI}} habitantes</label>
                <label><b>Superficie: </b>{{datos.info.municipio.SUPERFICIE}} m<sup>2</sup></label>
                <label><b>Altitud: </b>{{datos.info.municipio.ALTITUD}} m</label>
                <label><b>Latitud: </b>{{datos.info.municipio.LATITUD_ETRS89_REGCAN95}}</label>
                <label><b>Longitud: </b>{{datos.info.municipio.LONGITUD_ETRS89_REGCAN95}}</label>
            </div>
            <div class="col-6">
                <label><b>Cielo: </b>{{datos.info.stateSky.description}}</label>
                <label><b>Temp.Actual: </b>{{datos.info.temperatura_actual}} ºC</label>
                <label><b>Temp.Max: </b>{{datos.info.temperaturas.max}} ºC</label>
                <label><b>Temp.Min: </b>{{datos.info.temperaturas.min}} ºC</label>
                <label><b>Humedad: </b>{{datos.info.humedad}} %</label>
                <label><b>Viento: </b>{{datos.info.viento}} Nudos</label>
                <label><b>Prob.Lluvia: </b>{{datos.info.lluvia}} %</label>
            </div>
            <iframe 
                width="700" 
                height="170" 
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0" 
                :src="map">
            </iframe>
        </div> 
        <div v-else class="row weather-info">
            No hay datos de este municipio
        </div>
    </div>
</template>
 
<script>
import { ref, reactive, watch, computed } from 'vue'

export default {
    name:'Weather',
    props: {},
    setup(){
        let provincia=ref("01")
        let municipio=ref("00")
        let provincias=reactive([])
        let municipios=reactive([])
        let datos=reactive({})
        let map=ref("")
        //llenamos el array de provincias
        fetch('https://www.el-tiempo.net/api/json/v2/provincias')
            .then(res=>res.json())
            .then(datos=>{
                datos.provincias.forEach(element => {
                    provincias.push(element)
                })
            })        
        //si cambia la provincia, llenamos los municipios nuevos
        watch(provincia,async(cur,old)=>{
            console.log(`cur: ${cur}, old: ${old}`)
            const res = await fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${provincia.value}/municipios`)
            const data = await res.json()
            municipios.splice(0)
            data.municipios.forEach(m=>{
                municipios.push(m)
            })
        })
        //si cambia el municipio, buscamos sus datos meteorológicos
        watch(municipio,async(cur,old)=>{
            console.log(`cur: ${cur}, old: ${old}`)
            fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${provincia.value}/municipios/${municipio.value}`)
                .then((res)=>{
                    if(res.ok) return res.json()
                }).then(data=>{
                    datos.info=data
                    if(data!=undefined){
                        let latitud=data.municipio.LATITUD_ETRS89_REGCAN95
                        let longitud=data.municipio.LONGITUD_ETRS89_REGCAN95
                        map.value=`https://maps.google.com/?ll=${latitud},${longitud}&z=14&t=m&output=embed`
                    }
                })
            })

        return {
            provincia, provincias,
            municipio, municipios,
            datos,map
        }
    }

}
</script>

<style lang="scss" scoped>

    .weather{

        .weather-info{
            background: rgb(170, 255, 196);
            border: 1px solid #ccc;
            min-height: 200px;
            margin: 10px;
            padding: 10px;
            text-align: left;
            .col-6{
                display:grid;
            }
        }
    }
</style>