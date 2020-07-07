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
  <g ref="r1">
    <circle cx="0.5" cy="-0.5" r="37.5" :fill="sec"/>
    <circle cx="0.5" cy="74.5" r="37.5" :fill="sec"/>
    <circle cx="0.5" cy="149.5" r="37.5" :fill="sec"/>
  </g>
  <g ref="r2">
    <circle cx="75.5" cy="-0.5" r="37.5" :fill="sec"/>
    <circle cx="75.5" cy="74.5" r="37.5" :fill="sec"/>
    <circle cx="75.5" cy="149.5" r="37.5" :fill="sec"/>
  </g>
  <g ref="r3">
    <circle cx="150.5" cy="-0.5" r="37.5" :fill="sec"/>
    <circle cx="150.5" cy="74.5" r="37.5" :fill="sec"/>
    <circle cx="150.5" cy="149.5" r="37.5" :fill="sec"/>
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
        duration: 600,
        easing: 'easeOutQuad',
        autoplay: false,
      })
      .add({
        targets: this.$refs.r1.children,
        translateY: [-200, 0],
        delay: anime.stagger(100, {direction: 'reverse'})
      }, 0)
      .add({
        targets: this.$refs.r2.children,
        translateY: [200, 0],
        delay: anime.stagger(100)
      }, 0)
      .add({
        targets: this.$refs.r3.children,
        translateY: [-200, 0],
        delay: anime.stagger(100, {direction: 'reverse'})
      }, 0)
    },
    initMain: function () {
      this.animMain = anime.timeline({
        duration: 600,
        easing: 'easeInQuad',
        autoplay: false,
        complete: () => {
          this.animIntro.play();
        }
      })
      .add({
        targets: this.$refs.r1.children,
        translateY: [0, 250],
        delay: anime.stagger(100, {direction: 'reverse'})
      }, 0)
      .add({
        targets: this.$refs.r2.children,
        translateY: [0, -250],
        delay: anime.stagger(100)
      }, 0)
      .add({
        targets: this.$refs.r3.children,
        translateY: [0, 250],
        delay: anime.stagger(100, {direction: 'reverse'})
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