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
<path d="M30 0V30H0L30 0Z" fill="white"/>
<path d="M30 30V60H0L30 30Z" fill="white"/>
<path d="M30 60V90H0L30 60Z" fill="white"/>
<path d="M30 90V120H0L30 90Z" fill="white"/>
<path d="M30 120V150H0L30 120Z" fill="white"/>
<path d="M60 0V30H30L60 0Z" fill="white"/>
<path d="M60 30V60H30L60 30Z" fill="white"/>
<path d="M60 60V90H30L60 60Z" fill="white"/>
<path d="M60 90V120H30L60 90Z" fill="white"/>
<path d="M60 120V150H30L60 120Z" fill="white"/>
<path d="M90 0V30H60L90 0Z" fill="white"/>
<path d="M90 30V60H60L90 30Z" fill="white"/>
<path d="M90 60V90H60L90 60Z" fill="white"/>
<path d="M90 90V120H60L90 90Z" fill="white"/>
<path d="M90 120V150H60L90 120Z" fill="white"/>
<path d="M120 0V30H90L120 0Z" fill="white"/>
<path d="M120 30V60H90L120 30Z" fill="white"/>
<path d="M120 60V90H90L120 60Z" fill="white"/>
<path d="M120 90V120H90L120 90Z" fill="white"/>
<path d="M120 120V150H90L120 120Z" fill="white"/>
<path d="M150 0V30H120L150 0Z" fill="white"/>
<path d="M150 30V60H120L150 30Z" fill="white"/>
<path d="M150 60V90H120L150 60Z" fill="white"/>
<path d="M150 90V120H120L150 90Z" fill="white"/>
<path d="M150 120V150H120L150 120Z" fill="white"/>
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
      console.log('animating');
    },
    playIntro: function () {
      this.animIntro.play();
    },
    initIntro: function () {
      this.animIntro = anime({
        duration: 500,
        targets: this.$refs.svg,
        easing: 'easeInOutQuad',
        autoplay: false,
        opacity: [0, 1]
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        targets: this.$refs.svg,
        autoplay: false,
      })
      .add({
        duration: 500,
        easing: 'easeInOutQuad',
        opacity: [1, 0]
      })
      .add({
        duration: 500,
        easing: 'easeInOutQuad',
        opacity: [0, 1]
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