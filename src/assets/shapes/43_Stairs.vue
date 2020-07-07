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
    <rect y="120" width="150" height="31" :fill="sec"/>
    <rect y="90" width="120" height="31" :fill="sec"/>
    <rect y="60" width="90" height="31" :fill="sec"/>
    <rect y="30" width="60" height="31" :fill="sec"/>
    <rect width="30" height="31" :fill="sec"/>
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
        duration: 500,
        targets: this.$refs.r1.children,
        easing: 'easeInOutQuad',
        autoplay: false,
        delay: anime.stagger(100),
        translateX: [-150, 0]
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 500,
        targets: this.$refs.r1.children,
        easing: 'easeInOutQuad',
        autoplay: false,
        delay: anime.stagger(100),
        translateX: [0, 150],
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