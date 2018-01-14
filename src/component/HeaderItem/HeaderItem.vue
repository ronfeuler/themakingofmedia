<style src="./HeaderItem.scss" module lang="scss"></style>
<script src="./HeaderItem.js"></script>

<template>
	<div :class="[$style.item,
		{ [$style.podcast] : item.type === 'podcast'} ,
		{ [$style.video] : item.type === 'video'} ,
		{ [$style.blog] : item.type === 'blog'}]">
		<div :class="$style.thumbnail">
			<router-link :to="{ name: item.type, params: { slug: item.slug, title: item.title }}">
				<img :src="'/static/images/'+item.type+'/'+item.image.thumbnail">
			</router-link>
		</div>
		<div :class="$style.content">
			<div :class="$style.media_type">{{ item.type }}</div>
			<router-link :to="{ name: item.type, params: { slug: item.slug, title: item.title }}"><h3>{{ item.title }}</h3></router-link>
			<p v-html="item.sub_title"></p>
			<p :class="$style.cta">
				<router-link :to="{ name: item.type, params: { slug: item.slug, title: item.title }}"><span v-if="(item.type === 'podcast')">Luister naar de podcast</span><span v-if="(item.type === 'video')">Bekijk de video</span><span v-if="(item.type === 'blog')">Lees verder</span></router-link>
			</p>
		</div>
	</div>
</template>

