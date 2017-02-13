<template>
    <footer>
        <div class='mini_logo'>MINI-LOGO</div>
        <p>ABC有限公司 版权所有C2000-3000</p>
        <p>地方ICP备88888888号-88</p>
    </footer>
</template>
<script></script>
<style>
footer {
    background-color: #535353;
    margin-bottom: 1rem;
    text-align: center;
}
.mini_logo {
    display: inline-block;
    width: 2.5rem;
    height: 0.6rem;
    background-color: #AAA;
    background-size: cover;
}
.mini_logo~p {
    display: inline-block;
    font-size: 0.3rem;
    height: 0.6rem;
    line-height: 0.6rem;
    vertical-align: top;
    color: #EEE;
}
.mini_logo~p:last-child {
    display: block;
}
</style>
