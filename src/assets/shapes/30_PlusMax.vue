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
  <rect ref="cross1" x="50" width="50" height="150" :fill="sec"/>
  <rect ref="cross2" y="50" width="150" height="50" :fill="sec"/>
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
      this.animIntro = anime.timeline({
        autoplay: false,
        duration: 300,
        easing: 'easeOutQuart',
      })
      .add({
        targets: this.$refs.cross1,
        height: [0, 150]
      })
      .add({
        targets: this.$refs.cross2,
        width: [0, 150]
      })
    },
    initMain: function () {
      this.animMain = anime.timeline({
        autoplay: false,
        duration: 400,
        easing: 'easeOutQuart',
        complete: () => {
          this.animIntro.play();
        }
      })
      .add({
        targets: this.$refs.cross1,
        height: [150, 0]
      })
      .add({
        targets: this.$refs.cross2,
        width: [150, 0]
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