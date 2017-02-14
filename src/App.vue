<template>
    <div id="app">
        <menu-layout @changeTitle="changeTitle"></menu-layout>
        <div class='right'>
            <header-layout :current="currentTitle" @showmenu="showmenu"></header-layout>
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
            currentTitle: '首页'
        }
    },
    methods: {
        showmenu (a) {
            console.log(a)
        },
        changeTitle (title) {
            this.currentTitle = title
            console.log(2)
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
#app .right {
    position: relative;
    transform: translate(0, 0);
    transition: all 0.5s;
}
li {
    list-style-type: none;
}
</style>
