<template>
  <div class="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10">
          <p style="max-width:800px">
            <b>EJERCICIO8:</b> Crear la simulación del carrito de articulos de un e-commerce, donde se disponga de un resumen de los artículos
            comprados y un montante total en €.
          </p>
          <p>Para ello, crearemos un componente "Item" que representará cada uno de los artículos y lo mostraremos en una vista "Padre", como se muestra a continuación
          </p>
        </div>
        <div class="col-12"><Carrito /></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carrito from '@/components/Carrito'

export default {
  name: 'Ejercicio8',
  components: {
    Carrito
  }
}
</script>
