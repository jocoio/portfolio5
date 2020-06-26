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
    <rect x="-6.62254" y="115.173" width="168.234" height="167.11" transform="rotate(-45 -6.62254 115.173)" fill="none" :stroke="secondary" stroke-width="10"/>
    <rect x="-35.3401" y="116.236" width="210.22" height="209.999" transform="rotate(-45 -35.3401 116.236)" fill="none" :stroke="secondary" stroke-width="10"/>
    <rect x="-65.1212" y="116.204" width="251.549" height="250.879" transform="rotate(-45 -65.1212 116.204)" fill="none" :stroke="secondary" stroke-width="10"/>
    <rect x="22.095" y="115.173" width="127.036" height="128.419" transform="rotate(-45 22.095 115.173)" fill="none" :stroke="secondary" stroke-width="10"/>
    <rect x="49.7489" y="115.173" width="87.683" height="90.4799" transform="rotate(-45 49.7489 115.173)" fill="none" :stroke="secondary" stroke-width="10"/>
    <rect x="78.4663" y="115.173" width="44.2222" height="50" transform="rotate(-45 78.4663 115.173)" fill="none" :stroke="secondary" stroke-width="10"/>
    <rect x="-95.9659" y="115.173" width="294.826" height="293.779" transform="rotate(-45 -95.9659 115.173)" fill="none" :stroke="secondary" stroke-width="10"/>
    <rect x="-126.093" y="115.727" width="338.717" height="335.342" transform="rotate(-45 -126.093 115.727)" fill="none" :stroke="secondary" stroke-width="10"/>
    <rect x="-156.929" y="117.864" width="382.959" height="375.57" transform="rotate(-45 -156.929 117.864)" fill="none" :stroke="secondary" stroke-width="10"/>
  </svg>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Rectripple',
  data: function () {
    return {
      animIntro: null,
      animMain: null
    }
  },
  computed: {},
  props: {
    pri: String,
    secondary: String
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
    initMain: function () {}
  },
  watch: {},
  created: function () {},
  mounted: function () {
    this.initIntro();
  }
}
</script>

<style scoped>
</style>