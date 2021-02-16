<template>
    <div class="row nuevo">
    <div class="col-6"><input v-model="concepto" placeholder="concepto"/></div>
    <div class="col-2"><input type="number" size="3" v-model="cantidad" placeholder="0"/></div>
    <div class="col-2"><input type="number" size="4" v-model="precio" placeholder="0"/></div>
    <div class="col-2"><button @click="agregar" class="btn btn-success">Agregar</button></div>
    </div>
    <hr>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>concepto</th>
                <th>precio</th>
                <th>cantidad</th>
                <th>subtotal</th>      
                <th>Eliminar</th>      
            </tr>
        </thead>
        <tbody>
            <tr v-for="(dato,i) in datos" :key="i">
                <td>{{ dato.concepto }}</td> 
                <td>{{ dato.precio }}</td>
                <td><input size="4" type="number" v-model="dato.cantidad"></td>
                <td>{{ dato.precio*dato.cantidad}}</td>
                <td><button class="btn btn-danger">Eliminar</button></td>
            </tr>
        </tbody>
    </table>
    <div class="total">
        <div colspan="3">TOTAL: <span>{{total}}</span></div>
    </div>
</template>

<script>
import xInput from '@/components/xInput'
import { ref, reactive, computed, watch } from 'vue'
export default {
    name:'xTableV2',
    props:{},
    components:{
        xInput
    },
    setup(){

        let concepto=ref("")
        let cantidad=ref("0")
        let precio=ref("0.00")
        const datos=reactive([
            {concepto:'Pantalones vaqueros chico',cantidad:2,precio:30.99},
            {concepto:'Camiseta básica chic',cantidad:4,precio:6.99},
            {concepto:'Pijama unisex',cantidad:1,precio:12.50},
            {concepto:'Deportivas Nike',cantidad:1,precio:80.00},
        ])
               
        const total= computed(()=>{
            let total=0
            datos.forEach(dato=>{
                total+=dato.cantidad*dato.precio
            })
            return total
        })

        const agregar=()=>{
            let nuevo={
                concepto: concepto.value,
                cantidad: cantidad.value,
                precio: precio.value
            }
            datos.push(nuevo)
        }

        return {
            datos,
            agregar,
            total,
            concepto,cantidad,precio
        }
    }    
}
</script>

<style lang="scss" scoped>
    .total{
        font-weight:bold;
        text-align:right;
        padding-right:20px;
        background:rgb(18, 129, 92);
        color:#fff;
    }
    .row.nuevo{
        padding:5px;
        background:rgb(194, 243, 207);
    }
</style>
