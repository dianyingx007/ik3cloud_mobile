import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Hello2 from 'components/Hello2'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home

    }, {
        path: '/home2',
        name: 'home2',
        component: Hello2
    }]
})
