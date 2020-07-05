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
<path d="M0 135L150 135" stroke="white" stroke-width="3"/>
<path d="M0 120L150 120" stroke="white" stroke-width="3"/>
<path d="M0 105L150 105" stroke="white" stroke-width="3"/>
<path d="M0 90L150 90" stroke="white" stroke-width="3"/>
<path d="M0 75L150 75" stroke="white" stroke-width="3"/>
<path d="M0 60L150 60" stroke="white" stroke-width="3"/>
<path d="M0 45L150 45" stroke="white" stroke-width="3"/>
<path d="M0 30L150 30" stroke="white" stroke-width="3"/>
<path d="M0 15L150 15" stroke="white" stroke-width="3"/>
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