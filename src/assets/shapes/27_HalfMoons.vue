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

  <path ref="h1" d="M75 75C75 116.421 108.579 150 150 150L150 -7.62939e-06C108.579 -9.43998e-06 75 33.5786 75 75Z" :fill="sec"/>
  <path ref="h2" d="M1.19804e-05 75C1.01698e-05 116.421 33.5786 150 75 150L75 -3.8147e-06C33.5787 -5.62528e-06 1.3791e-05 33.5786 1.19804e-05 75Z" :fill="sec"/>
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
        easing: 'easeOutCubic',
        autoplay: false,
      })
      .add({
        targets: this.$refs.h1,
        translateY: [150, 0]
      }, 0)
      .add({
        targets: this.$refs.h2,
        translateY: [-150, 0]
      }, 0)
    },
    initMain: function () {
      this.animMain = anime.timeline({
        duration: 400,
        easing: 'easeInCubic',
        autoplay: false,
        complete: () => {
          this.animIntro.play();
        }
      })
      .add({
        targets: this.$refs.h1,
        translateY: [0, -150]
      }, 0)
      .add({
        targets: this.$refs.h2,
        translateY: [0, 150]
      }, 0)
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