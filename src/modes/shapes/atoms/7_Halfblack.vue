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
    <rect ref="rect" x="75" width="150" height="150" :fill="sec"/>
  </svg>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Halfblack',
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
        duration: 500,
        targets: this.$refs.rect,
        easing: 'easeOutQuad',
        loop: false,
        autoplay: false,
        x: [150, 75]
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        targets: this.$refs.rect,
        loop: false,
        autoplay: false
      })
      .add({
        duration: 500,
        easing: 'easeInCirc',
        x: [75, 300],
      })
      .add({
        duration: 600,
        easing: 'easeOutCirc',
        x: [-100, 75],
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