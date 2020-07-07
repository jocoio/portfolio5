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
  <path ref="r1" d="M75 75C58.4315 75 45 61.5685 45 45C45 45 75 45 75 75Z" :fill="sec"/>
  <path ref="r2" d="M75 75C75 58.4315 88.4315 45 105 45C105 45 105 75 75 75Z" :fill="sec"/>
  <path ref="r3" d="M75 105C58.4315 105 45 91.5685 45 75C45 75 75 75 75 105Z" :fill="sec"/>
  <path ref="r4" d="M75 105C75 88.4315 88.4315 75 105 75C105 75 105 105 75 105Z" :fill="sec"/>
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
        duration: 550,
        easing: 'easeOutExpo',
        autoplay: false,
      })
      .add({
        targets: [this.$refs.r1, this.$refs.r3],
        translateX: [-15, 0],
        opacity: [0, 1]
      }, 0)
      .add({
        targets: [this.$refs.r2, this.$refs.r4],
        translateX: [15, 0],
        opacity: [0, 1]
      }, 0)
    },
    initMain: function () {
      this.animMain = anime.timeline({
        duration: 550,
        easing: 'easeInQuad',
        autoplay: false,
        complete: () => {
          this.animIntro.play();
        }
      })
      .add({
        targets: [this.$refs.r1, this.$refs.r2],
        translateY: [0, -15],
        opacity: [1, 0]
      }, 0)
      .add({
        targets: [this.$refs.r3, this.$refs.r4],
        translateY: [0, 15],
        opacity: [1, 0]
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