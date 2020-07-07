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
  <path ref="r1" d="M75 75C33.5786 75 -1.81058e-06 41.4213 0 -3.27835e-06C0 -3.27835e-06 75 0 75 75Z" :fill="sec"/>
  <path ref="r2" d="M150 0C150 41.4213 116.421 75 75 75C75 75 75 0 150 0Z" :fill="sec"/>
  <path ref="r3" d="M75 75C75 116.421 41.4213 150 0 150C0 150 0 75 75 75Z" :fill="sec"/>
  <path ref="r4" d="M150 150C108.579 150 75 116.421 75 75C75 75 150 75 150 150Z" :fill="sec"/>
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