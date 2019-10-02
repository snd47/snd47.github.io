// default

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages

import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import NotFound from '@/pages/404'
import Product from '@/pages/Product'

// Routering

export default new Router({
    mode: 'history',            // delete it for # mode in adress string
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/Shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/shop/:id',
            name: 'product',
            component: Product
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
    ]
})