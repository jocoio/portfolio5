<template>
  <svg class="dot" :ref="num" width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> 
    <circle cx="50" cy="50" r="30" fill="white"/>
  </svg>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Dot',
  data: function () {
    return {
      introAnim: null,
      mainAnim: null
    }
  },
  computed: {
    color_style () {
      return {
        // backgroundColor: 'this.color'
      }
    }
  },
  props: {
    changing: Boolean,
    num: Number
  },
  components: {},
  methods: {
    animate: function () {
      console.log('dot');
    },
    initIntro: function () {
      this.introAnim = anime({
        duration: 500,
        targets: this.$refs[this.num],
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
        opacity: 1
      }) 
    },
    initMain: function () {

    }
  },
  watch: {
    changing: function () {
      this.introAnim.reverse();
      this.introAnim.play();
    }
  },
  created: function () {},
  mounted: function () {
    this.initIntro();
    this.introAnim.play();
  }
}
</script>

<style>
  .dot {
    opacity: 0;
  }
</style>