<template>
    <header>
        <a class='menu_icon' @click.stop="deliver"></a>
		<p>{{current}}</p>
    </header>
</template>
<script>
export default {
    name: 'header',
    props: ['current'],
    methods: {
        deliver () {
            this.$emit('showmenu')
        }
    }
}
</script>
<style>
header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 255;
    background-color: #006CE3;
    width: 100%;
    height: 1rem;
    text-align: center;
    color: #FFF;
    line-height: 1rem;
    font-size: 0.4rem;
    transition: all 0.5s;
}
.menu_icon {
	display: inline-block;
	position: absolute;
	left: 0;
	width: 0.7rem;
	height: 0.6rem;
	margin-left: 0.2rem;
	margin-top: 0.2rem;
	background-image: url(../assets/menu_icon.png);
	background-size: contain;
}
#menu .showmenu {
    display: block;
}
</style>
