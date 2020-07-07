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
  <g ref="r1">
    <circle cx="47.5" cy="60.5" r="10.5" fill="#F9F9F9"/>
    <circle cx="47.5" cy="90.5" r="10.5" fill="#F9F9F9"/>
    <circle cx="74.5" cy="45.5" r="10.5" fill="#F9F9F9"/>
    <circle cx="74.5" cy="74.5" r="10.5" fill="#F9F9F9"/>
    <circle cx="74.5" cy="104.5" r="10.5" fill="#F9F9F9"/>
    <circle cx="101.5" cy="60.5" r="10.5" fill="#F9F9F9"/>
    <circle cx="101.5" cy="90.5" r="10.5" fill="#F9F9F9"/>
  </g>
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
      this.animMain.play();
    },
    playIntro: function () {
      this.animIntro.play();
    },
    initIntro: function () {
      this.animIntro = anime({
        targets: this.$refs.r1.children,
        duration: 500,
        delay: anime.stagger(100),
        easing: 'easeOutQuad',
        autoplay: false,
        opacity: [0, 1],
        translateY: [10, 0]
      })
    },
    initMain: function () {
      this.animMain = anime({
        targets: this.$refs.r1.children,
        duration: 400,
        delay: anime.stagger(75),
        easing: 'easeInQuad',
        autoplay: false,
        opacity: [1, 0],
        translateY: [0, -10],
        complete: () => {
          this.animIntro.play();
        }
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