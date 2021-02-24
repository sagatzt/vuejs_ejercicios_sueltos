<template>
  <div class="prueba">
        <h1>Pruebas</h1>

  </div>
</template>
<script>
import { ref, reactive } from 'vue'
import  t from '@vitalets/google-translate-api'

export default {

    name:'Prueba',
    props:{
        latitud: String,
        longitud: String
    },
    setup(){
        console.log(t)
        t('Ik spreek Engels', {to: 'en'})
        .then(res => {
            console.log(res.text);
            //=> I speak English
            console.log(res.from.language.iso);
            //=> nl
        }).catch(err => {
            console.error(err);
        });
        return {

        }
    }

}
</script>