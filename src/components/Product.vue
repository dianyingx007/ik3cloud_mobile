<template>
    <div id="product">
        <div class="slogan">
            <p>人与人之间基本的信任呢</p>
            <p>亲情&nbsp;.&nbsp;爱情&nbsp;.&nbsp;友情</p>
        </div>
        <div class="video">
            <div class="play">play</div>
        </div>
        <div class="customer-num">
            已有<span>{{customerNum}}+</span>位天使加盟我们
        </div>
        <div class="fields">
            <a class="field"
                v-for="item in fields"
                href="#/product">
                <div class="img"
                    :style="{backgroundColor: item.img}">
                </div>
                <div>
                    <p class="field-name">{{item.field}}</p>
                    <p class="field-detail">{{item.detail}}</p>
                </div>
            </a>
        </div>
        <div class="value">
            <p>比赛的价值观</p>
            <div class="flex">
                <div v-for="item in characters">
                    <div class="img"
                        :style="{backgroundColor: item.img}">
                    </div>
                    <p class="title">{{item.character}}</p>
                    <p class="detail">{{item.detail}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'product',
    data () {
        return {
            customerNum: 1000,
            fields: [{
                img: '#991111',
                field: '经济',
                detail: '经济很重要,经济很重要,经济很重要，重要的事情说三遍'
            }, {
                img: '#119911',
                field: '政治',
                detail: '政治很重要'
            }, {
                img: '#111199',
                field: '文化',
                detail: '文化很重要，文化很重要，文化很重要，文化很重要，文化很重要，重要的事情说五遍'
            }],
            characters: [{
                character: '安全第一',
                img: '#199999',
                detail: '安全第一安全第一安全第一安全第一安全第一'
            }, {
                character: '友谊第二',
                img: '#919999',
                detail: '友谊第二友谊第二友谊第二友谊第二友谊第二'
            }, {
                character: '名次第三',
                img: '#991999',
                detail: '名次第三名次第三名次第三名次第三名次第三'
            }, {
                character: '过程第四',
                img: '#999199',
                detail: '过程第四过程第四过程第四过程第四过程第四'
            }]
        }
    }
}
</script>
<style>
#product .slogan {
    background-color: #EEF7FF;
    height: 3rem;
    text-align: center;
}
#product .slogan p {
    height: 1.5rem;
    line-height: 1.5rem;
}
#product .slogan p:first-child {
    color: #008BEF;
    font-size: 0.7rem;
}
#product .slogan p:last-child {
    font-size: 0.6rem;
}

#product .video {
    position: relative;
    height: 5rem;
    background-color: #E5F4FF;
}
#product .video .play {
    width: 2rem;
    border-radius: 50%;
    line-height: 2rem;
    text-align: center;
    font-size: 0.8rem;
    background-color: #007FFF;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

#product .customer-num {
    line-height: 2rem;
    font-size: 0.5rem;
    text-align: center;
}
#product .customer-num span {
    color: #008BEF;
    font-size: 1rem;
}

#product .field {
    padding: 0 0.5rem;
    display: inline-block;
    width: 100%;
    height: 2rem;
    overflow: hidden;
}
#product .field div {
    display: inline-block;
    vertical-align: top;
}
#product .field .img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
}
#product .field div:last-child {
    width: 7.4rem;
}
#product .field-name {
    font-size: 0.5rem;
}
#product .field-detail {
    font-size: 0.3rem;
}

#product .value {
    background-color: #F3FBFF;
    text-align: center;
}
#product .value>p {
    line-height: 2rem;
    font-size: 0.7rem;
}
#product .flex {
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
#product .flex>div {
    width: 4.5rem;
    padding: 0.5rem;
}
#product .flex .img {
    width: 2rem;
    height: 2rem;
    display: inline-block;
}
#product .flex .title {
    font-size: 0.4rem;
}
#product .flex .detail {
    font-size: 0.3rem;
}
</style>
