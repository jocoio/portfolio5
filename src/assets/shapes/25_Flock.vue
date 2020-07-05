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
<rect x="45.5" y="92" width="12.5" height="12.5" :fill="sec"/>
<path d="M45.5 117L45.5 104.5L58 104.5L45.5 117Z" :fill="sec"/>
<path d="M45.5 92L45.5 104.5L33 104.5L45.5 92Z" :fill="sec"/>
<rect x="75.5" y="62" width="12.5" height="12.5" :fill="sec"/>
<path d="M75.5 87L75.5 74.5L88 74.5L75.5 87Z" :fill="sec"/>
<path d="M75.5 62L75.5 74.5L63 74.5L75.5 62Z" :fill="sec"/>
<rect x="45.5" y="62" width="12.5" height="12.5" :fill="sec"/>
<path d="M45.5 87L45.5 74.5L58 74.5L45.5 87Z" :fill="sec"/>
<path d="M45.5 62L45.5 74.5L33 74.5L45.5 62Z" :fill="sec"/>
<rect x="75.5" y="32" width="12.5" height="12.5" :fill="sec"/>
<path d="M75.5 57L75.5 44.5L88 44.5L75.5 57Z" :fill="sec"/>
<path d="M75.5 32L75.5 44.5L63 44.5L75.5 32Z" :fill="sec"/>
<rect x="75.5" y="92" width="12.5" height="12.5" :fill="sec"/>
<path d="M75.5 117L75.5 104.5L88 104.5L75.5 117Z" :fill="sec"/>
<path d="M75.5 92L75.5 104.5L63 104.5L75.5 92Z" :fill="sec"/>
<rect x="105.5" y="62" width="12.5" height="12.5" :fill="sec"/>
<path d="M105.5 87L105.5 74.5L118 74.5L105.5 87Z" :fill="sec"/>
<path d="M105.5 62L105.5 74.5L93 74.5L105.5 62Z" :fill="sec"/>
<path d="M105.5 32H118V44.5H105.5V32Z" :fill="sec"/>
<path d="M105.5 57L105.5 44.5L118 44.5L105.5 57Z" :fill="sec"/>
<path d="M105.5 32L105.5 44.5L93 44.5L105.5 32Z" :fill="sec"/>

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