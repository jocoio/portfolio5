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
  <rect ref="r1" x="17.4647" y="-18.2808" width="213.035" height="50" transform="rotate(45 17.4647 -18.2808)" :fill="sec" />
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
        width: [0, 250]
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 400,
        targets: this.$refs.r1,
        easing: 'easeOutQuart',
        autoplay: false,
        direction: 'alternate',
        width: [250, 0]
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