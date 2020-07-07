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
<rect ref="r1" x="20" y="20" width="110" height="110" :stroke="sec" stroke-width="40" :fill="pri"/>
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
        targets: this.$refs.r1,
        easing: 'easeInOutQuad',
        autoplay: false,
        strokeWidth: [0, 40]
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 450,
        targets: this.$refs.r1,
        easing: 'easeOutExpo',
        autoplay: false,
        strokeWidth: [40, 3],
        direction: 'alternate'
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