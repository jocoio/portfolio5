<template>
  <svg 
    width="100%" 
    height="100%" 
    viewBox="0 0 150 150" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="150" height="150" :fill="pri"/>
    <g ref="tris">
      <g>
        <path d="M125 113L150 150H100L125 113Z" :fill="sec"/>
        <path d="M75 113L100 150H50L75 113Z" :fill="sec"/>
        <path d="M25 113L50 150H0L25 113Z" :fill="sec"/>
      </g>
      <g>
        <path d="M125 75L150 113H100L125 75Z" :fill="sec"/>
        <path d="M75 75L100 113H50L75 75Z" :fill="sec"/>
        <path d="M25 75L50 113H0L25 75Z" :fill="sec"/>
      </g>
      <g>
        <path d="M125 38L150 75H100L125 38Z" :fill="sec"/>
        <path d="M75 38L100 75H50L75 38Z" :fill="sec"/>
        <path d="M25 38L50 75H0L25 38Z" :fill="sec"/>
      </g>
      <g>
        <path d="M125 0L150 38H100L125 0Z" :fill="sec"/>
        <path d="M75 0L100 38H50L75 0Z" :fill="sec"/>  
        <path d="M25 0L50 38H0L25 0Z" :fill="sec"/>
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
        duration: 250,
        targets: this.$refs.tris.children,
        easing: 'easeOutQuad',
        autoplay: false,
        delay: anime.stagger(250),
        opacity: [0, 1],
        translateY: [15, 0]
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        targets: this.$refs.tris.children,
        delay: anime.stagger(100),
        autoplay: false,
      })
      .add({
        duration: 500,
        easing: 'easeInQuad',
        translateX: (el, i) => {return i % 2 === 0 ? [0, 150] : [0, -150]},
      })
      .add({
        duration: 500,
        easing: 'easeOutQuad',
        translateX: (el, i) => {return i % 2 === 1 ? [150, 0] : [-150, 0]},
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