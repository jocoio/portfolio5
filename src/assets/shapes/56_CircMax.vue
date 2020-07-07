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
<circle ref="r1" cx="75" cy="75" r="75" :fill="sec"/>
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
        duration: 500,
        targets: this.$refs.r1,
        easing: 'easeOutQuad',
        autoplay: false,
        r: [0, 75]
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        targets: this.$refs.r1,
        autoplay: false,
      })
      .add({
        duration: 450,
        easing: 'easeOutExpo',
        r: [75, 5]
      })
      .add({
        duration: 450,
        easing: 'easeInExpo',
        r: [5, 0]
      })
      .add({
        duration: 1,
        easing: 'easeInExpo',
        translateY: [0, 150],
        r: [0, 75]
      })
      .add({
        duration: 450,
        easing: 'easeOutExpo',
        translateY: [150, 0]
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