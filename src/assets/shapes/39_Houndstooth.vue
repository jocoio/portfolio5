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
    <path d="M0 0V30L15 45L30 30V0L15 15L0 0Z" fill="white"/>
    <path d="M60 0V30L75 45L90 30V0L75 15L60 0Z" fill="white"/>
    <path d="M120 0V30L135 45L150 30V0L135 15L120 0Z" fill="white"/>
    <path d="M30 30V60L45 75L60 60V30L45 45L30 30Z" fill="white"/>
    <path d="M90 30V60L105 75L120 60V30L105 45L90 30Z" fill="white"/>
    <path d="M0 60V90L15 105L30 90V60L15 75L0 60Z" fill="white"/>
    <path d="M60 60V90L75 105L90 90V60L75 75L60 60Z" fill="white"/>
    <path d="M120 60V90L135 105L150 90V60L135 75L120 60Z" fill="white"/>
    <path d="M30 90V120L45 135L60 120V90L45 105L30 90Z" fill="white"/>
    <path d="M90 90V120L105 135L120 120V90L105 105L90 90Z" fill="white"/>
    <path d="M0 120V150L15 165L30 150V120L15 135L0 120Z" fill="white"/>
    <path d="M60 120V150L75 165L90 150V120L75 135L60 120Z" fill="white"/>
    <path d="M120 120V150L135 165L150 150V120L135 135L120 120Z" fill="white"/>
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
        targets: this.$refs.r1.children,
        easing: 'easeOutQuad',
        autoplay: false,
        translateY: [-15, 0],
        opacity: [0, 1],
        delay: anime.stagger(75)
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 200,
        targets: this.$refs.r1.children,
        easing: 'easeInQuad',
        autoplay: false,
        translateY: [0, 30],
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