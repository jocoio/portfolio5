<template>
<svg width="100%" height="100%" viewBox="0 0 150 150" preserveAspectRatio="none" :fill="primary" xmlns="http://www.w3.org/2000/svg">
  <rect width="150" height="150" :fill="primary"/>
  <path d="M125 113L150 150H100L125 113Z" :fill="secondary"/>
  <path d="M125 75L150 113H100L125 75Z" :fill="secondary"/>
  <path d="M125 38L150 75H100L125 38Z" :fill="secondary"/>
  <path d="M125 0L150 38H100L125 0Z" :fill="secondary"/>
  <path d="M75 113L100 150H50L75 113Z" :fill="secondary"/>
  <path d="M75 75L100 113H50L75 75Z" :fill="secondary"/>
  <path d="M75 38L100 75H50L75 38Z" :fill="secondary"/>
  <path d="M75 0L100 38H50L75 0Z" :fill="secondary"/>
  <path d="M25 113L50 150H0L25 113Z" :fill="secondary"/>
  <path d="M25 75L50 113H0L25 75Z" :fill="secondary"/>
  <path d="M25 38L50 75H0L25 38Z" :fill="secondary"/>
  <path d="M25 0L50 38H0L25 0Z" :fill="secondary"/>
</svg>

</template>

<script>
import anime from 'animejs';

export default {
  name: 'Dot',
  data: function () {
    return {
      introAnim: null,
      mainAnim: null
    }
  },
  computed: {
    color_style () {
      return {
        // backgroundColor: 'this.color'
      }
    }
  },
  props: {
    num: Number,
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
        targets: this.$refs[this.num],
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
        opacity: 1
      }) 
    },
  },
  watch: {},
  created: function () {},
  mounted: function () {}
}
</script>

<style>
</style>