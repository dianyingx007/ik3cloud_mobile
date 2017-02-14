<template>
    <div id="app">
        <menu-layout></menu-layout>
        <div class='right'>
            <header-layout :current="current" @showmenu="showmenu"></header-layout>
            <router-view></router-view>
            <footer-layout></footer-layout>
            <free-exp></free-exp>
        </div>
    </div>
</template>

<script>
import menuLayout from 'components/menu'
import headerLayout from 'components/Header'
import footerLayout from 'components/Footer'
import freeExp from 'components/freeExp'

export default {
    name: 'app',
    data () {
        return {
            current: '首页'
        }
    },
    methods: {
        showmenu (a) {
            console.log(a)
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
.clearfix::after {
    content: '';
    display: block;
    clear: both;
}
a {
    text-decoration: none;
}
</style>
