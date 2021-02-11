<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8">
          <p style="max-width:600px">
            <b>EJERCICIO4:</b> Crear un componente que, partiendo de un
            array como este (en el futuro saldrá de MongoDB o un API):</p>
            <p><pre>
{concepto:'Pantalones vaqueros chico',cantidad:2,precio:30.99},
{concepto:'Camiseta básica chico',cantidad:4,precio:6.99},
{concepto:'Pijama unisex',cantidad:1,precio:12.50},
{concepto:'Deportivas Nike',cantidad:1,precio:80.00}
            </pre></p>
            <p>
              Permita mostrar una tabla con los subtotales y el total, así:
            </p>
            <xTable />
        </div>
      </div>
    </div> 
</template>

<script>
import xTable from '@/components/xTable'
export default {
    name: 'Ejercicio4',
    components: {
      xTable
    }
}
</script>

<style lang="scss" scoped>

</style>