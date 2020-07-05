<template>
  <svg 
    ref="svg"
    width="100%" 
    height="100%" 
    viewBox="0 0 150 150" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg"
>
  <rect width="150" height="150" :fill="sec"/>
  <circle ref="circ1" cx="75" r="75" :fill="pri"/>
  <circle ref="circ2" cx="75" cy="150" r="75" :fill="pri"/>
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
        duration: 500,
        easing: 'easeInOutQuad',
        autoplay: false,
      })
      .add({   
        targets: this.$refs.circ1,
        translateY: [-150, 0]
      }, 0)
      .add({
        targets: this.$refs.circ2,
        translateY: [150, 0]
      }, 0)
    },
    initMain: function () {
      this.animMain = anime.timeline({
        duration: 600,
        easing: 'easeOutExpo',
        direction: 'alternate',
        autoplay: false,
      })
      .add({   
        targets: this.$refs.circ1,
        translateY: [0, 75]
      }, 0)
      .add({
        targets: this.$refs.circ2,
        translateY: [0, -75]
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