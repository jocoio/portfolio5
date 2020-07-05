<template>
  <svg 
    width="100%" 
    height="100%" 
    viewBox="0 0 150 150" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="150" height="150" :fill="pri"/>
    <circle ref="circle" r="150" :fill="sec"/>
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
        easing: 'easeOutQuad',
        loop: false,
        autoplay: false,
        translateX: [-150, 0],
        translateY: [-150, 0],
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
        easing: 'easeInOutQuad',
        translateX: [0, 150],
        translateY: [0, 150],
      })
      .add({
        duration: 500,
        delay: 200,
        easing: 'easeInOutQuad',
        translateX: [150, 0],
        translateY: [150, 0],
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