<template>
    <div id="app">
        <menu-layout
            :class="{showmenu:menuFlag}"
            :current="currentHash"
            @changeTitle="changeTitle"></menu-layout>
        <header-layout
            :class="{showmenu:menuFlag}"
            :current="currentTitle"
            @click.native="hidemenu()"
            @showmenu="showmenu"></header-layout>
        <transition name="click-bug">
            <div class="click_bug" v-show="menuFlag" @click="hidemenu()"></div>
        </transition>
        <div class='right clearfix'
            :class="{showmenu:menuFlag}">
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
            currentHash: '',
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
    components: {menuLayout, headerLayout, footerLayout, freeExp},
    /* 检测当前页面的hash */
    mounted () {
        this.currentHash = location.hash.slice(1)
    }
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
li {
    list-style-type: none;
}
#app {
    overflow: hidden;
}
#app .right {
    position: relative;
    transition: all 0.5s;
    background-color: #FFF;
    z-index: 1;
    box-shadow: -0.1rem 0 0.4rem rgba(0,0,0,.3);
    margin-top: 1rem;
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

/*
 *修复点击bug
 *bug：当显示菜单栏时，点击右边模块的链接，会跳转
*/
.click_bug {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(99,99,99,.1);
    z-index: 254;
    margin-left: 4rem;
}
.click-bug-enter-active {
    transition: all .5s;
}
.click-bug-leave-active {
    transition: all .2s;
}
.click-bug-enter, .click-bug-leave-active {
    transform: translateX(-4rem);
    opacity: 0;
}
</style>
