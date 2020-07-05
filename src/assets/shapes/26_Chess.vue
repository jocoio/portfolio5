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
<g ref="board">
  <rect x="120" y="120" width="30" height="30" :fill="sec"/>
  <rect x="60" y="120" width="30" height="30" :fill="sec"/>
  <rect y="120" width="30" height="30" :fill="sec"/>
  <rect x="90" y="90" width="30" height="30" :fill="sec"/>
  <rect x="30" y="90" width="30" height="30" :fill="sec"/>
  <rect x="120" y="60" width="30" height="30" :fill="sec"/>
  <rect x="60" y="60" width="30" height="30" :fill="sec"/>
  <rect y="60" width="30" height="30" :fill="sec"/>
  <rect x="90" y="30" width="30" height="30" :fill="sec"/>
  <rect x="30" y="30" width="30" height="30" :fill="sec"/>
  <rect x="120" width="30" height="30" :fill="sec"/>
  <rect x="60" width="30" height="30" :fill="sec"/>
  <rect width="30" height="30" :fill="sec"/>
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
        duration: 200,
        targets: this.$refs.board.children,
        easing: 'easeOutQuad',
        autoplay: false,
        translateY: [15, 0],
        opacity: [0, 1],
        delay: anime.stagger(75)
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 200,
        targets: this.$refs.board.children,
        easing: 'easeInQuad',
        autoplay: false,
        translateY: [0, -30],
        opacity: [1, 0],
        delay: anime.stagger(50, {direction: 'reverse'}),
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