<template>
    <div id="news">
        <div class="flexslider">
            <ul class="slides">
                <li class="slide">
                    <div>img</div>
                    <h2>title</h2>
                    <p>detail</p>
                </li>
                <li class="slide">
                    <div>img</div>
                    <h2>title</h2>
                    <p>detail</p>
                </li>
                <li class="slide">
                    <div>img</div>
                    <h2>title</h2>
                    <p>detail</p>
                </li>
            </ul>
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
        $('.flexslider').flexslider()
    }
}
</script>
<style>
.slide {
    height: 4rem;
}
</style>
