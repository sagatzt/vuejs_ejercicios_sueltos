<template>
    <div class="loginbox">
        <div v-if="auth" class="loginbox-form">
            <xInput id="x1" label="Username:" mask=".*" />
            <xInput id="x2" label="Password:" mask=".*" />
            <button class="btn btn-success" @click="login">Entrar</button>
        </div>
        <!----------------------->
        <div v-else class="loginbox-data">
            <div class="loginbox-avatar">
                <img src="@/assets/batman.png">
                <span v-html="username" class="loginbox-username"></span>
            </div>
            <div style="display:block">
                <a href="#" @click="unLogin">Desconectar</a>
            </div>
        </div>
    </div>
</template>

<script>
import xInput from './xInput'
import {ref, reactive, onMounted, computed} from 'vue'
export default {
    name: 'LoginBox',
    components: {
        xInput
    },
    props: {},
    setup(){
        let username=ref()
        let auth=ref(true)
        const login=()=>{
            console.log(x1.childNodes[1].value)
            username.value=x1.lastChild.value
            auth.value=false
        }
        const unLogin=()=>{
            auth.value=true
        }
        return {
            login,unLogin,
            username,
            auth
        }
    }
}
</script>

<style lang="scss" scoped>
.loginbox{
    width:300px;
    height: 160px;
    border: 1px solid #000;
    border: 5px solid rgb(41, 180, 138);
    padding:10px;
    background: rgb(5, 68, 83);
    color:#fff;
    transition: right .5s;
    &:hover{
        right: 0px;
        cursor: pointer;
    }
    .loginbox-avatar{
        text-align:left;
        img{
            max-width:60px;
            margin:10px;
        }
        .loginbox-username{
            margin-left:10px;
        }
    }
}
</style>