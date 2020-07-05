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
<path d="M20 150V78.2989C20 47.7582 44.6243 23 75 23C105.376 23 130 47.7582 130 78.2989V150" stroke="white" stroke-width="3"/>
<path d="M27 150V77.7874C27 51.3951 48.4903 30 75 30C101.51 30 123 51.3951 123 77.7874V150" stroke="white" stroke-width="3"/>
<path d="M35 150V78.1092C35 55.9575 52.9086 38 75 38C97.0914 38 115 55.9575 115 78.1092V150" stroke="white" stroke-width="3"/>
<path d="M42 150V77.8125C42 59.6907 56.7746 45 75 45C93.2254 45 108 59.6907 108 77.8125V150" stroke="white" stroke-width="3"/>
<path d="M49 150V78.2584C49 63.7563 60.6406 52 75 52C89.3594 52 101 63.7563 101 78.2584V150" stroke="white" stroke-width="3"/>
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
      console.log('animating');
    },
    playIntro: function () {
      this.animIntro.play();
    },
    initIntro: function () {
      this.animIntro = anime({
        duration: 500,
        targets: this.$refs.svg,
        easing: 'easeInOutQuad',
        autoplay: false,
        opacity: [0, 1]
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        targets: this.$refs.svg,
        autoplay: false,
      })
      .add({
        duration: 500,
        easing: 'easeInOutQuad',
        opacity: [1, 0]
      })
      .add({
        duration: 500,
        easing: 'easeInOutQuad',
        opacity: [0, 1]
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