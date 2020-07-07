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
    <path d="M150 100C150 127.614 127.614 150 100 150C100 150 100 100 150 100Z" fill="#F9F9F9"/>
    <path d="M100 100C100 127.614 77.6142 150 50 150C50 150 50 100 100 100Z" fill="#F9F9F9"/>
    <path d="M50 100C50 127.614 27.6142 150 -8.74228e-06 150C-8.74228e-06 150 0 100 50 100Z" fill="#F9F9F9"/>
    <path d="M150 50C150 77.6142 127.614 100 100 100C100 100 100 50 150 50Z" fill="#F9F9F9"/>
    <path d="M100 50C100 77.6142 77.6142 100 50 100C50 100 50 50 100 50Z" fill="#F9F9F9"/>
    <path d="M50 50C50 77.6142 27.6142 100 -8.74228e-06 100C-8.74228e-06 100 0 50 50 50Z" fill="#F9F9F9"/>
    <path d="M150 8.74228e-06C150 27.6142 127.614 50 100 50C100 50 100 0 150 8.74228e-06Z" fill="#F9F9F9"/>
    <path d="M100 8.74228e-06C100 27.6142 77.6142 50 50 50C50 50 50 0 100 8.74228e-06Z" fill="#F9F9F9"/>
    <path d="M50 8.74228e-06C50 27.6142 27.6142 50 -8.74228e-06 50C-8.74228e-06 50 0 0 50 8.74228e-06Z" fill="#F9F9F9"/>
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
        delay: anime.stagger(100, {direction: 'reverse'}),
        easing: 'easeInOutQuad',
        autoplay: false,
        opacity: [0, 1],
        translateX: [-15, 0],
        translateY: [15, 0]
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 400,
        targets: this.$refs.r1.children,
        easing: 'easeInQuad',
        autoplay: false,
        delay: anime.stagger(50, {direction: 'reverse'}),
        opacity: [1, 0],
        translateX: [0, 20],
        translateY: [0, -20],
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