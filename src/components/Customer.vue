<template>
    <div id="customer">
        <div class="video">
            <div class="img">this is a screenshot for the video</div>
            <div class="play">play</div>
            <video controls>
                <source src="movie.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
                你的浏览器不支持视频
            </video>
        </div>
        <div class="industries">
            <div v-for="(item, index) in industries">
                <div class="industry"
                    :class="{active : index === industryCur}"
                    @click="showOrHide(index)">
                    {{item.industry}}
                </div>
                <div class="customer_row" v-for="customer in item.customers">
                    <div class="logo" :style="{backgroundColor: customer.logo}"></div>
                    <div>
                        <p class="name">{{customer.name}}</p>
                        <p class="description">{{customer.description}}</p>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
        <div class="more">
            <p>这些客户都选择我们的服务</p>
            <div>客户logo大全</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'customer',
    data () {
        return {
            industryCur: 0,
            industries: [{
                industry: '互联网',
                customers: [{
                    name: 'AAA公司',
                    logo: '#AAA',
                    description: '中国最大的互联网公司，最赚钱公司'
                }, {
                    name: 'AAA公司',
                    logo: '#AAA',
                    description: '中国最大的互联网公司，最赚钱公司'
                }, {
                    name: 'AAA公司',
                    logo: '#AAA',
                    description: '中国最大的互联网公司，最赚钱公司'
                }]
            }, {
                industry: '金融',
                customers: [{
                    name: 'AAA公司',
                    logo: '#AAA',
                    description: '中国最大的金融公司，最赚钱公司'
                }, {
                    name: 'AAA公司',
                    logo: '#AAA',
                    description: '中国最大的金融公司，最赚钱公司'
                }, {
                    name: 'AAA公司',
                    logo: '#AAA',
                    description: '中国最大的金融公司，最赚钱公司'
                }]
            }]
        }
    },
    methods: {
        showOrHide (index) {
            if (this.industryCur === index) {
                this.industryCur = -1
            } else this.industryCur = index
        }
    }
}
</script>
<style>
/* 视频 */
#customer .video {
    position: relative;
    height: 5rem;
}
#customer .video .img {
    position: absolute;
    left: 0;
    top: 0;
    height: 5rem;
    z-index: 200;
    font-size: 1rem;
    text-align: center;
    line-height: 2.5rem;
    background-color: #007FFF;
}
#customer .video .play {
    z-index: 200;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background-color: #AAA;
    text-align: center;
    line-height: 1.6rem;
    font-size: 0.5rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -0.8rem;
    margin-top: -0.8rem;
}
#customer .video video {
    background-color: #FF007F;
    width: 100%;
    height: 5rem;
}

/* 客户list */
.industry {
    border: 1px solid #007FFF;
    border-radius: 0.2rem;
    height: 1rem;
    width: 9rem;
    margin: 0.2rem auto;
    font-size: 0.5rem;
    line-height: 1rem;
    text-align: center;
    background-image: url('../assets/Customer/btn_right.png');
    background-repeat: no-repeat;
    background-position: 90% 50%;
}
.industry~.customer_row {
    display: none;
}
/* 选中效果 */
.industry.active {
    background-image: url('../assets/Customer/btn_bottom.png');    
}
.industry.active~.customer_row {
    display: block;
}

.customer_row {
    width: 9rem;
    height: 2rem;    
    margin: 0.2rem auto;
}
.customer_row div {
    display: inline-block;
    vertical-align: top;
    height: 2rem;
    overflow: hidden;    
}
.customer_row hr {
    margin: 0.1rem 0;
}
.customer_row .logo {
    width: 3rem;
}
.customer_row .name {
    font-size: 0.4rem;
    color: #007FFF;
}
.customer_row .description {
    font-size: 0.35rem;
}

/* more 客户图标 */
#customer .more {
    background-color: #EFEFEF;
}
#customer .more p {
    font-size: 0.4rem;
    text-align: center;
    line-height: 1rem;
}
#customer .more div {
    background-color: #AAA;
    height: 4rem;
}
</style>
