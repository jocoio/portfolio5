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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M173.261 117.541L-24.1481 35.7716L-23 33L174.409 114.77L173.261 117.541Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M149.015 152.197L-2.07591 1.10667L0.0454102 -1.01465L151.136 150.076L149.015 152.197Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M36.0021 -23.5572L117.772 173.852L115 175L33.2304 -22.4092L36.0021 -23.5572Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M76 -1.31134e-07L76 150L73 150L73 0L76 -1.31134e-07Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M117.541 -23.2611L35.7716 174.148L33 173L114.77 -24.4092L117.541 -23.2611Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M151.136 1.10668L0.0453926 152.197L-2.07593 150.076L149.015 -1.01464L151.136 1.10668Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M174.557 35.7716L-22.8519 117.541L-24 114.77L173.409 33L174.557 35.7716Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.62268e-07 73L150 73L150 76L0 76L2.62268e-07 73Z" :fill="sec"/>
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
      this.animMain = anime.timeline({
        targets: this.$refs.svg,
        loop: false,
        autoplay: false,
      })
      .add({
        duration: 500,
        easing: 'easeInOutQuad',
        opacity: [0, 1]
      })
      .add({
        duration: 500,
        easing: 'easeInOutQuad',
        opacity: [1, 0]
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