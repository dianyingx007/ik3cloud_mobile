<template>
    <div id="app">
        <menu-layout
            :class="{showmenu:menuFlag}"
            @changeTitle="changeTitle"></menu-layout>
        <header-layout
            :class="{showmenu:menuFlag}"
            :current="currentTitle"
            @click.native="hidemenu()"
            @showmenu="showmenu"></header-layout>
        <div class='right'
            :class="{showmenu:menuFlag}"
            @click="hidemenu()">
            <router-view></router-view>
            <footer-layout></footer-layout>
        </div>
        <free-exp
            :class="{showmenu:menuFlag}"
            @click.native="hidemenu()"></free-exp>
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
            currentTitle: '首页',
            menuFlag: false
        }
    },
    methods: {
        showmenu () {
            if (!this.menuFlag) {
                this.menuFlag = true
            } else {
                this.menuFlag = false
            }
        },
        hidemenu () {
            this.menuFlag = false
        },
        changeTitle (title) {
            this.currentTitle = title
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
    transition: all 0.5s;
    box-shadow: -0.1rem 0 0.4rem rgba(0,0,0,.3);
    background-color: #FFF;
    z-index: 1;
}
li {
    list-style-type: none;
}
#app .right.showmenu {
    transform: translate(4rem,0);
}
#app header.showmenu {
    transform: translate(4rem,0);
}
#app .free_exp.showmenu {
    transform: translate(4rem,0);
}
</style>
