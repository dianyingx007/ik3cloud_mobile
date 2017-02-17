<template>
    <div id="menu">
        <div class="logo">LOGO</div>
        <router-link tag='li' v-for='(link, index) in links' :to='link.to' :class="{active:index === currentIndex}">
            <a class="row">
                <span @click='changeIndex(index, link.title)'>{{link.title}}</span>
            </a>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'menu',
    props: ['current'], /* 这里的current时links.to类型的值 */
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
    },
    watch: {
        current: {
            handler (val, oldVal) {
                var that = this
                this.links.forEach(function (ele, index) {
                    if (val === ele.to) {
                        that.currentIndex = index
                        that.$emit('changeTitle', ele.title)
                    }
                })
            }
        }
    }
}
</script>
<style>
#menu {
    position: fixed;
    left: 0;
    height: 100%;
    background-color: #007FFF;
    text-align: center;
    width: 4rem;
}
#menu .logo {
    height: 1rem;
    line-height: 1rem;
    color: #FFF;
    background-color: #007AAA;
}
#menu li {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.4rem;
}
#menu a {
    color: #FFF;
    display: inline-block;
}
#menu li.active {
    background-color: #FFF;
}
#menu li.active a {
    color: #007FFF;
    font-weight: 800;
}
/*实现标签的移动动画*/
#menu .row {
    transition: opacity 0.5s ease,transform 0.3s ease;
    transform: translate(4rem,0);
    opacity: 0;
}
.showmenu#menu .row {
    transform: translate(0,0);
    opacity: 1;
}
</style>
