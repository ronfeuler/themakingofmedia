<style src="./ContentItem.scss" module lang="scss"></style>
<script src="./ContentItem.js"></script>

<template>
	<div :class="[$style.item,
		{ [$style.leader] : index === 0} ,
		{ [$style.podcast] : item.type === 'podcast'} ,
		{ [$style.video] : item.type === 'video'} ,
		{ [$style.sidebar] : this.display === 'sidebar'},
		{ [$style.full] : this.display === 'full'},
		{ [$style.blog] : item.type === 'blog'}]">
		<div :class="$style.thumbnail">
			<router-link :to="{ name: item.type, params: { slug: item.slug, title: item.title }}">
				<img :src="'/static/images/'+item.type+'/'+item.image.large">
			</router-link>
		</div>

		<div :class="$style.content">
			<div :class="$style.media_type">{{ item.type }}</div>
			<router-link :to="{ name: item.type, params: { slug: item.slug, title: item.title }}"><h3>{{ item.title }}</h3></router-link>
			<p :class="$style.description" v-html="item.thumb_content"></p>
			<p :class="$style.cta">
				<router-link :to="{ name: item.type, params: { slug: item.slug, title: item.title }}"><span v-if="(item.type === 'podcast')">Luister naar de podcast</span><span v-if="(item.type === 'video')">Bekijk de video</span><span v-if="(item.type === 'blog')">Lees verder</span></router-link>
			</p>
		</div>
	</div>
</template>

