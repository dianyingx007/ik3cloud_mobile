import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Hello2 from 'components/Hello2'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Hello

    }, {
        path: '/home2',
        name: 'home2',
        component: Hello2
    }]
})
