<template>
  <div class="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8 col-md-6">
          <ApiBackend />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiBackend from '@/components/ApiBackend'
export default {
  name: 'Ejercicio9',
  components: {
    ApiBackend
  },
  setup(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>

</style>