<template>
    <header>
        <a class='menu_icon'></a>
		<p><slot></slot></p>
    </header>
</template>
<style>
header {
    position: fixed;
    top: 0;
    background-color: #006CE3;
    width: 100%;
    height: 1rem;
    text-align: center;
    color: #FFF;
    line-height: 1rem;
    font-size: 0.4rem;
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
</style>
