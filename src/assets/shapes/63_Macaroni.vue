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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M98.2692 38C98.2692 45.9656 104.641 52.4231 112.5 52.4231L112.5 75.5C92.0655 75.5 75.5 58.7107 75.5 38C75.5 17.2893 92.0655 0.499999 112.5 0.499998L112.5 23.5769C104.641 23.5769 98.2692 30.0344 98.2692 38Z" :fill="sec"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M135.269 38C135.269 45.9656 141.641 52.4231 149.5 52.4231L149.5 75.5C129.065 75.5 112.5 58.7107 112.5 38C112.5 17.2893 129.065 0.499999 149.5 0.499998L149.5 23.5769C141.641 23.5769 135.269 30.0344 135.269 38Z" :fill="sec"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M112.5 98.3846C104.534 98.3846 98.0769 104.928 98.0769 113H75C75 92.0132 91.7893 75 112.5 75C133.211 75 150 92.0132 150 113H126.923C126.923 104.928 120.466 98.3846 112.5 98.3846Z" :fill="sec"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M112.5 135.769C104.534 135.769 98.0769 142.141 98.0769 150H75C75 129.565 91.7893 113 112.5 113C133.211 113 150 129.565 150 150H126.923C126.923 142.141 120.466 135.769 112.5 135.769Z" :fill="sec"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.6154 112.5C51.6154 104.534 45.0719 98.0769 37 98.0769L37 75C57.9868 75 75 91.7893 75 112.5C75 133.211 57.9868 150 37 150L37 126.923C45.0719 126.923 51.6154 120.466 51.6154 112.5Z" :fill="sec"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2308 112.5C14.2308 104.534 7.85944 98.0769 -1.00872e-06 98.0769L0 75C20.4345 75 37 91.7893 37 112.5C37 133.211 20.4345 150 -3.27835e-06 150L-2.26963e-06 126.923C7.85943 126.923 14.2308 120.466 14.2308 112.5Z" :fill="sec"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 52.2308C45.4656 52.2308 51.9231 45.8594 51.9231 38L75 38C75 58.4345 58.2107 75 37.5 75C16.7893 75 1.4482e-06 58.4345 3.23464e-06 38L23.0769 38C23.0769 45.8594 29.5344 52.2308 37.5 52.2308Z" :fill="sec"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 15.2308C45.4656 15.2308 51.9231 8.85943 51.9231 0.999998L75 1C75 21.4345 58.2107 38 37.5 38C16.7893 38 1.4482e-06 21.4345 3.23464e-06 0.999993L23.0769 0.999995C23.0769 8.85943 29.5344 15.2308 37.5 15.2308Z" :fill="sec"/>
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