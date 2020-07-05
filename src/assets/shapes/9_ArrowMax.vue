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
    <path ref="arrow" d="M75.0001 150L6.10352e-05 150L6.75919e-05 75L75.0001 8.70209e-06L75.0001 75L150 75L75.0001 150Z" :fill="sec"/>
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
        targets: this.$refs.arrow,
        easing: 'easeOutQuad',
        loop: false,
        autoplay: false,
        translateX: [150, 0],
        translateY: [-150, 0]
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 500,
        targets: this.$refs.arrow,
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
        translateX: [0, -150],
        translateY: [0, 150],
        complete: () => {
          this.animIntro.play();
        }
      });
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