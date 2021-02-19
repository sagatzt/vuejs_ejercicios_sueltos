<template>
  <div class="prueba">
        <h1>El Tiempo en municipios de España</h1>
        <!-- select de las provincias -->
        <select v-model="provincia" @change="verMunicipios">
            <option v-for="(prov,indice) in provincias" :key="indice" :value="prov.CODPROV">
                {{prov.NOMBRE_PROVINCIA}} - {{prov.CODPROV}}
            </option>
        </select>
        <!-- select de los municipios -->
        <select v-model="municipio" @change="verInformacion">
            <option v-for="(muni,indice) in municipios" :key="indice" :value="muni.COD_GEO">
                {{muni.NOMBRE}}
            </option>
        </select>
        <div class="informacion" v-if="informacion.datos">
            HUMEDAD: {{informacion.datos.humedad}} % <br>
            LATITUD: {{informacion.datos.municipio.LATITUD_ETRS89_REGCAN95}}<br>
            LONGITUD: {{informacion.datos.municipio.LONGITUD_ETRS89_REGCAN95}}<br>
        </div>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
export default {

    name:'Prueba',
    props:{},
    setup(){
        let provincia=ref("")
        let provincias=reactive([])
        let municipios=reactive([])
        let municipio=ref("")
        let informacion=reactive({})
        //CARGAR LAS PROVINCIAS
        fetch('https://www.el-tiempo.net/api/json/v2/provincias')
            .then(res=>res.json())
            .then(datos=>{
                datos.provincias.forEach(provincia => {
                    provincias.push(provincia)  
                })
            })
        //CARGAR LOS MUNICIPIOS
        function verMunicipios(){
            fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${provincia.value}/municipios`)
                .then(res=>res.json())
                .then(datos=>{
                    municipios.splice(0)
                    datos.municipios.forEach(municipio=>{
                        municipios.push(municipio)
                    })
                })
        }
        //CARGAR LA INFORMACIÓN DEL MUNICIPIO
        function verInformacion(){
            fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${provincia.value}/municipios/${municipio.value}`)
                .then(res=>res.json())
                .then(datos=>{
                    console.log(datos.breadcrumb[1].title)
                    informacion.datos=datos
                })
        }

        return {
            provincias, provincia, verMunicipios,
            municipios, municipio, verInformacion,
            informacion
        }
    }

}
</script>

<style>
    .prueba{

    }
</style>