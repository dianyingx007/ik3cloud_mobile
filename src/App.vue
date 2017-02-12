<template>
    <div id="app">
        <menu-layout></menu-layout>
        <div class='right'>
            <header-layout>{{current}}</header-layout>
            <router-view></router-view>
            <footer-layout></footer-layout>
            <router-link to='/'>go to hello</router-link>
            <router-link to='/home2'>go to hello2</router-link>
            <free-exp></free-exp>
        </div>
    </div>
</template>

<script>
import flexible from 'ignore_lib/flexible.js'
import headerLayout from 'components/Header'
import footerLayout from 'components/Footer'
import freeExp from 'components/freeExp'
import menuLayout from 'components/menu'

flexible
export default {
    name: 'app',
    data () {
        return {
            current: '首页'
        }
    },
    components: {menuLayout, headerLayout, footerLayout, freeExp}
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
img {
    border: 0;
}
</style>
