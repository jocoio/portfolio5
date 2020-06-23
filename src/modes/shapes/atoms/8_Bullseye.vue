<template>
  <svg 
    ref="svg"
    width="100%" 
    height="100%" 
    viewBox="0 0 150 150" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="150" height="150" :fill="primary"/>
    <circle cx="75" cy="75" r="5.5" fill="none" :stroke="secondary" stroke-width="3"/>
    <circle cx="75" cy="75" r="12.5" fill="none" :stroke="secondary" stroke-width="3"/>
    <circle cx="75" cy="75" r="19.5" fill="none" :stroke="secondary" stroke-width="3"/>
    <circle cx="75" cy="75" r="26.5" fill="none" :stroke="secondary" stroke-width="3"/>
    <circle cx="75" cy="75" r="33.5" fill="none" :stroke="secondary" stroke-width="3"/>
    <circle cx="75" cy="75" r="41.5" fill="none" :stroke="secondary" stroke-width="3"/>
    <circle cx="75" cy="75" r="49.5" fill="none" :stroke="secondary" stroke-width="3"/>
    <circle cx="75" cy="75" r="57.5" fill="none" :stroke="secondary" stroke-width="3"/>
  </svg>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Bullseye',
  data: function () {
    return {
      animIntro: null,
      animMain: null
    }
  },
  computed: {},
  props: {
    primary: String,
    secondary: String
  },
  components: {},
  methods: {
    animate: function () {
      this.animIntro.play();
    },
    playIntro: function () {
      this.animIntro.play();
    },
    initIntro: function () {
      this.animIntro = anime({
        duration: 900,
        targets: this.$refs.svg.children,
        easing: 'easeInExpo',
        loop: false,
        autoplay: false,
        delay: anime.stagger(90),
        opacity: 1,
        complete: () => {
          this.animIntro.reverse();
        }
      }) 
    },
    initMain: function () {}
  },
  watch: {},
  created: function () {},
  mounted: function () {
    this.initIntro();
  }
}
</script>

<style scoped>
  circle {
    opacity: 0;
  }
</style>