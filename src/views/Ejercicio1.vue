<template>
  <div class="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8 col-md-6">
          <p style="max-width:400px">
            <b>EJERCICIO:</b> Crear un componente compuesto por una etiqueta personalizable
            y una entrada de texto. La etiqueta permanecerá de color rojo mientras no
            se valide correctamente el NIF.</p>
            <p>Para recoger la entrada de texto, podéis llamar a la función desde el evento
              @keypress </p>
            <p><pre>&lt;InputNIF label='NIF:'&gt;</pre></p>
            <InputNIF label='GATO:'></InputNIF> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import InputNIF from '@/components/InputNIF'
import { ref } from 'vue'
export default {
  name: 'Ejercicio1',
  components: {
    HelloWorld,
    InputNIF
  }
}
</script>
