<style src="./MainHeader.scss" module lang="scss"></style>
<script src="./MainHeader.js"></script>

<template>
	<div :class="$style.main">
		<div :class="$style.wrapper">
			<router-link :class="$style.title" :to="{ name: 'Home' }">
				<div :class="$style.logo">
					<div :class="$style.stop"></div>
					<div :class="$style.play"></div>
					<div :class="$style.ff"></div>
					<div :class="$style.rec"></div>
				</div>
				<h2>the making of media</h2>
			</router-link>
		</div>
	</div>
</template>

