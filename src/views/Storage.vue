<template>
  <div class="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8 col-md-6">
          <Store />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Store from '@/components/Store'
export default {
  name: 'Storage',
  components: {
    Store
  },
  setup(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>

</style>