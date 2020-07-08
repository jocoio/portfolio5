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
    <circle cx="150" cy="150" r="62.5" stroke="white" stroke-width="25" fill="none" />
    <circle cy="150" r="62.5" stroke="white" stroke-width="25" fill="none" />
    <circle cx="150" r="62.5" stroke="white" stroke-width="25" fill="none" />
    <circle r="62.5" stroke="white" stroke-width="25" fill="none" />
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
        duration: 350,
        targets: this.$refs.r1.children,
        easing: 'easeInOutQuad',
        autoplay: false,
        strokeWidth: [0, 25]
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 550,
        targets: this.$refs.r1.children,
        easing: 'easeOutExpo',
        direction: 'alternate',
        autoplay: false,
        r: [50, 73.5],
        strokeWidth: [25, 3]
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