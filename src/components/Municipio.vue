<template>
    <div class="municipio">
        {{infor}}
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name:"Municipio",
    props: {
        info: String
    },
    setup(props){

        let infor=ref(props.info)
        console.log('ppp',infor)
        return {
            infor
        }
    }
}
</script>

<style>

</style>