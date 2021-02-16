<template>
  <div class="home">
    <Prueba titulo="el titulo que quiera"/>
    <Goku nombre="Goku"></Goku>
  </div>
</template>

<script>
import Goku from "@/components/Goku"
import Prueba from "@/components/Prueba"

export default {
  components: {
    Goku,
    Prueba
  }
}
</script>