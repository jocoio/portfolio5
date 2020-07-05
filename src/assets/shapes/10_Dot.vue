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
    <g ref="circle">
      <circle cx="75" cy="75" r="45" :fill="sec"/>
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
        duration: 500,
        targets: this.$refs.circle,
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
        scale: [0, 1]
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        targets: this.$refs.circle,
        loop: false,
        autoplay: false,
      })
      .add({
        duration: 500,
        easing: 'easeOutQuad',
        scale: [1, 3]
      })
      .add({
        duration: 500,
        easing: 'easeInOutQuad',
        scale: [3, 1]
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
  g {
    transform-origin: center;
  }
</style>