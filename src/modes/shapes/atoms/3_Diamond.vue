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
    <g ref="diamond">
          <rect ref="diamond" x="25" y="75" width="63.66" height="63.66" transform="rotate(-45 25 75)" :fill="sec"/>
    </g>
  </svg>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Diamond',
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
        targets: this.$refs.diamond,
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
        duration: 300,
        scale: [0, 1]
      });
    },
    initMain: function () {
      this.animMain = anime.timeline({
        targets: this.$refs.diamond,
        duration: 300,
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
      })
      .add({
        scale: [1,0]
      })
      .add({
        scale: [0,1]
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
  g {
    transform-origin: center;
  }
</style>