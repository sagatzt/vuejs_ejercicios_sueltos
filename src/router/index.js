import { createRouter, createWebHistory } from 'vue-router'
import Ejercicio1 from '../views/Ejercicio1.vue'
import Home from '../views/Home'
import Ejercicio2 from '../views/Ejercicio2.vue'
import Ejercicio3 from '../views/Ejercicio3.vue'
import Ejercicio4 from '../views/Ejercicio4.vue'
import Ejercicio5 from '../views/Ejercicio5.vue'
import Ejercicio6 from '../views/Ejercicio6.vue'
import Ejercicio7 from '../views/Ejercicio7.vue'
import Ejercicio8 from '../views/Ejercicio8.vue'
import Ejercicio9 from '../views/Ejercicio9.vue'
import Multilang from '../views/Multilang.vue'
import Storage from '../views/Storage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Ejercicio1',
    name: 'Ejercicio1',
    component: Ejercicio1
  },
  {
    path: '/Ejercicio2',
    name: 'Ejercicio2',
    component: Ejercicio2
  },
  {
    path: '/Ejercicio3',
    name: 'Ejercicio3',
    component: Ejercicio3
  },
  {
    path: '/Ejercicio4',
    name: 'Ejercicio4',
    component: Ejercicio4
  },
  {
    path: '/Ejercicio5',
    name: 'Ejercicio5',
    component: Ejercicio5
  },
  {
    path: '/Ejercicio6',
    name: 'Ejercicio6',
    component: Ejercicio6
  },
  {
    path: '/Ejercicio7',
    name: 'Ejercicio7',
    component: Ejercicio7
  },  
  {
    path: '/Ejercicio8',
    name: 'Ejercicio8',
    component: Ejercicio8
  },  
  {
    path: '/Ejercicio9',
    name: 'Ejercicio9',
    component: Ejercicio9
  },  
  {
    path: '/Multilang',
    name: 'Multilang',
    component: Multilang
  },  
  {
    path: '/Storage',
    name: 'Storage',
    component: Storage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
