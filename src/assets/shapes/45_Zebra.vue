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
    <line x1="57.3224" y1="-91.2412" x2="248.241" y2="99.6777" stroke="#F9F9F9" stroke-width="10"/>
    <line x1="42.473" y1="-76.3919" x2="233.392" y2="114.527" stroke="#F9F9F9" stroke-width="10"/>
    <line x1="27.6239" y1="-61.5427" x2="218.543" y2="129.376" stroke="#F9F9F9" stroke-width="10"/>
    <line x1="12.7745" y1="-46.6934" x2="203.693" y2="144.225" stroke="#F9F9F9" stroke-width="10"/>
    <line x1="-2.07457" y1="-31.8442" x2="188.844" y2="159.075" stroke="#F9F9F9" stroke-width="10"/>
    <line x1="-16.2167" y1="-16.2878" x2="173.995" y2="173.924" stroke="#F9F9F9" stroke-width="10"/>
    <line x1="-31.7731" y1="-2.1457" x2="159.146" y2="188.773" stroke="#F9F9F9" stroke-width="10"/>
    <line x1="-46.6224" y1="12.7035" x2="144.296" y2="203.622" stroke="#F9F9F9" stroke-width="10"/>
    <line x1="-61.4715" y1="27.5528" x2="129.447" y2="218.472" stroke="#F9F9F9" stroke-width="10"/>
    <line x1="-76.3209" y1="42.402" x2="114.598" y2="233.321" stroke="#F9F9F9" stroke-width="10"/>
    <line x1="-91.17" y1="57.2513" x2="99.7488" y2="248.17" stroke="#F9F9F9" stroke-width="10"/>
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
        easing: 'easeInQuad',
        autoplay: false,
        delay: anime.stagger(100),
        strokeDashoffset: [anime.setDashoffset, 0],
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        targets: this.$refs.r1.children,
        loop: false,
        autoplay: false,
        duration: 250,
      })
      .add({
        easing: 'easeInOutQuad',
        strokeWidth: [10,3],
        delay: anime.stagger(30)
      })
      .add({
        easing: 'easeInOutQuad',
        strokeWidth: [3,10],
        delay: anime.stagger(30)
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