<style src="./App.scss" module lang="scss"></style>
<script src="./App.js"></script>

<template>
  <div :class="$style.wrapper">
    <div :class="$style.background">
      <!--<video autoplay muted loop>-->
      <!--<source src="/static/assets/video/background/home.mp4" type="video/mp4">-->
      <!--</video>-->
    </div>
    <MainHeader></MainHeader>
    <div :class="$style.content">
      <router-view></router-view>
    </div>
    <MainFooter></MainFooter>
  </div>
</template>
