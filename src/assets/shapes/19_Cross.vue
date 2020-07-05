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
    <rect ref="cross1" x="40.1448" y="57.8223" width="25" height="75" transform="rotate(-45 40.1448 57.8223)" :fill="sec"/>
    <rect ref="cross2" x="40.1448" y="93.1777" width="75" height="25" transform="rotate(-45 40.1448 93.1777)" :fill="sec"/>
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
      this.animIntro = anime.timeline({
        autoplay: false,
        duration: 300,
        easing: 'easeOutQuart',
      })
      .add({
        targets: this.$refs.cross1,
        height: [0, 75]
      })
      .add({
        targets: this.$refs.cross2,
        width: [0, 75]
      })
    },
    initMain: function () {
      this.animMain = anime.timeline({
        autoplay: false,
        duration: 300,
        easing: 'easeOutQuart',
        complete: () => {
          this.animIntro.play();
        }
      })
      .add({
        targets: this.$refs.cross1,
        height: [75, 0]
      })
      .add({
        targets: this.$refs.cross2,
        width: [75, 0]
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