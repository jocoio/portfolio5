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
<g>
<line x1="21.5658" y1="170.705" x2="182.193" y2="10.0776" stroke="white" stroke-width="3"/>
<line x1="15.2721" y1="164.41" x2="175.899" y2="3.7831" stroke="white" stroke-width="3"/>
<line x1="8.97791" y1="158.116" x2="169.605" y2="-2.5109" stroke="white" stroke-width="3"/>
<line x1="2.68348" y1="151.822" x2="163.31" y2="-8.80485" stroke="white" stroke-width="3"/>
<line x1="-3.61034" y1="145.528" x2="157.017" y2="-15.0992" stroke="white" stroke-width="3"/>
<line x1="-9.90478" y1="139.234" x2="150.722" y2="-21.3932" stroke="white" stroke-width="3"/>
<line x1="-16.199" y1="132.94" x2="144.428" y2="-27.6872" stroke="white" stroke-width="3"/>
<line x1="-22.4929" y1="126.646" x2="138.134" y2="-33.9815" stroke="white" stroke-width="3"/>
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
      console.log('animating');
    },
    playIntro: function () {
      this.animIntro.play();
    },
    initIntro: function () {
      this.animIntro = anime({
        duration: 500,
        targets: this.$refs.svg,
        easing: 'easeInOutQuad',
        autoplay: false,
        opacity: [0, 1]
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        targets: this.$refs.svg,
        autoplay: false,
      })
      .add({
        duration: 500,
        easing: 'easeInOutQuad',
        opacity: [1, 0]
      })
      .add({
        duration: 500,
        easing: 'easeInOutQuad',
        opacity: [0, 1]
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