<template>
  <svg 
    width="100%" 
    height="100%" 
    viewBox="0 0 150 150" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="150" height="150" transform="translate(0 150) rotate(-90)" :fill="pri"/>
    <g ref="tris">
      <path d="M75 75L150 75L150 150L75 75Z" :fill="sec"/>
      <g>
        <path d="M75 0L150 -3.27835e-06L150 75L75 0Z" :fill="sec"/>
        <path d="M-3.27835e-06 75L75 75L75 150L-3.27835e-06 75Z" :fill="sec"/>
      </g>
      <path d="M-3.27835e-06 0L75 -3.27835e-06L75 75L-3.27835e-06 0Z" :fill="sec"/>
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
        targets: this.$refs.tris.children,
        easing: 'easeOutQuad',
        loop: false,
        autoplay: false,
        delay: anime.stagger(100),
        translateX: [-30, 0],
        translateY: [-30, 0],
        opacity: [0, 1]
      }) 
    },
    initMain () {
      this.animMain = anime({
        duration: 250,
        targets: this.$refs.tris.children,
        easing: 'easeInQuad',
        loop: false,
        autoplay: false,
        delay: anime.stagger(75),
        translateX: [0, 45],
        translateY: [0, 45],
        opacity: [1, 0],
        complete: () => {
          this.animIntro.play();
        }
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
</style>