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
        <div class="industries">list</div>
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
    }
}
</script>
<style>
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
