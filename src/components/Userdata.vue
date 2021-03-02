<template>
    <div class="userdata">
        <span>Componente userdata</span>
        <h3>{{user.nombre}} {{user.apellidos}}
            <span class="total">
                {{total}}
            </span>
            </h3>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import {ref, computed} from 'vue'
export default {
    name:'Userdata',
    props:{},
    setup(){
        const store=useStore()
        let user=computed(()=>{
            return store.getters.getUser
        })
        let total=computed(()=>{
            return store.getters.getTotal
        })
        
        return {
            user,
            total
        }

    }

}
</script>

<style lang="scss" scoped>
    .userdata{
        min-height: 50px;
        padding:10px;
        background: #ccc;
        span{
            float:right;
            font-size: .6em;
        }
        .total{
            background: red;
            color:#ccc;
            font-size:.6em;
            padding:10px;
            border-radius:50px;
        }
    }
</style>