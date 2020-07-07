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
  <path ref="r1" d="M0 75C-3.62117e-06 33.5787 33.5786 3.62117e-06 75 0C75 0 75 75 0 75Z" :fill="sec"/>
  <path ref="r2" d="M75 0C116.421 -1.81058e-06 150 33.5786 150 75C150 75 75 75 75 0Z" :fill="sec"/>
  <path ref="r3" d="M75 150C33.5786 150 -1.81058e-06 116.421 0 75C0 75 75 75 75 150Z" :fill="sec"/>
  <path ref="r4" d="M150 75C150 116.421 116.421 150 75 150C75 150 75 75 150 75Z" :fill="sec"/>
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
        duration: 400,
        easing: 'easeOutQuad',
        autoplay: false,
      })
      .add({
        targets: this.$refs.r1,
        opacity: [0, 1],
        translateX: [-100, 0],
        translateY: [-100, 0]
      }, 0)
      .add({
        targets: this.$refs.r2,
        opacity: [0, 1],
        translateX: [100, 0],
        translateY: [-100, 0]
      }, 0)
      .add({
        targets: this.$refs.r3,
        opacity: [0, 1],
        translateX: [-100, 0],
        translateY: [100, 0]
      }, 0)
      .add({
        targets: this.$refs.r4,
        opacity: [0, 1],
        translateX: [100, 0],
        translateY: [100, 0]
      }, 0)
    },
    initMain: function () {
      this.animMain = anime.timeline({
        autoplay: false,
      })
      .add({
        duration: 500,
        targets: [this.$refs.r1, this.$refs.r3],
        easing: 'easeOutExpo',
        translateX: [0, 75],
      }, 0)
      .add({
        duration: 500,
        targets: [this.$refs.r2, this.$refs.r4],
        easing: 'easeOutExpo',
        translateX: [0, -75],
      }, 0)
      .add({
        duration: 500,
        targets: [this.$refs.r1, this.$refs.r2],
        easing: 'easeInOutExpo',
        translateY: [0, 75],
      }, 500)
      .add({
        duration: 500,
        targets: [this.$refs.r3, this.$refs.r4],
        easing: 'easeInOutExpo',
        translateY: [0, -75],
      }, 500)
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