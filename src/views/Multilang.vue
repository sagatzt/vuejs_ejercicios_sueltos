<template>
  <div class="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8 col-md-6">
          <Lang />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lang from '@/components/Lang'
export default {
  name: 'Multilang',
  components: {
    Lang
  },
  setup(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>

</style>