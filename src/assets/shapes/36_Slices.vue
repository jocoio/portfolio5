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
    <path d="M37.5001 37.4673L37.5001 6.55671e-06L0.000108951 37.4673L0.000108957 75L37.5001 37.4673Z" fill="white"/>
    <path d="M37.5001 112.467L37.5001 75L0.000108951 112.467L0.000108957 150L37.5001 112.467Z" fill="white"/>
    <path d="M75.0001 37.4673L75.0001 6.55671e-06L37.5001 37.4673L37.5001 75L75.0001 37.4673Z" fill="white"/>
    <path d="M75.0001 112.467L75.0001 75L37.5001 112.467L37.5001 150L75.0001 112.467Z" fill="white"/>
    <path d="M112.5 37.4673L112.5 6.55671e-06L75.0001 37.4673L75.0001 75L112.5 37.4673Z" fill="white"/>
    <path d="M112.5 112.467L112.5 75L75.0001 112.467L75.0001 150L112.5 112.467Z" fill="white"/>
    <path d="M150 37.4673L150 6.55671e-06L112.5 37.4673L112.5 75L150 37.4673Z" fill="white"/>
    <path d="M150 112.467L150 75L112.5 112.467L112.5 150L150 112.467Z" fill="white"/>
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
        duration: 200,
        targets: this.$refs.r1.children,
        easing: 'easeOutQuad',
        autoplay: false,
        delay: anime.stagger(50),
        translateY: [15, 0],
        opacity: [0, 1]
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 250,
        targets: this.$refs.r1.children,
        easing: 'easeInQuad',
        autoplay: false,
        delay: anime.stagger(50),
        translateY: [0, -15],
        opacity: [1, 0],
        complete: () => {
          this.animIntro.play()
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