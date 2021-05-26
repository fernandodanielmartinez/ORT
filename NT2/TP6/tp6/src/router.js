import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/formulario/index.vue'
import GetUsers from './components/getUsers/index.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/formulario' },
        { path: '/formulario', component: Formulario },
        { path: '/getUsers', component: GetUsers },
    ]
})