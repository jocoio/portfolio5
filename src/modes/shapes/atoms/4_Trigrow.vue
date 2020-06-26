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
    <path d="M150 0V150H0L150 0Z" :fill="secondary"/>
    <path d="M75 0V75H0L75 0Z" :fill="secondary"/>
    <path d="M37 0V37H0L37 0Z" :fill="secondary"/>
  </svg>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Trigrow',
  data: function () {
    return {
      animIntro: null,
      animMain: null
    }
  },
  computed: {},
  props: {
    pri: String,
    secondary: String
  },
  components: {},
  methods: {
    playMain: function () {
      console.log('animating ' + this.$options.name);
    },
    playIntro: function () {
      this.animIntro.play();
    },
    initIntro: function () {
      this.animIntro = anime({
        duration: 500,
        targets: this.$refs.svg,
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
        opacity: [0, 1]
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
</style>