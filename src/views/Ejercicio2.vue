<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8">
          <p style="max-width:600px">
            <b>EJERCICIO2:</b> Crear un componente como el del ejercicio1 pero que
            ahora reciba un atributo más llamado 'mask' donde podamos decirle la 
            expresión regular que debe validar.</p>

            <p><pre>&lt;xInput label='email:' mask='\S+@\S+\.\S+'&gt;</pre></p>
            <xInput label='email:' mask="\S+@\S+\.\S+" />
            
            <p><pre>&lt;xInput label='NIF:' mask='^\d{8}[a-zA-Z]{1}$'&gt;</pre></p>
            <xInput label='DNI:' mask='^\d{8}[a-zA-Z]{1}$' />

            <xInput label='VISA:' mask='^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$' />

            
        </div>
      </div>
    </div> 
</template>

<script>
import xInput from '@/components/xInput'

export default {
    name: 'Ejercicio2',
    components: {
        xInput
    }
}
</script>

<style lang="scss" scoped>

</style>