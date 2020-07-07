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
<circle ref="r1" cx="75" cy="75" r="50" stroke="white" stroke-width="50" :fill="pri"/>
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
        duration: 300,
        targets: this.$refs.r1,
        easing: 'easeOutQuad',
        autoplay: false,
        strokeWidth: [0, 50]
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 550,
        targets: this.$refs.r1,
        easing: 'easeOutExpo',
        direction: 'alternate',
        autoplay: false,
        r: [50, 73.5],
        strokeWidth: [50, 3]
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