<template>
  <svg 
    width="100%" 
    height="100%" 
    viewBox="0 0 150 150" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="150" height="150" :fill="pri"/>
    <g ref="lines">
      <g ref="horizontal">
        <line x1="0" y1="86.5" x2="150" y2="86.5" stroke="white" stroke-width="3"/>
        <line x1="0" y1="109.5" x2="150" y2="109.5" stroke="white" stroke-width="3"/>
        <line x1="0" y1="132.5" x2="150" y2="132.5" stroke="white" stroke-width="3"/>
        <line x1="0" y1="63.5" x2="150" y2="63.5" stroke="white" stroke-width="3"/>
        <line x1="0" y1="40.5" x2="150" y2="40.5" stroke="white" stroke-width="3"/>
        <line x1="0" y1="17.5" x2="150" y2="17.5" stroke="white" stroke-width="3"/>
      </g>
      <g ref="vertical">
        <line x1="87.5" y1="150" x2="87.5" y2="6.55672e-08" stroke="white" stroke-width="3"/>
        <line x1="110.5" y1="150" x2="110.5" y2="6.55672e-08" stroke="white" stroke-width="3"/>
        <line x1="133.5" y1="150" x2="133.5" y2="6.55672e-08" stroke="white" stroke-width="3"/>
        <line x1="64.5" y1="150" x2="64.5" y2="6.55672e-08" stroke="white" stroke-width="3"/>
        <line x1="41.5" y1="150" x2="41.5" y2="6.55672e-08" stroke="white" stroke-width="3"/>
        <line x1="18.5" y1="150" x2="18.5" y2="6.55672e-08" stroke="white" stroke-width="3"/>
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
      // setTimeout(() => this.animMain.play, 600);
    },
    playIntro: function () {
      this.animIntro.play();
    },
    initIntro: function () {
      this.animIntro = anime({
        duration: 450,
        targets: [this.$refs.horizontal.children, this.$refs.vertical.children],
        easing: 'easeInOutQuad',
        autoplay: false,
        delay: anime.stagger(30),
        strokeDashoffset: [anime.setDashoffset, 0],
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        autoplay: false,
        direction: 'alternate'
      })
      .add({
        targets: this.$refs.horizontal.children,
        duration: 450,
        easing: 'easeOutExpo',
        y1: (el, i) => {return i < 3 ? 70 + (7.5 * (i + 1)) : 100 - (7.5 * (i + 1))},
        y2: (el, i) => {return i < 3 ? 70 + (7.5  * (i + 1)) : 100 - (7.5 * (i + 1))},
      }, 50)
      .add({
        targets: this.$refs.vertical.children,
        duration: 450,
        easing: 'easeOutExpo',
        x1: (el, i) => {return i < 3 ? 70 + (7.5  * (i + 1)) : 100 - (7.5 * (i + 1))},
        x2: (el, i) => {return i < 3 ? 70 + (7.5  * (i + 1)) : 100 - (7.5 * (i + 1))},
      }, 50)
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