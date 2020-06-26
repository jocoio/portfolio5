<template>
  <svg 
    ref="svg"
    width="100%" 
    height="100%" 
    viewBox="0 0 150 150" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg"
    :fill="pri" 
  >
    <rect width="150" height="150" :fill="pri"/>
    <path d="M150 113C150 133.435 132.987 150 112 150C112 150 112 113 150 113Z" :fill="secondary" />
    <path d="M75 113C75 133.435 57.9868 150 37 150C37 150 37 113 75 113Z" :fill="secondary" />
    <path d="M150 38C150 58.4345 132.987 75 112 75C112 75 112 38 150 38Z" :fill="secondary" />
    <path d="M75 38C75 58.4345 57.9868 75 37 75C37 75 37 38 75 38Z" :fill="secondary" />
    <path d="M150 75C150 95.9868 132.987 113 112 113C112 113 112 75 150 75Z" :fill="secondary" />
    <path d="M75 75C75 95.9868 57.9868 113 37 113C37 113 37 75 75 75Z" :fill="secondary" />
    <path d="M150 0C150 20.9868 132.987 38 112 38C112 38 112 0 150 0Z" :fill="secondary" />
    <path d="M75 0C75 20.9868 57.9868 38 37 38C37 38 37 0 75 0Z" :fill="secondary" />
    <path d="M75 75C75 95.9868 91.5655 113 112 113C112 113 112 75 75 75Z" :fill="secondary" />
    <path d="M0 75C0 95.9868 16.5655 113 37 113C37 113 37 75 0 75Z" :fill="secondary" />
    <path d="M75 0C75 20.9868 91.5655 38 112 38C112 38 112 0 75 0Z" :fill="secondary" />
    <path d="M0 0C0 20.9868 16.5655 38 37 38C37 38 37 0 0 0Z" :fill="secondary" />
    <path d="M75 113C75 133.435 91.5655 150 112 150C112 150 112 113 75 113Z" :fill="secondary" />
    <path d="M0 113C0 133.435 16.5655 150 37 150C37 150 37 113 0 113Z" :fill="secondary" />
    <path d="M75 38C75 58.4345 91.5655 75 112 75C112 75 112 38 75 38Z" :fill="secondary" />
    <path d="M0 38C0 58.4345 16.5655 75 37 75C37 75 37 38 0 38Z" :fill="secondary" />
  </svg>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Vines',
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
    initMain: function () {

    }
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