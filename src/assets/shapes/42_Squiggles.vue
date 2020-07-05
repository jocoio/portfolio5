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
<path d="M150 149.5C150 128.789 133.211 112 112.5 112L112.5 187C133.211 187 150 170.211 150 149.5Z" :fill="sec"/>
<path d="M75 112.5C75 133.211 91.7893 150 112.5 150L112.5 75C91.7893 75 75 91.7893 75 112.5Z" :fill="sec"/>
<path d="M150 74.5C150 53.7894 133.211 37 112.5 37L112.5 112C133.211 112 150 95.2107 150 74.5Z" :fill="sec"/>
<path d="M75 37.5C75 58.2107 91.7893 75 112.5 75L112.5 0C91.7893 1.56361e-06 75 16.7893 75 37.5Z" :fill="sec"/>
<path d="M150 -0.499966C150 -21.2106 133.211 -38 112.5 -38L112.5 37C133.211 37 150 20.2107 150 -0.499966Z" :fill="sec"/>
<path d="M0.499996 149.5C0.499994 170.211 17.2893 187 38 187L38 112C17.2893 112 0.499998 128.789 0.499996 149.5Z" :fill="sec"/>
<path d="M75 112.5C75 91.7893 58.2107 75 37.5 75L37.5 150C58.2107 150 75 133.211 75 112.5Z" :fill="sec"/>
<path d="M0.499996 74.5C0.499994 95.2107 17.2893 112 38 112L38 37C17.2893 37 0.499998 53.7893 0.499996 74.5Z" :fill="sec"/>
<path d="M75 37.5C75 16.7893 58.2107 -1.40082e-07 37.5 -7.62939e-06L37.5 75C58.2107 75 75 58.2107 75 37.5Z" :fill="sec"/>
<path d="M0.499996 -0.5C0.499994 20.2107 17.2893 37 38 37L38 -38C17.2893 -38 0.499998 -21.2107 0.499996 -0.5Z" :fill="sec"/>
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