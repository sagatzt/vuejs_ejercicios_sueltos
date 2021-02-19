<template>
  <div class="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8 col-md-6">
            <Prueba />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Prueba from '@/components/Prueba.vue'
export default {
  name: 'Pruebas',
  components: {
    Prueba
  }
}
</script>
