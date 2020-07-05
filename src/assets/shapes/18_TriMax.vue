<template>
  <svg 
    ref="svg"
    width="100%" 
    height="100%" 
    viewBox="0 0 150 150" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="150" height="150" transform="translate(0 150) rotate(-90)" :fill="pri"/>
    <path ref="tri" d="M-6.55671e-06 0L150 -6.55671e-06L150 150L-6.55671e-06 0Z" :fill="sec"/>
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
        translateY: [150, 0]
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