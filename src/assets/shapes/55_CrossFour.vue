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
    <g ref="r1">
      <rect x="65.0398" y="33.7414" width="14.2828" height="42.8485" transform="rotate(45 65.0398 33.7414)" :fill="sec"/>
      <rect x="44.8408" y="33.7414" width="42.8485" height="14.2828" transform="rotate(45 44.8408 33.7414)" :fill="sec"/>
    </g>  
    <g ref="r2">
      <rect x="106.159" y="33.7415" width="14.2828" height="42.8485" transform="rotate(45 106.159 33.7415)" :fill="sec"/>
      <rect x="85.9602" y="33.7414" width="42.8485" height="14.2828" transform="rotate(45 85.9602 33.7414)" :fill="sec"/>
    </g>
    <g ref="r3">
      <rect x="65.0398" y="74.8608" width="14.2828" height="42.8485" transform="rotate(45 65.0398 74.8608)" :fill="sec"/>
      <rect x="44.8408" y="74.8607" width="42.8485" height="14.2828" transform="rotate(45 44.8408 74.8607)" :fill="sec"/>
    </g> 
    <g ref="r4">
      <rect x="106.159" y="74.8607" width="14.2828" height="42.8485" transform="rotate(45 106.159 74.8607)" :fill="sec"/>
      <rect x="85.9602" y="74.8607" width="42.8485" height="14.2828" transform="rotate(45 85.9602 74.8607)" :fill="sec"/>
    </g>
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
        targets: [this.$refs.r1, this.$refs.r2, this.$refs.r3, this.$refs.r4],
        duration: 300,
        delay: anime.stagger(100),
        easing: 'easeOutQuart',
        autoplay: false,
        opacity: [0, 1],
        translateX: [-5, 0],
        translateY: [-5, 0]
      })
    },
    initMain: function () {
      this.animMain = anime.timeline({
        duration: 400,
        direction: 'alternate',
        easing: 'easeOutExpo',   
        autoplay: false,
      })
      .add({
        targets: this.$refs.r1,
        translateX: [0, 20.5],
        translateY: [0, 20]
      }, 0)
      .add({
        targets: this.$refs.r2,
        translateX: [0, -20.5],
        translateY: [0, 20]
      }, 0)
      .add({
        targets: this.$refs.r3,
        translateX: [0, 20.5],
        translateY: [0, -20.5]
      }, 0)
      .add({
        targets: this.$refs.r4,
        translateX: [0, -20.5],
        translateY: [0, -20.5]
      }, 0)
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