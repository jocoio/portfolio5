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
  <g ref="crosses">
    <g>
      <rect x="16.6666" width="16.6667" height="50" :fill="sec"/>
      <rect y="16.6667" width="50" height="16.6667" :fill="sec"/>
    </g>
    <g>
      <rect x="66.6666" width="16.6667" height="50" :fill="sec"/>
      <rect x="50" y="16.6667" width="50" height="16.6667" :fill="sec"/>
    </g>
    <g>
      <rect x="116.667" width="16.6667" height="50" :fill="sec"/>
      <rect x="100" y="16.6667" width="50" height="16.6667" :fill="sec"/>
    </g>
    <g>
      <rect x="16.6666" y="50" width="16.6667" height="50" :fill="sec"/>
      <rect y="66.6667" width="50" height="16.6667" :fill="sec"/>
    </g>
    <g>
      <rect x="66.6666" y="50" width="16.6667" height="50" :fill="sec"/>
      <rect x="50" y="66.6667" width="50" height="16.6667" :fill="sec"/>
    </g>
    <g>
      <rect x="116.667" y="50" width="16.6667" height="50" :fill="sec"/>
      <rect x="100" y="66.6667" width="50" height="16.6667" :fill="sec"/>
    </g>
    <g>
      <rect x="16.6666" y="100" width="16.6667" height="50" :fill="sec"/>
      <rect y="116.667" width="50" height="16.6667" :fill="sec"/>
    </g>
    <g>
      <rect x="66.6666" y="100" width="16.6667" height="50" :fill="sec"/>
      <rect x="50" y="116.667" width="50" height="16.6667" :fill="sec"/>
    </g>
    <g>
      <rect x="116.667" y="100" width="16.6667" height="50" :fill="sec"/>
      <rect x="100" y="116.667" width="50" height="16.6667" :fill="sec"/>
    </g>
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
        duration: 150,
        targets: this.$refs.crosses.children,
        easing: 'easeOutQuad',
        autoplay: false,
        delay: anime.stagger(130, {grid: [3, 3], from: 0}),
        opacity: [0, 1]
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 150,
        targets: this.$refs.crosses.children,
        easing: 'easeInQuad',
        autoplay: false,
        delay: anime.stagger(130, {grid: [3, 3], from: 0}),
        opacity: [1, 0],
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