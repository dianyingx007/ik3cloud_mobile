<template>
    <div id="news">
        <div class="flexslider">
            <ul class="slides">
                <li class="slide" v-for="item in slides">
                    <a :href="item.url">
                        <div class="img" :style="{backgroundColor: item.img}"></div>
                        <h2 class="title">{{item.title}}</h2>
                        <p class="detail"><span>{{item.detail}}</span></p>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <div v-for="item in news">
                <a class="news_row clearfix" :href="item.url">
                    <div class="img" :style="{backgroundColor: item.img}"></div>
                    <div>
                        <p class="title">{{item.title}}</p>
                        <p class="time">{{item.time}}</p>
                    </div>
                </a>
                <hr/>
            </div>
        </div>
    </div>
</template>
<script>
import '../ignore_lib/jquery.flexslider.min.js'
import '../ignore_lib/flexslider.css'
import $ from 'jquery'

export default {
    name: 'news',
    mounted () {
        $('.flexslider').flexslider({
            animation: 'slide',
            slideshowSpeed: 3000,
            touch: true,
            directionNav: false
        })
    },
    data () {
        return {
            slides: [{
                url: 'https://www.baidu.com',
                img: '#FF007F',
                title: '公司重大战略：冲出地球2333',
                detail: '冲出地球，首先要冲出中国，然后冲出亚洲，最后才冲出地球，当然，可以的话，可以冲出宇宙'
            }, {
                url: 'https://jd.com',
                img: '#00FF7F',
                title: '某某公司与我司大力合作',
                detail: '强强联合，大力出奇迹'
            }, {
                url: 'https://taobao.com',
                img: '#7F00FF',
                title: '国际发展战略',
                detail: '先战略中国市场，然后拓展到中国周边国家，例如日本、韩国、菲律宾、印度等，再拓展到亚洲业务，一直到全球业务'
            }],
            news: [{
                url: 'https://www.baidu.com',
                img: '#EEFF7F',
                title: '冲出地球，首先要冲出中国，然后冲出亚洲，最后才冲出地球',
                time: '2017-02-16'
            }, {
                url: 'https://www.baidu.com',
                img: '#EEFF7F',
                title: '强强联合，大力出奇迹',
                time: '2017-02-16'
            }, {
                url: 'https://www.baidu.com',
                img: '#EEFF7F',
                title: '先战略中国市场，然后拓展到中国周边国家，例如日本、韩国、菲律宾、印度等，再拓展到亚洲业务，一直到全球业务',
                time: '2017-02-16'
            }, {
                url: 'https://www.baidu.com',
                img: '#EEFF7F',
                title: '冲出地球，首先要冲出中国，然后冲出亚洲，最后才冲出地球',
                time: '2017-02-16'
            }]
        }
    }
}
</script>
<style>
/* slides */
.slide {
    text-align: center;
}
.slide a {
    color: #111;
}
.slide .img {
    height: 5rem;
}
.slide .title {
    font-size: 0.5rem;
    font-weight: 600;
    line-height: 1.5rem;
}
.slide .detail {
    font-size: 0.4rem;
    line-height: 0.5rem;
    width: 9rem;
    margin: 0 auto 1rem;
    position: relative;
}
.slide .detail span::before {
    content: '“';
    display: block;
    font-size: 1rem;
    position: absolute;
    left: -1rem;
    top: -0.2rem;
    color: #aaa;
}
.slide .detail span::after {
    content: '”';
    display: block;
    font-size: 1rem;
    position: absolute;
    right: -1rem;
    bottom: -0.5rem;
    color: #aaa;
}

/* news */
.news_row {
    display: block;
    color: #111;
    padding: 0.3rem 0;
}
.news_row div {
    display: inline-block;
    height: 2rem;
    vertical-align: top;
}
.news_row .img {
    width: 2.5rem;
    margin: 0 0.2rem;
}
.news_row .title {
    width: 7rem;
    height: 1.5rem;
    font-size: 0.4rem;
    font-weight: 600;
    overflow: auto;
}
.news_row .time {
    height: 0.5rem;
    display: table-cell;
    vertical-align: bottom;
}

/* 修改flexslider样式 */
.flexslider {
    margin: 0 !important;
    border: 0 !important;
    background-color: #FAFAFA !important;
}
.flex-control-nav {
    bottom: 0 !important;
}
.flex-control-paging li a {
    width: 0.2rem !important;
    height: 0.2rem !important;
}
</style>
