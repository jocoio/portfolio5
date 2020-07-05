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
<path d="M100 150L150 125L150 175L100 150Z" fill="white"/>
<path d="M-1.09278e-06 150L50 125L50 175L-1.09278e-06 150Z" fill="white"/>
<path d="M50 125L100 100L100 150L50 125Z" fill="white"/>
<path d="M100 100L150 75L150 125L100 100Z" fill="white"/>
<path d="M-1.09278e-06 100L50 75L50 125L-1.09278e-06 100Z" fill="white"/>
<path d="M50 75L100 50L100 100L50 75Z" fill="white"/>
<path d="M100 -7.62939e-06L150 -25L150 25L100 -7.62939e-06Z" fill="white"/>
<path d="M100 50L150 25L150 75L100 50Z" fill="white"/>
<path d="M3.27835e-06 0L50 -25L50 25L3.27835e-06 0Z" fill="white"/>
<path d="M-1.09278e-06 50L50 25L50 75L-1.09278e-06 50Z" fill="white"/>
<path d="M50 25L100 6.55671e-06L100 50L50 25Z" fill="white"/>

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