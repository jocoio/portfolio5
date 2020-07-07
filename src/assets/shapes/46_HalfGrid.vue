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
  <g ref="r1">
    <path d="M56.5 90C46.2827 90 38 98.9543 38 110L75 110C75 98.9543 66.7173 90 56.5 90Z" :fill="sec"/>
    <path d="M56.5 65C46.2827 65 38 73.5066 38 84L75 84C75 73.5066 66.7173 65 56.5 65Z" :fill="sec"/>
    <path d="M56.5 40C46.2827 40 38 48.9543 38 60L75 60C75 48.9543 66.7173 40 56.5 40Z" :fill="sec"/>
  </g>
  <g ref="r2">
    <path d="M93.5 110C103.717 110 112 101.046 112 90L75 90C75 101.046 83.2827 110 93.5 110Z" :fill="sec"/>
    <path d="M93.5 84C103.717 84 112 75.4934 112 65L75 65C75 75.4934 83.2827 84 93.5 84Z" :fill="sec"/>
    <path d="M93.5 60C103.717 60 112 51.0457 112 40L75 40C75 51.0457 83.2827 60 93.5 60Z" :fill="sec"/>
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
      this.animMain.play();
    },
    playIntro: function () {
      this.animIntro.play();
    },
    initIntro: function () {
      this.animIntro = anime.timeline({
        duration: 250,
        autoplay: false,
        easing: 'easeInOutQuad',
        
      })
      .add({
        targets: this.$refs.r1.children,
        delay: anime.stagger(250),
        opacity: [0, 1],
        translateY: [20, 0]
      }, 0)
      .add({
        targets: this.$refs.r2.children,
        delay: anime.stagger(250),
        opacity: [0, 1],
        translateY: [-20, 0]
      }, 0)
    },
    initMain: function () {
      this.animMain = anime.timeline({
        duration: 300,
        autoplay: false,
        easing: 'easeInQuad',
        complete: () => {
          this.animIntro.play();
        }
      })
      .add({
        targets: this.$refs.r1.children,
        delay: anime.stagger(100, {direction: 'reverse'}),
        opacity: [1, 0],
        translateY: [0, -25]
      }, 0)
      .add({
        targets: this.$refs.r2.children,
        delay: anime.stagger(100),
        opacity: [1, 0],
        translateY: [0, 25]
      }, 0)
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