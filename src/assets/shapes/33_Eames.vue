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
    <path d="M100 150L150 125L150 175L100 150Z" :fill="sec"/>
    <path d="M-1.09278e-06 150L50 125L50 175L-1.09278e-06 150Z" :fill="sec"/>
    <path d="M50 125L100 100L100 150L50 125Z" :fill="sec"/>
    <path d="M100 100L150 75L150 125L100 100Z" :fill="sec"/>
    <path d="M-1.09278e-06 100L50 75L50 125L-1.09278e-06 100Z" :fill="sec"/>
    <path d="M50 75L100 50L100 100L50 75Z" :fill="sec"/>
    <path d="M100 50L150 25L150 75L100 50Z" :fill="sec"/>
    <path d="M100 -7.62939e-06L150 -25L150 25L100 -7.62939e-06Z" :fill="sec"/>
    <path d="M50 25L100 6.55671e-06L100 50L50 25Z" :fill="sec"/>
    <path d="M-1.09278e-06 50L50 25L50 75L-1.09278e-06 50Z" :fill="sec"/>
    <path d="M3.27835e-06 0L50 -25L50 25L3.27835e-06 0Z" :fill="sec"/>
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
        targets: this.$refs.r1.children,
        easing: 'easeOutQuad',
        autoplay: false,
        delay: anime.stagger(50, {direction: 'reverse'}),
        opacity: [0, 1],
        translateX: [-20, 0],
        translateY: [-15, 0]
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 350,
        targets: this.$refs.r1.children,
        easing: 'easeInQuad',
        autoplay: false,
        delay: anime.stagger(50),
        opacity: [1, 0],
        translateX: [0, 20],
        translateY: [0, 15],
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