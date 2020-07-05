<template>
  <svg 
    ref="svg"
    width="100%" 
    height="100%" 
    viewBox="0 0 150 150" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg"
>
<rect width="150" height="150" :fill="pri"/>
<rect x="66.6666" y="100" width="16.6667" height="50" :fill="sec"/>
<rect x="50" y="116.667" width="50" height="16.6667" :fill="sec"/>
<rect x="116.667" y="100" width="16.6667" height="50" :fill="sec"/>
<rect x="100" y="116.667" width="50" height="16.6667" :fill="sec"/>
<rect x="66.6666" y="50" width="16.6667" height="50" :fill="sec"/>
<rect x="50" y="66.6667" width="50" height="16.6667" :fill="sec"/>
<rect x="116.667" y="50" width="16.6667" height="50" :fill="sec"/>
<rect x="100" y="66.6667" width="50" height="16.6667" :fill="sec"/>
<rect x="66.6666" width="16.6667" height="50" :fill="sec"/>
<rect x="50" y="16.6667" width="50" height="16.6667" :fill="sec"/>
<rect x="116.667" width="16.6667" height="50" :fill="sec"/>
<rect x="100" y="16.6667" width="50" height="16.6667" :fill="sec"/>
<rect x="16.6666" y="50" width="16.6667" height="50" :fill="sec"/>
<rect y="66.6667" width="50" height="16.6667" :fill="sec"/>
<rect x="16.6666" width="16.6667" height="50" :fill="sec"/>
<rect y="16.6667" width="50" height="16.6667" :fill="sec"/>
<rect x="16.6666" y="100" width="16.6667" height="50" :fill="sec"/>
<rect y="116.667" width="50" height="16.6667" :fill="sec"/>
</svg>
</template>

<script>
import anime from 'animejs';

export default {
  data: function () {
    return {
      animIntro: null,
      animMain: null
    }
  },
  computed: {},
  props: {
    pri: String,
    sec: String
  },
  components: {},
  methods: {
    playMain: function () {
      console.log('animating');
    },
    playIntro: function () {
      this.animIntro.play();
    },
    initIntro: function () {
      this.animIntro = anime({
        duration: 500,
        targets: this.$refs.svg,
        easing: 'easeInOutQuad',
        autoplay: false,
        opacity: [0, 1]
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        targets: this.$refs.svg,
        autoplay: false,
      })
      .add({
        duration: 500,
        easing: 'easeInOutQuad',
        opacity: [1, 0]
      })
      .add({
        duration: 500,
        easing: 'easeInOutQuad',
        opacity: [0, 1]
      })
    }
  },
  watch: {},
  created: function () {},
  mounted: function () {
    this.initMain();
    this.initIntro();
  }
}
</script>

<style scoped>
</style>