<template>
  <svg 
    ref="svg"
    width="100%" 
    height="100%" 
    viewBox="0 0 150 150" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
  </svg>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Vines',
  data: function () {
    return {
      introAnim: null,
      mainAnim: null
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
      console.log('animating ' + this.$options.name);
    },
    initIntro: function () {
      this.introAnim = anime({
        duration: 500,
        targets: this.$refs.svg,
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
        opacity: 1
      }) 
    },
    initMain: function () {}
  },
  watch: {},
  created: function () {},
  mounted: function () {}
}
</script>

<style>
</style>