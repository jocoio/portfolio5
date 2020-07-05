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
    <path d="M122.528 188C101.802 167.274 101.802 133.67 122.528 112.944C122.528 112.944 160.056 150.472 122.528 188Z" fill="white"/>
    <path d="M74.5282 187C53.802 166.274 53.802 132.67 74.5282 111.944C74.5282 111.944 112.056 149.472 74.5282 187Z" fill="white"/>
    <path d="M25.5282 188C4.80196 167.274 4.80195 133.67 25.5282 112.944C25.5282 112.944 63.0564 150.472 25.5282 188Z" fill="white"/>
    <path d="M150.697 113C129.971 92.2738 129.971 58.6699 150.697 37.9436C150.697 37.9436 188.226 75.4718 150.697 113Z" fill="white"/>
    <path d="M100.641 112.495C79.9147 91.769 79.9147 58.1651 100.641 37.4388C100.641 37.4388 138.169 74.967 100.641 112.495Z" fill="white"/>
    <path d="M50.5846 112.495C29.8584 91.769 29.8584 58.1651 50.5846 37.4388C50.5846 37.4388 88.1128 74.967 50.5846 112.495Z" fill="white"/>
    <path d="M0.528204 113C-20.198 92.2738 -20.198 58.6699 0.528198 37.9436C0.528198 37.9436 38.0564 75.4718 0.528204 113Z" fill="white"/>
    <path d="M125.528 37C104.802 16.2738 104.802 -17.3301 125.528 -38.0564C125.528 -38.0564 163.056 -0.528198 125.528 37Z" fill="white"/>
    <path d="M74.5282 37C53.802 16.2738 53.802 -17.3301 74.5282 -38.0564C74.5282 -38.0564 112.056 -0.528198 74.5282 37Z" fill="white"/>
    <path d="M25.5282 37C4.80196 16.2738 4.80195 -17.3301 25.5282 -38.0564C25.5282 -38.0564 63.0564 -0.528198 25.5282 37Z" fill="white"/>
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