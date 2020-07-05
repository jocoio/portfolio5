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
<line x1="2.62268e-07" y1="89.5001" x2="150" y2="89.5002" stroke="white" stroke-width="3"/>
<line x1="2.62268e-07" y1="79.5001" x2="150" y2="79.5001" stroke="white" stroke-width="3"/>
<line x1="2.62268e-07" y1="69.5001" x2="150" y2="69.5001" stroke="white" stroke-width="3"/>
<line x1="2.62268e-07" y1="59.5" x2="150" y2="59.5001" stroke="white" stroke-width="3"/>
<line x1="2.62268e-07" y1="49.5" x2="150" y2="49.5001" stroke="white" stroke-width="3"/>
<line x1="2.62268e-07" y1="39.5" x2="150" y2="39.5" stroke="white" stroke-width="3"/>
<line x1="81.5" y1="150" x2="81.5" y2="6.55672e-08" stroke="white" stroke-width="3"/>
<line x1="71.5" y1="150" x2="71.5" y2="6.55672e-08" stroke="white" stroke-width="3"/>
<line x1="61.5" y1="150" x2="61.5" y2="6.55672e-08" stroke="white" stroke-width="3"/>
<line x1="51.5" y1="150" x2="51.5" y2="6.55672e-08" stroke="white" stroke-width="3"/>
<line x1="41.5" y1="150" x2="41.5" y2="6.55672e-08" stroke="white" stroke-width="3"/>
<line x1="31.5" y1="150" x2="31.5" y2="6.55672e-08" stroke="white" stroke-width="3"/>

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