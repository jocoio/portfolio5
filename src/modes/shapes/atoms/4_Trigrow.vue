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
      <path d="M150 0V150H0L150 0Z" :fill="sec"/>
      <path d="M75 0V75H0L75 0Z" :fill="sec"/>
      <path d="M37 0V37H0L37 0Z" :fill="sec"/>
    </g>
  </svg>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Trigrow',
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
        duration: 750,
        targets: this.$refs.tris.children,
        easing: 'easeOutQuad',
        loop: false,
        autoplay: false,
        delay: anime.stagger(150),
        translateX: [-150, 0],
        translateY: [-150, 0]
      }) 
    },
    initMain: function () {
      this.animMain = anime({
        duration: 500,
        targets: this.$refs.tris.children,
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
        delay: anime.stagger(120, {direction: 'reverse'}),
        translateX: [0, 150],
        translateY: [0, 150],
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