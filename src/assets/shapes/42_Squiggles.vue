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
    <path d="M2.05298e-06 150.5C-3.20128e-08 171.211 17.0132 188 38 188L38 113C17.0132 113 4.13797e-06 129.789 2.05298e-06 150.5Z" fill="#F9F9F9"/>
    <path d="M2.95927e-06 75.5C8.74278e-07 96.2107 17.0132 113 38 113V38C17.0132 38 5.04426e-06 54.7893 2.95927e-06 75.5Z" fill="#F9F9F9"/>
    <path d="M0 0.5C-2.08499e-06 21.2107 17.0132 38 38 38L38 -37C17.0132 -37 2.08499e-06 -20.2107 0 0.5Z" fill="#F9F9F9"/>
    <path d="M9.06291e-07 -74.5C-1.1787e-06 -53.7893 17.0132 -37 38 -37V-112C17.0132 -112 2.99128e-06 -95.2107 9.06291e-07 -74.5Z" fill="#F9F9F9"/>
  </g>
  <g ref="r3">
    <path d="M75 112.5C75 133.211 91.7893 150 112.5 150L112.5 75C91.7893 75 75 91.7893 75 112.5Z" fill="#F9F9F9"/>
    <path d="M75 37.5C75 58.2107 91.7893 75 112.5 75V0C91.7893 1.56361e-06 75 16.7893 75 37.5Z" fill="#F9F9F9"/>
    <path d="M75 -37.5C75 -16.7893 91.7893 1.56361e-06 112.5 0L112.5 -75C91.7893 -75 75 -58.2107 75 -37.5Z" fill="#F9F9F9"/>
  </g>
  <g ref="r2">
    <path d="M75 112.5C75 91.7893 58.2107 75 37.5 75L37.5 150C58.2107 150 75 133.211 75 112.5Z" fill="#F9F9F9"/>
    <path d="M75 37.5C75 16.7893 58.2107 7.48931e-06 37.5 0L37.5 75C58.2107 75 75 58.2107 75 37.5Z" fill="#F9F9F9"/>
    <path d="M75 -37.5C75 -58.2107 58.2107 -75 37.5 -75L37.5 0C58.2107 7.48931e-06 75 -16.7893 75 -37.5Z" fill="#F9F9F9"/>
  </g>
  <g ref="r4">
    <path d="M150 150.5C150 129.789 132.987 113 112 113L112 188C132.987 188 150 171.211 150 150.5Z" fill="#F9F9F9"/>
    <path d="M150 75.5C150 54.7893 132.987 38 112 38L112 113C132.987 113 150 96.2107 150 75.5Z" fill="#F9F9F9"/>
    <path d="M150 0.500021C150 -20.2107 132.987 -37 112 -37L112 38C132.987 38 150 21.2107 150 0.500021Z" fill="#F9F9F9"/>
    <path d="M150 -74.5C150 -95.2107 132.987 -112 112 -112L112 -37C132.987 -37 150 -53.7893 150 -74.5Z" fill="#F9F9F9"/>
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
      this.animIntro = anime.timeline({
        duration: 900,
        easing: 'easeOutQuad',
        autoplay: false,
      })
      .add({
        targets: this.$refs.r1.children,
        translateY: [-200, 0],
        delay: anime.stagger(100)
      }, 0)
      .add({
        targets: this.$refs.r2.children,
        translateY: [300, 0],
        delay: anime.stagger(100, {direction: 'reverse'})
      }, 0)
      .add({
        targets: this.$refs.r3.children,
        translateY: [-200, 0],
        delay: anime.stagger(100)
      }, 0)
      .add({
        targets: this.$refs.r4.children,
        translateY: [300, 0],
        delay: anime.stagger(100, {direction: 'reverse'})
      }, 0)
    },
    initMain: function () {
      this.animMain = anime.timeline({
        duration: 400,
        autoplay: false,
      })
      .add({
        easing: 'easeOutExpo',
        targets: this.$refs.r1.children,
        translateY: [0, 37],
      }, 0)
      .add({
        easing: 'easeOutExpo',
        targets: this.$refs.r4.children,
        translateY: [0, 37],
      }, 0)
      .add({
        easing: 'easeInExpo',
        targets: this.$refs.r1.children,
        translateY: [37, 74],
      }, 400)
      .add({
        easing: 'easeInExpo',
        targets: this.$refs.r4.children,
        translateY: [37, 74],
      }, 400)
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