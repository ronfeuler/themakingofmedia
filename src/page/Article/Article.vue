<style src="./Article.scss" module lang="scss"></style>
<script src="./Article.js"></script>

<template>
	<div :class="[$style.content,
		{ [$style.podcast] : article.type === 'podcast'} ,
		{ [$style.video] : article.type === 'video'} ,
		{ [$style.blog] : article.type === 'blog'}]">
		<div :class="$style.wrapper">
			<div :class="$style.column">
				<div :class="$style.content" class="test">

					<div v-if="contentList.length > 0, article === 'not_found'" :class="$style.content_overview">
						Helaas, deze pagina bestaat niet.
					</div>

					<div v-if="contentList.length > 0, article !== 'not_found'" :class="$style.content_overview">

						<div :class="$style.main_image">
							<img :src="'/static/images/'+article.type+'/'+article.image.large">
							<div :class="$style.media_type">{{ article.type }}</div>
							<h1>{{ article.title }}</h1>
						</div>

						<div :class="$style.embeds" v-for="item in article.embed">
							<div v-html="item" :class="$style.embed"></div>
						</div>

						<div :class="$style.article_content">
							<div>
								<h2>{{ article.content_title }}</h2>
								<div v-html="article.content"></div>
								<p :class="$style.date">Geplaatst op {{ article.date }}</p>
							</div>
							<div :class="$style.links" v-if="article.links">
								<div :class="$style.link" v-for="link in article.links">
									<p>
										<a v-bind:href="link.url" v-html="link.title" target="_blank"></a>
										<span v-html="link.description"></span>
									</p>
								</div>
							</div>
						</div>


						<h2>Deel deze {{ article.type }}</h2>
						<div class="sharethis-inline-share-buttons"></div>

						<h2>Reageren</h2>
						<div class="fb-comments" :data-href="url" data-numposts="10" width="100%"></div>

					</div>
				</div>
			</div>
			<div :class="$style.side_column">
				<About />

				<hr />

				<SocialShare :display="'sidebar'" />

				<hr />

				<LatestContentItems :display="'sidebar'" :type="article.type" :ignore_id="article.id" />
			</div>
		</div>
	</div>
</template>

