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
    <path d="M0 135L150 135" stroke="white" stroke-width="3"/>
    <path d="M0 120L150 120" stroke="white" stroke-width="3"/>
    <path d="M0 105L150 105" stroke="white" stroke-width="3"/>
    <path d="M0 90L150 90" stroke="white" stroke-width="3"/>
    <path d="M0 75L150 75" stroke="white" stroke-width="3"/>
    <path d="M0 60L150 60" stroke="white" stroke-width="3"/>
    <path d="M0 45L150 45" stroke="white" stroke-width="3"/>
    <path d="M0 30L150 30" stroke="white" stroke-width="3"/>
    <path d="M0 15L150 15" stroke="white" stroke-width="3"/>
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
        duration: 400,
        targets: this.$refs.r1.children,
        easing: 'easeInOutQuad',
        autoplay: false,
        delay: anime.stagger(75),
        strokeWidth: [0, 3]
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        targets: this.$refs.r1.children,
        duration: 500,
        autoplay: false,
        delay: anime.stagger(75)
      })
      .add({   
        easing: 'easeOutQuad',
        translateX: [0, 150]
      })
      .add({
        easing: 'easeInQuad',
        translateX: [-150, 0]
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