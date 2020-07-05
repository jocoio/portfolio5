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
  <g ref="elms">
    <g>
      <path d="M112.5 75L112.5 112.514L150 112.514L112.5 75Z" :fill="sec"/>
      <path d="M150 150V112.486H112.5L150 150Z" :fill="sec"/>
      <path d="M112.5 75L112.5 112.514L75 112.514L112.5 75Z" :fill="sec"/>
      <path d="M75.0001 150L75.0001 112.486L112.5 112.486L75.0001 150Z" :fill="sec"/>

      <path d="M74.9998 150L74.9999 112.486L37.5 112.486L74.9998 150Z" :fill="sec"/>
      <path d="M37.5002 75L37.5002 112.514L75 112.514L37.5002 75Z" :fill="sec"/>
      <path d="M0.000133514 150L0.000130236 112.486L37.5 112.486L0.000133514 150Z" :fill="sec"/>
      <path d="M37.4999 75L37.4999 112.514L-6.55909e-06 112.514L37.4999 75Z" :fill="sec"/>
    </g>
    <g> 
      <path d="M150 75L150 37.4864L112.5 37.4864L150 75Z" :fill="sec"/>
      <path d="M112.5 2.18155e-05L112.5 37.5136L150 37.5136L112.5 2.18155e-05Z" :fill="sec"/>
      <path d="M75.0001 75L75.0001 37.4864L112.5 37.4864L75.0001 75Z" :fill="sec"/>
      <path d="M112.5 6.55668e-06L112.5 37.5136L75 37.5136L112.5 6.55668e-06Z" :fill="sec"/>

      <path d="M74.9998 75L74.9999 37.4864L37.5 37.4864L74.9998 75Z" :fill="sec"/>
      <path d="M37.5002 6.55668e-06L37.5002 37.5136L75 37.5136L37.5002 6.55668e-06Z" :fill="sec"/>
      <path d="M37.4999 -1.20223e-09L37.4999 37.5136L-1.20214e-09 37.5136L37.4999 -1.20223e-09Z" :fill="sec"/>
      <path d="M0.000133514 75L0.000143353 37.4864L37.5 37.4864L0.000133514 75Z" :fill="sec"/>
    </g>
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
        duration: 250,
        targets: this.$refs.elms.children,
        easing: 'easeOutQuad',
        autoplay: false,
        opacity: [0, 1],
        translateY: [15, 0],
        delay: anime.stagger(150)
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 250,
        targets: this.$refs.elms.children,
        easing: 'easeInQuad',
        autoplay: false,
        opacity: [1, 0],
        translateY: [0, -30],
        delay: anime.stagger(150, {direction: 'reverse'}),
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