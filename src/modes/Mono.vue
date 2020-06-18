<template>
  <div class="mono" :id="num" :ref="num" :style="color_style"/>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Mono',
  data: function () {
    return {
      color: '#b06262',
      introAnim: null
    }
  },
  computed: {
    color_style () {
      return {
        backgroundColor: this.color
      }
    }
  },
  props: {
    changing: Boolean,
    paused: Boolean,
    num: Number
  },
  components: {
  },
  methods: {
    initIntro: function () {
      this.introAnim = anime({
        duration: 500,
        targets: this.$refs[this.num],
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
        opacity: 1,
      }) 
    }
  },
  watch: {
    changing: function () {
      this.introAnim.reverse();
      this.introAnim.play();
    },
    paused: function () {
      // this.paused ? this.colorAnim.play() : this.colorAnim.pause();
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
  .mono {
    opacity: 0;
  }
</style>