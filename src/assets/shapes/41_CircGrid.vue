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
<g>
<circle cx="150.5" cy="149.5" r="37.5" fill="black"/>
<circle cx="75.5" cy="149.5" r="37.5" fill="black"/>
<circle cx="0.5" cy="149.5" r="37.5" fill="black"/>
<circle cx="150.5" cy="74.5" r="37.5" fill="black"/>
<circle cx="75.5" cy="74.5" r="37.5" fill="black"/>
<circle cx="0.5" cy="74.5" r="37.5" fill="black"/>
<circle cx="150.5" cy="-0.5" r="37.5" fill="black"/>
<circle cx="75.5" cy="-0.5" r="37.5" fill="black"/>
<circle cx="0.5" cy="-0.5" r="37.5" fill="black"/>
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