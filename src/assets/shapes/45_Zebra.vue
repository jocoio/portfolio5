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

<line x1="76.7658" y1="-72.5355" x2="228.794" y2="79.4924" stroke="white" stroke-width="10"/>
<line x1="62.1787" y1="-57.9484" x2="214.207" y2="94.0795" stroke="white" stroke-width="10"/>
<line x1="47.3295" y1="-43.0992" x2="199.357" y2="108.929" stroke="white" stroke-width="10"/>
<line x1="32.4802" y1="-28.25" x2="184.508" y2="123.778" stroke="white" stroke-width="10"/>
<line x1="17.631" y1="-13.4007" x2="169.659" y2="138.627" stroke="white" stroke-width="10"/>
<line x1="3.48878" y1="2.15564" x2="154.81" y2="153.476" stroke="white" stroke-width="10"/>
<line x1="-12.0675" y1="16.2978" x2="139.96" y2="168.326" stroke="white" stroke-width="10"/>
<line x1="-26.9167" y1="31.147" x2="125.111" y2="183.175" stroke="white" stroke-width="10"/>
<line x1="-41.766" y1="45.9963" x2="110.262" y2="198.024" stroke="white" stroke-width="10"/>
<line x1="-56.6152" y1="60.8455" x2="95.4127" y2="212.873" stroke="white" stroke-width="10"/>
<line x1="-71.4645" y1="75.6948" x2="80.5635" y2="227.723" stroke="white" stroke-width="10"/>
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