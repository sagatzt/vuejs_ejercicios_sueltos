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
import Prueba from '@/components/Prueba'
export default {
  name: 'Pruebas',
  components: {
    Prueba
  },
  setup(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>

</style>