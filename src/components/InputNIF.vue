<template>
<div id="container">
    <div id="iLabel" class="inputNIF-label">{{label}}</div>
    <div id="iInput" class="inputNIF-input" contenteditable="true" @keyup="comprobar"></div>
</div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'inputNIF',
    props: {   
        label: String
    },
    setup(props){
        const comprobar=()=>{
            let nif=/^\d{8}[a-zA-Z]{1}$/
            if(!nif.test(iInput.textContent))
                iLabel.classList.add('mal')
            else
                iLabel.classList.remove('mal')
        }

        onMounted(()=>{
            comprobar()
        })
        return {
            comprobar
        }

    }
}
</script>

<style lang="scss" scoped>
    #container {
        display:flex;
        overflow: clip;
        max-width:300px;
        margin:10px;
    }
    .inputNIF-input{
        border:0px;
        border-bottom:1px solid rgb(20, 170, 108);
        outline-width: 0px;
        text-align:left;
        padding-left:10px;
        width:100%;
    }
    .inputNIF-label{
        background:rgb(67, 138, 108);
        color:#fff;
        padding:2px 5px 0px 5px;
        border-radius: 3px;
    }
    
    .mal{
        background:red;
    }
</style>