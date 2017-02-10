<template>
    <div id="app">
        <img src="./assets/logo.png">
        <header-layout></header-layout>
        <router-view></router-view>
        <footer-layout></footer-layout>
        <router-link to='/'>go to hello</router-link>
        <router-link to='/home2'>go to hello2</router-link>
    </div>
</template>

<script>
import headerLayout from 'components/Header'
import footerLayout from 'components/Footer'

export default {
    name: 'app',
    components: {headerLayout, footerLayout}
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
