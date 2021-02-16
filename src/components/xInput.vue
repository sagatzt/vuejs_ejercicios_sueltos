<template>
    <div class="xInput">
        <label :class="xClasses">{{label}}</label>
        <input v-model="text" class="x-text" @input="comprobar">
    </div>
</template>

<script>
import { ref, reactive, onMounted, computed} from 'vue'

export default {
    name: 'xInput',
    props: {   
        label: String,
        mask: String,
        text: String
    },
    setup(props){

        let reg=new RegExp(props.mask)
        reg.test()
        let xClasses = reactive({'x-label':true})
        let text=ref(props.text)
        const exp=new RegExp(`${props.mask}`)
        const comprobar=()=>{
            xClasses.ok=exp.test(text.value)
        }
        
        onMounted(()=>{})

        return {
            comprobar,
            xClasses,
            text
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .xInput {
        display:flex;
        overflow: clip;
        max-width:600px;
        width:95%;
        margin:10px;
    }
    .x-label{
        background:red;
        color:#fff;
        padding:2px 5px 0px 5px;
        border-radius: 3px;
    }
    .x-text{
        border:0px;
        border-bottom:1px solid rgb(67, 138, 108);
        outline-width: 0px;
        text-align:left;
        padding-left:10px;
        width:100%;
        margin-left:5px;
    }
    .ok{
        background:rgb(67, 138, 108);
    }
</style>