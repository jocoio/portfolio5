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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M135 4.88616e-05L135 149L132 149L132 4.88162e-05L135 4.88616e-05Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M112 4.88616e-05L112 149L109 149L109 4.88162e-05L112 4.88616e-05Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M89 9.4638e-05L89 149L86 149L86 9.45926e-05L89 9.4638e-05Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M66 9.4638e-05L66 149L63 149L63 9.45926e-05L66 9.4638e-05Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M43 4.88616e-05L43 149L40 149L40 4.88162e-05L43 4.88616e-05Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 3.08528e-06L20 149L17 149L17 3.03984e-06L20 3.08528e-06Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.50009 15.5001L150.5 15.5001L150.5 18.5001L1.50009 18.5001L1.50009 15.5001Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.50009 38.5001L150.5 38.5001L150.5 41.5001L1.50009 41.5001L1.50009 38.5001Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.50009 61.5001L150.5 61.5001L150.5 64.5001L1.50009 64.5001L1.50009 61.5001Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.50009 84.5001L150.5 84.5001L150.5 87.5001L1.50009 87.5001L1.50009 84.5001Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.50009 107.5L150.5 107.5L150.5 110.5L1.50009 110.5L1.50009 107.5Z" :fill="sec"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.49997 130.5L150.5 130.5L150.5 133.5L1.49997 133.5L1.49997 130.5Z" :fill="sec"/>
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