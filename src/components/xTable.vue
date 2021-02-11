<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>concepto</th>
                <th>precio</th>
                <th>cantidad</th>
                <th>subtotal</th>                
            </tr>
        </thead>
        <tbody>
            <tr v-for="(dato,i) in datos" :key="i">
                <td>{{ dato.concepto }}</td> 
                <td>{{ dato.precio }}</td>
                <td>{{ dato.cantidad }}</td>
                <td>{{ subTotal(dato.precio,dato.cantidad)}}</td>
            </tr>
        </tbody>
    </table>
    <div class="total">
        <div colspan="3">TOTAL: <span>{{total}}</span></div>
    </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
export default {
    name:'xTable',
    props:{},
    setup(){
        const datos=reactive([
            {concepto:'Pantalones vaqueros chico',cantidad:2,precio:30.99},
            {concepto:'Camiseta básica chico',cantidad:4,precio:6.99},
            {concepto:'Pijama unisex',cantidad:1,precio:12.50},
            {concepto:'Deportivas Nike',cantidad:1,precio:80.00},
        ])
        let total=ref(0)
        
        const subTotal = (cant,precio)=>cant*precio
        const calcTotal= ()=>{
            datos.forEach(dato=>total.value+=dato.cantidad*dato.precio)
        }

        onMounted(()=>calcTotal())

        return {
            datos,
            subTotal,
            total,
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
</style>
