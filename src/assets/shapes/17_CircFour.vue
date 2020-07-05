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
      <circle ref="circ1" r="75" :fill="sec"/>
      <circle ref="circ2" cx="150" r="75" :fill="sec"/>
      <circle ref="circ3" cy="150" r="75" :fill="sec"/>
      <circle ref="circ4" cx="150" cy="150" r="75" :fill="sec"/>
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
      this.animIntro = anime.timeline({
        autoplay: false,
        duration: 500,
        easing: 'easeOutQuad',
      })
      .add({
        targets: this.$refs.circ1,
        translateX: [-75, 0],
        translateY: [-75, 0]
      }, 0)
      .add({
        targets: this.$refs.circ2,
        translateX: [75, 0],
        translateY: [-75, 0]
      }, 0)
      .add({
        targets: this.$refs.circ3,
        translateX: [-75, 0],
        translateY: [75, 0]
      }, 0)
      .add({
        targets: this.$refs.circ4,
        translateX: [75, 0],
        translateY: [75, 0]
      }, 0)
    },
    initMain: function () {
      this.animMain = anime.timeline({
        autoplay: false,
        duration: 450,
        direction: 'alternate',
        easing: 'easeOutExpo',
      })
      .add({
        targets: this.$refs.circ1,
        translateX: [0, 10],
        translateY: [0, 10]
      }, 0)
      .add({
        targets: this.$refs.circ2,
        translateX: [0, -10],
        translateY: [0, 10]
      }, 0)
      .add({
        targets: this.$refs.circ3,
        translateX: [0, 10],
        translateY: [0, -10]
      }, 0)
      .add({
        targets: this.$refs.circ4,
        translateX: [0, -10],
        translateY: [0, -10]
      }, 0)
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