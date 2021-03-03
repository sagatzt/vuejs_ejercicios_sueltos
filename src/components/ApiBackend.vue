<template>
  <div class="prueba">
    <h1>API Backend</h1>
        Nombre: <input v-model="nombre">
        Apellidos: <input v-model="apellidos">
        <button @click="enviar" class="btn btn-primary">Enviar</button>

    <!-- esto es una tabla con el listado de usuarios-->    
    <div v-for="(usuario,ind) in usuarios" :key="ind">
        {{usuario.nombre}} {{usuario.apellidos}} 
        <a @click="eliminar(usuario._id)" class="eliminar" >Eliminar</a>
    </div>

  </div>
</template>
<script>
import { ref, reactive, computed, onMounted } from 'vue'
export default {
    name:'ApiBackend',
    props:{

    },
    setup(){
        let nombre=ref("")
        let apellidos=ref("")
        let usuarios=reactive([])

        onMounted(()=> {
            listar()
        })

        function eliminar(idSeleccionado){
            fetch('http://localhost:8081/api/eliminar',{
                method:'POST',
                body: JSON.stringify({
                    id: idSeleccionado
                }),
                headers: {'Content-Type':'application/json'}
            }).then(resp=>resp.json())
                .then(datos=>listar())
        }

        function listar(){
            fetch('http://localhost:8081/api/listar')
                .then(resp=>resp.json())
                .then(datos=>{
                    usuarios.splice(0)
                    datos.forEach(usuario => {
                        usuarios.push(usuario)
                    })
                })            
        }

        function enviar(){
            console.log(nombre.value,apellidos.value)
            fetch('http://localhost:8081/api/guardar',{
                method: 'POST',
                body: JSON.stringify({
                    nombre: nombre.value,
                    apellidos: apellidos.value
                }),
                headers: {'Content-Type':'application/json'}
            }).then(resp=>resp.json())
                .then(datos=>listar())
        }

        return {
            nombre,apellidos,
            enviar,
            usuarios,
            eliminar
        }
    }
}
</script>

<style lang="scss" scoped>
    a.eliminar{
        color:red;
    }
    input,button{
        margin:5px;
    }
</style>