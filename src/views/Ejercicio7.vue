<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8">
          <p style="max-width:600px">
            <b>EJERCICIO7:</b> Sobre el ejercicio anterior, sustituir el select
            de los municipios por un imput de autocompletado.
          </p>
          <p>Al introducir el nombre del municipio, éste deberá filtrar el Array
            de municipios para que solo aparezcan los municipios que coincidan
            con lo que se haya escrito en el input.
          </p>
        </div>
        <div class="col-12">
          <Autocomplete />
        </div>
      </div>
    </div> 
</template>

<script>
import Autocomplete from '../components/Autocomplete.vue'

export default {
    name: 'Ejercicio5',
    components: {
        Autocomplete
    }
}
</script>

<style lang="scss" scoped>

</style>