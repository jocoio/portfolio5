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
  <path ref="r1" d="M150 0C150 82.8427 82.8427 150 0 150C0 150 0 0 150 0Z" :fill="sec"/>
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
        targets: this.$refs.r1,
        easing: 'easeOutQuad',
        autoplay: false,
        translateX: [150, 0],
        translateY: [-150, 0]
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 400,
        targets: this.$refs.r1,
        easing: 'easeInQuad',
        autoplay: false,
        translateX: [0, -150],
        translateY: [0, 150],
        complete: () => {
          this.animIntro.play();
        }
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