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
  <g ref="flock">
    <path d="M58 104.5V92H45.5L33 104.5H45.5V117L58 104.5Z" fill="white"/>
    <path d="M58 74.5V62H45.5L33 74.5H45.5V87L58 74.5Z" fill="white"/>
    <path d="M88 104.5V92H75.5L63 104.5H75.5V117L88 104.5Z" fill="white"/>
    <path d="M88 74.5V62H75.5L63 74.5H75.5V87L88 74.5Z" fill="white"/>
    <path d="M118 74.5V62H105.5L93 74.5H105.5V87L118 74.5Z" fill="white"/>
    <path d="M88 44.5V32H75.5L63 44.5H75.5V57L88 44.5Z" fill="white"/>
    <path d="M118 44.5V32H105.5L93 44.5H105.5V57L118 44.5Z" fill="white"/>
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
      this.animIntro = anime({
        duration: 250,
        targets: this.$refs.flock.children,
        easing: 'easeOutQuad',
        autoplay: false,
        delay: anime.stagger(50),
        opacity: [0, 1],
        translateX: [-10, 0],
        translateY: [10, 0]
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 350,
        targets: this.$refs.flock.children,
        easing: 'easeInQuad',
        autoplay: false,
        delay: anime.stagger(50, {direction: 'reverse'}),
        opacity: [1, 0],
        translateX: [0, 10],
        translateY: [0, -10],
        complete: () => {
          this.animIntro.play();
        }
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