import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Product from 'components/Product'
import Customer from 'components/Customer'
import News from 'components/News'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [{
        path: '/',
        name: 'home',
        component: Home

    }, {
        path: '/product',
        name: 'product',
        component: Product
    }, {
        path: '/customer',
        name: 'customer',
        component: Customer
    }, {
        path: '/news',
        name: 'news',
        component: News
    }]
})
