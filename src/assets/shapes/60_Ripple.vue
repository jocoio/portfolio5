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
    <circle cx="150" r="148.5" stroke="white" stroke-width="3" fill="none"/>
    <circle cx="150" cy="-0.00012207" r="128.161" stroke="white" stroke-width="3" fill="none"/>
    <circle cx="150" cy="1.52588e-05" r="107.822" stroke="white" stroke-width="3" fill="none"/>
    <circle cx="150" cy="-0.000106812" r="87.483" stroke="white" stroke-width="3" fill="none"/>
    <circle cx="150" cy="-8.39233e-05" r="69.6864" stroke="white" stroke-width="3" fill="none"/>
    <circle cx="150" cy="-6.10352e-05" r="51.8898" stroke="white" stroke-width="3" fill="none"/>
    <circle cx="150" cy="-4.19617e-05" r="34.0932" stroke="white" stroke-width="3" fill="none"/>
    <circle cx="150" cy="-2.09808e-05" r="16.2966" stroke="white" stroke-width="3" fill="none"/>
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
        targets: this.$refs.r1.children,
        duration: 150,
        delay: anime.stagger(100, {direction: 'reverse'}),
        easing: 'easeOutQuad',
        autoplay: false,
        translateX: [10, 0],
        translateY: [-10, 0],
        opacity: [0, 1],
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        targets: this.$refs.r1.children,
        easing: 'easeInOutQuad',
        autoplay: false,
        complete: () => {
          this.animIntro.play();
        }
      })
      .add({
        duration: 900,
        delay: anime.stagger(100),
        r: '+=225',
      }) 
      .add({
        duration: 1,
        r: '-=225',
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