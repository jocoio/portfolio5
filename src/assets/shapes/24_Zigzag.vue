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
<path d="M112.5 75L112.5 112.514L150 112.514L112.5 75Z" fill="white"/>
<path d="M150 150V112.486H112.5L150 150Z" fill="white"/>
<path d="M112.5 75L112.5 112.514L75 112.514L112.5 75Z" fill="white"/>
<path d="M75.0001 150L75.0001 112.486L112.5 112.486L75.0001 150Z" fill="white"/>
<path d="M74.9998 150L74.9999 112.486L37.5 112.486L74.9998 150Z" fill="white"/>
<path d="M37.5002 75L37.5002 112.514L75 112.514L37.5002 75Z" fill="white"/>
<path d="M0.000133514 150L0.000130236 112.486L37.5 112.486L0.000133514 150Z" fill="white"/>
<path d="M37.4999 75L37.4999 112.514L-6.55909e-06 112.514L37.4999 75Z" fill="white"/>
<path d="M150 75L150 37.4864L112.5 37.4864L150 75Z" fill="white"/>
<path d="M112.5 2.18155e-05L112.5 37.5136L150 37.5136L112.5 2.18155e-05Z" fill="white"/>
<path d="M75.0001 75L75.0001 37.4864L112.5 37.4864L75.0001 75Z" fill="white"/>
<path d="M112.5 6.55668e-06L112.5 37.5136L75 37.5136L112.5 6.55668e-06Z" fill="white"/>
<path d="M74.9998 75L74.9999 37.4864L37.5 37.4864L74.9998 75Z" fill="white"/>
<path d="M37.5002 6.55668e-06L37.5002 37.5136L75 37.5136L37.5002 6.55668e-06Z" fill="white"/>
<path d="M37.4999 -1.20223e-09L37.4999 37.5136L-1.20214e-09 37.5136L37.4999 -1.20223e-09Z" fill="white"/>
<path d="M0.000133514 75L0.000143353 37.4864L37.5 37.4864L0.000133514 75Z" fill="white"/>
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