<template>
  <div class="autocomplete">
        <h1>El Tiempo en municipios de España</h1>
        <!-- select de las provincias -->
        <div>
            <label>Elige provincia: </label>
            <select v-model="provincia" @change="verMunicipios">
                <option v-for="(prov,indice) in provincias" :key="indice" :value="prov.CODPROV">
                    {{prov.NOMBRE_PROVINCIA}} - {{prov.CODPROV}}
                </option>
            </select>
        </div>
        <!-- imput autocopmlete de los municipios -->
        <div>
            <label>Escribe municipio </label>
            <input v-model="inputFiltro" placeholder="Filtro">
            <div class="filtrado">
                <div v-for="(item,indice) in municipiosFiltrados" :key="indice">
                    <div class="elemento" @click="inputFiltro=item.NOMBRE">{{item.NOMBRE}}</div>
                </div>
            </div>
        </div>
        <!-- fin del input de autocompletado -->

        <div class="informacion" v-if="informacion.datos">
            HUMEDAD: {{informacion.datos.humedad}} % <br>
            LATITUD: {{informacion.datos.municipio.LATITUD_ETRS89_REGCAN95}}<br>
            LONGITUD: {{informacion.datos.municipio.LONGITUD_ETRS89_REGCAN95}}<br>
        </div>
  </div>
</template>
<script>
import { ref, reactive, watch, computed } from 'vue'
export default {

    name:'Prueba',
    props:{},
    setup(){
        let provincia=ref("")
        let provincias=reactive([])
        let municipios=reactive([])
        let municipio=ref("")
        let informacion=reactive({})
        let inputFiltro=ref("")

        let municipiosFiltrados=computed(()=>{
            return municipios.filter(m=>m.NOMBRE.indexOf(inputFiltro.value)!=-1)
        })




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
            municipio, verInformacion, 
            informacion, inputFiltro,
            municipiosFiltrados
        }
    }

}
</script>

<style lang="scss" scoped>
    .autocomplete{
        display:block;
        input{
            margin:10px;
        }
    }
    .filtrado{
        display:block;
        position:relative;
        min-height: 100px;
        background: chartreuse;
        width: 300px;
        
    }
    .elemento:hover{
        background: crimson;
    }    
</style>