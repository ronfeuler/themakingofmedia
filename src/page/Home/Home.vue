<style src="./Home.scss" module lang="scss"></style>
<script src="./Home.js"></script>

<template>
  <div :class="$style.main">
    <div :class="$style.wrapper">
      <div :class="$style.column">
        <div v-if="contentList.length > 0" v-for="(item, index) in contentList" :class="$style.content_overview">
          <ContentItem :item="item" :display="'full'" :index="index"></ContentItem>
        </div>
      </div>
      <div :class="$style.side_column">

        <About />
        <hr />
        <SocialShare :display="'sidebar'" />

      </div>
    </div>
  </div>
</template>
