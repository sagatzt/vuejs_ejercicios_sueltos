<template>
  <div class="prueba">
        <h1>Pruebas</h1>

  </div>
</template>
<script>
import { ref, reactive } from 'vue'
export default {

    name:'Prueba',
    props:{},
    setup(){
        let informacion = ref("")
        //CONSUMO DEL API DEL AYUNTAMIENTO DE MADRID
        fetch('https://datos.madrid.es/egob/catalogo/202105-0-mercadillos.json')
            //.then(res=>res.json())
            //.then(datos=>console.log(datos['@graph']))
        //FIN DEL CONSUMO DEL API

        return {
            informacion
        }
    }

}
</script>