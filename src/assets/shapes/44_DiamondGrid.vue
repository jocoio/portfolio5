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
    <rect x="97.9116" y="110.184" width="18" height="18" transform="rotate(-45 97.9116 110.184)" :fill="sec"/>
    <rect x="62.4558" y="110.184" width="18" height="18" transform="rotate(-45 62.4558 110.184)" :fill="sec"/>
    <rect x="27" y="110.456" width="18" height="18" transform="rotate(-45 27 110.456)" :fill="sec"/>
    <rect x="97.9116" y="74.4559" width="18" height="18" transform="rotate(-45 97.9116 74.4559)" :fill="sec"/>
    <rect x="62.4558" y="74.4559" width="18" height="18" transform="rotate(-45 62.4558 74.4559)" :fill="sec"/>
    <rect x="27" y="74.728" width="18" height="18" transform="rotate(-45 27 74.728)" :fill="sec"/>
    <rect x="98.1837" y="38.7279" width="18" height="18" transform="rotate(-45 98.1837 38.7279)" :fill="sec"/>
    <rect x="62.7279" y="38.7279" width="18" height="18" transform="rotate(-45 62.7279 38.7279)" :fill="sec"/>
    <rect x="27.2721" y="39" width="18" height="18" transform="rotate(-45 27.2721 39)" :fill="sec"/>
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
        targets: this.$refs.r1.children,
        easing: 'easeOutQuad',
        autoplay: false,
        delay: anime.stagger(50),
        opacity: [0, 1]
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 350,
        targets: this.$refs.r1.children,
        easing: 'easeInQuad',
        autoplay: false,
        delay: anime.stagger(50),
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
  svg {
    height: 100%;
  }
</style>