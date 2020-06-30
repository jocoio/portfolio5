<template>
  <svg 
    width="100%" 
    height="100%" 
    viewBox="0 0 150 150" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="150" height="150" :fill="pri"/>
    <g ref="rects">
      <rect x="-83.6699" y="74.6295" width="223.869" height="223.869" transform="rotate(-45 -83.6699 74.6295)" :stroke="sec" stroke-width="10" fill="none"/>
      <rect x="-65.792" y="74.6295" width="198.586" height="198.586" transform="rotate(-45 -65.792 74.6295)" :stroke="sec" stroke-width="10" fill="none" />
      <rect x="-47.9142" y="74.6295" width="173.303" height="173.303" transform="rotate(-45 -47.9142 74.6295)" :stroke="sec" stroke-width="10" fill="none"/>
      <rect x="-30.0362" y="74.6295" width="148.02" height="148.02" transform="rotate(-45 -30.0362 74.6295)" :stroke="sec" stroke-width="10" fill="none"/>
      <rect x="-12.1584" y="74.6295" width="122.737" height="122.737" transform="rotate(-45 -12.1584 74.6295)" :stroke="sec" stroke-width="10" fill="none"/>
      <rect x="5.71963" y="74.6295" width="97.4534" height="97.4534" transform="rotate(-45 5.71963 74.6295)" :stroke="sec" stroke-width="10" fill="none"/>
      <rect x="23.5976" y="74.6295" width="72.1702" height="72.1702" transform="rotate(-45 23.5976 74.6295)" :stroke="sec" stroke-width="10" fill="none"/>
      <rect x="41.4754" y="74.6295" width="46.8871" height="46.8871" transform="rotate(-45 41.4754 74.6295)" :stroke="sec" stroke-width="10" fill="none"/>
      <rect x="59.3532" y="74.6295" width="21.6039" height="21.6039" transform="rotate(-45 59.3532 74.6295)" :stroke="sec" stroke-width="10" fill="none"/>
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
        duration: 300,
        targets: this.$refs.rects.children,
        loop: false,
        autoplay: false,
        easing: 'easeInOutQuad',
        delay: anime.stagger(100),
        opacity: [0, 1],
        strokeWidth: [0,3]
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        targets: this.$refs.rects.children,
        loop: false,
        autoplay: false,
        duration: 300,
      })
      .add({
        easing: 'easeInOutQuad',
        strokeWidth: [3,10],
        delay: anime.stagger(50)
      })
      .add({
        easing: 'easeInOutQuad',
        strokeWidth: [10,3],
        delay: anime.stagger(50)
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