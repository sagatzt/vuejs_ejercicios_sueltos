<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8">
          <p style="max-width:600px">
            <b>EJERCICIO3:</b> Crear un componente con 2 cajas de texto y un
            botón. Al pulsar el botón, comprueba si el usuario es "pepe" y
            la contraseña es "1234". Si es así, debe mostrar el avatar y el 
            nombre del usuario con un link "Desconectar.</p>
            <p>Al pulsar el link desconectar, debería volver a mostrar el 
            formulario de login.
            </p>
            <p style="color:red"><b>NOTA:</b> Intenta usar los componentes xInput
            que creamos en el ejercicio2.</p>

            <p><pre>&lt;LoginBox /&gt;</pre></p>
            <LoginBox />
            
        </div>
      </div>
    </div> 
</template>

<script>
import LoginBox from '@/components/LoginBox'

export default {
    name: 'Ejercicio3',
    components: {
        LoginBox
    }
}
</script>

<style lang="scss" scoped>

</style>