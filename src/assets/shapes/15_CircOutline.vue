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
    <circle ref="circ" cx="150" cy="150" r="128" :stroke="sec" :fill="pri" stroke-width="44"/>
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
        duration: 200,
        targets: this.$refs.circ,
        easing: 'easeOutQuad',
        autoplay: false,
        strokeWidth: [0, 44]
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        targets: this.$refs.circ,
        autoplay: false,
      })
      .add({
        duration: 250,
        easing: 'easeOutQuad',
        strokeWidth: [44, 175]
      })
      .add({
        duration: 250,
        delay: 300,
        easing: 'easeInQuad',
        strokeWidth: [175, 44]
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