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
      <rect x="30.0551" y="108.496" width="6.05516" height="18.1655" fill="white"/>
      <rect x="24" y="114.552" width="18.1655" height="6.05516" fill="white"/>
    </g>
    <g>
      <rect x="30.0551" y="80.3309" width="6.05516" height="18.1655" fill="white"/>
      <rect x="24" y="86.3861" width="18.1655" height="6.05516" fill="white"/>
    </g>
    <g>
      <rect x="30.0551" y="52.1655" width="6.05516" height="18.1655" fill="white"/>
      <rect x="24" y="58.2206" width="18.1655" height="6.05516" fill="white"/>
    </g>
    <g>
      <rect x="30.0551" y="24" width="6.05516" height="18.1655" fill="white"/>
      <rect x="24" y="30.0551" width="18.1655" height="6.05516" fill="white"/>
    </g>
    <g>
      <rect x="58.2206" y="108.496" width="6.05516" height="18.1655" fill="white"/>
      <rect x="52.1655" y="114.552" width="18.1655" height="6.05516" fill="white"/>
    </g>
    <g>
      <rect x="58.2206" y="80.3309" width="6.05516" height="18.1655" fill="white"/>
      <rect x="52.1655" y="86.3861" width="18.1655" height="6.05516" fill="white"/>
    </g>
    <g>
      <rect x="58.2206" y="52.1655" width="6.05516" height="18.1655" fill="white"/>
      <rect x="52.1655" y="58.2206" width="18.1655" height="6.05516" fill="white"/>
    </g>
    <g>
      <rect x="58.2206" y="24" width="6.05516" height="18.1655" fill="white"/>
      <rect x="52.1655" y="30.0551" width="18.1655" height="6.05516" fill="white"/>
    </g>
    <g>
      <rect x="86.3861" y="108.496" width="6.05516" height="18.1655" fill="white"/>
      <rect x="80.3311" y="114.552" width="18.1655" height="6.05516" fill="white"/>
    </g>
    <g>
      <rect x="86.3861" y="80.3309" width="6.05516" height="18.1655" fill="white"/>
      <rect x="80.3311" y="86.3861" width="18.1655" height="6.05516" fill="white"/>
    </g>
    <g>
      <rect x="86.3861" y="52.1655" width="6.05516" height="18.1655" fill="white"/>
      <rect x="80.3311" y="58.2206" width="18.1655" height="6.05516" fill="white"/>
    </g>
    <g>
      <rect x="86.3861" y="24" width="6.05516" height="18.1655" fill="white"/>
      <rect x="80.3311" y="30.0551" width="18.1655" height="6.05516" fill="white"/>
    </g>
    <g>
      <rect x="114.552" y="108.496" width="6.05516" height="18.1655" fill="white"/>
      <rect x="108.497" y="114.552" width="18.1655" height="6.05516" fill="white"/>
    </g>
    <g>
      <rect x="114.552" y="80.3309" width="6.05516" height="18.1655" fill="white"/>
      <rect x="108.497" y="86.3861" width="18.1655" height="6.05516" fill="white"/>
    </g>
    <g>
      <rect x="114.552" y="52.1655" width="6.05516" height="18.1655" fill="white"/>
      <rect x="108.497" y="58.2206" width="18.1655" height="6.05516" fill="white"/>
    </g>
    <g>
      <rect x="114.552" y="24" width="6.05516" height="18.1655" fill="white"/>
      <rect x="108.497" y="30.0551" width="18.1655" height="6.05516" fill="white"/>
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
        delay: anime.stagger(130, {grid: [4, 4], from: 0}),
        opacity: [0, 1]
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 150,
        targets: this.$refs.crosses.children,
        easing: 'easeInQuad',
        autoplay: false,
        delay: anime.stagger(130, {grid: [4, 4], from: 0}),
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