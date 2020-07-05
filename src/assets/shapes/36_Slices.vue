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
    <path d="M75.0001 149.907L75.0001 112.44L112.467 112.44L75.0001 149.907Z" fill="white"/>
    <path d="M112.467 75L112.467 112.467L75 112.467L112.467 75Z" fill="white"/>
    <path d="M7.62939e-05 149.907L7.30184e-05 112.44L37.4674 112.44L7.62939e-05 149.907Z" fill="white"/>
    <path d="M37.4673 75L37.4673 112.467L-6.551e-06 112.467L37.4673 75Z" fill="white"/>
    <path d="M75.0001 74.9074L75.0001 37.4401L112.467 37.4401L75.0001 74.9074Z" fill="white"/>
    <path d="M112.467 6.551e-06L112.467 37.4673L75 37.4673L112.467 6.551e-06Z" fill="white"/>
    <path d="M7.62939e-05 74.9074L7.30184e-05 37.4401L37.4674 37.4401L7.62939e-05 74.9074Z" fill="white"/>
    <path d="M37.4673 6.551e-06L37.4673 37.4673L-6.551e-06 37.4673L37.4673 6.551e-06Z" fill="white"/>
    <path d="M113 74.9074L113 37.4401L150.467 37.4401L113 74.9074Z" fill="white"/>
    <path d="M150.467 6.551e-06L150.467 37.4673L113 37.4673L150.467 6.551e-06Z" fill="white"/>
    <path d="M38.0001 74.9074L38.0001 37.4401L75.4674 37.4401L38.0001 74.9074Z" fill="white"/>
    <path d="M75.4673 6.551e-06L75.4673 37.4673L38 37.4673L75.4673 6.551e-06Z" fill="white"/>
    <path d="M113 149.907L113 112.44L150.467 112.44L113 149.907Z" fill="white"/>
    <path d="M150.467 75L150.467 112.467L113 112.467L150.467 75Z" fill="white"/>
    <path d="M38.0001 149.907L38.0001 112.44L75.4674 112.44L38.0001 149.907Z" fill="white"/>
    <path d="M75.4673 75L75.4673 112.467L38 112.467L75.4673 75Z" fill="white"/>
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