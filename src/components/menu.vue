<template>
    <div id="menu">
        <router-link tag='li' v-for='(link, index) in links' :to='link.to' >
            <a>
                <span @click='changeIndex(index, link.title)'>{{link.title}}</span>
            </a>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'menu',
    data () {
        return {
            links: [{
                title: '首页',
                to: '/'
            }, {
                title: '产品',
                to: '/product'
            }, {
                title: '客户',
                to: '/customer'
            }, {
                title: '新闻',
                to: '/news'
            }],
            currentIndex: 0
        }
    },
    methods: {
        changeIndex (index, title) {
            this.currentIndex = index
            this.$emit('changeTitle', title)
        }
    }
}
</script>
<style>
#menu {
    position: absolute;
    left: 0;
    height: 100%;
    background-color: #007FFF;
    width: 4rem;
    box-shadow: -3px 0 10px rgba(0,0,0,.3) inset;
    z-index: 255;
    transform: translate(0,0);
    transition: all 0.5s;
}
#menu li {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 0.4rem;
}
#menu a {
    color: #FFF;
}
</style>
