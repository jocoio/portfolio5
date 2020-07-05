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
    <g ref="objects">
      <rect width='50' height='4' x="-25%" y="48.75%" transform="" :fill="sec"/>
      <rect width='50' height='4' x="-25%" y="48.75%" transform="rotate(-180 75 75)" :fill="sec"/>
      <rect width='50' height='4' x="-25%" y="48.75%" transform="rotate(-90 75 75)" :fill="sec"/>
      <rect width='50' height='4' x="-25%" y="48.75%" transform="rotate(90 75 75)" :fill="sec"/>
      <rect width='50' height='4' x="-25%" y="48.75%" transform="rotate(-45 75 75)" :fill="sec"/>
      <rect width='50' height='4' x="-25%" y="48.75%" transform="rotate(45 75 75)" :fill="sec"/>
      <rect width='50' height='4' x="-25%" y="48.75%" transform="rotate(-22.5 75 75)" :fill="sec"/>
      <rect width='50' height='4' x="-25%" y="48.75%" transform="rotate(-66.5 75 75)" :fill="sec"/>
      <rect width='50' height='4' x="-25%" y="48.75%" transform="rotate(-112.5 75 75)" :fill="sec"/>
      <rect width='50' height='4' x="-25%" y="48.75%" transform="rotate(-135 75 75)" :fill="sec"/>
      <rect width='50' height='4' x="-25%" y="48.75%" transform="rotate(-157.5 75 75)" :fill="sec"/>
      <rect width='50' height='4' x="-25%" y="48.75%" transform="rotate(157.5 75 75)" :fill="sec"/>
      <rect width='50' height='4' x="-25%" y="48.75%" transform="rotate(135 75 75)" :fill="sec"/>
      <rect width='50' height='4' x="-25%" y="48.75%" transform="rotate(112.5 75 75)" :fill="sec"/>
      <rect width='50' height='4' x="-25%" y="48.75%" transform="rotate(66.5 75 75)" :fill="sec"/>
      <rect width='50' height='4' x="-25%" y="48.75%" transform="rotate(22.5 75 75)" :fill="sec"/>
    </g>
  </svg>
</template>

<script>
import anime from 'animejs';

export default {
  data: function () {
    return {
      animIntro: null,
      animMain: null,
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
        duration: 750,
        targets: this.$refs.objects.children,
        easing: 'easeOutQuart',
        loop: false,
        autoplay: false,
        width: [0, 125],
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        duration: 400,
        targets: this.$refs.objects.children,
        loop: false,
        autoplay: false,
      })
      .add({
        easing: 'easeOutQuad',
        width: [125, 0]
      })
      .add({
        easing: 'easeInQuad',
        width: [0, 125]
      });
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
  g > rect {
    rx: 1;
    ry: 1;
  }
</style>
