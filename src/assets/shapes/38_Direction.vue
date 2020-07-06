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
  <path ref="tri" d="M75.0272 150L-1.96749e-05 150L74.9729 74.9867L-0.00012207 2.20506e-06L74.9999 2.20326e-06C99.9999 24.9955 150 74.992 150 75.0137C150 75.0353 100.018 125.014 75.0272 150Z" fill="white"/>
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
        targets: this.$refs.tri,
        easing: 'easeOutQuad',
        autoplay: false,
        translateX: [-150, 0]
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 500,
        easing: 'easeInQuad',
        targets: this.$refs.tri,
        autoplay: false,
        translateX: [0, 300],
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