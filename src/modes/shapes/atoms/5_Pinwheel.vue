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
    <g ref="objects">
      <rect width='50' height='4' x="50%" y="49%" transform="" :fill="secondary"/>
      <rect width='50' height='4' x="50%" y="49%" transform="rotate(-180 75 75)" :fill="secondary"/>
      <rect width='50' height='4' x="50%" y="49%" transform="rotate(-90 75 75)" :fill="secondary"/>
      <rect width='50' height='4' x="50%" y="49%" transform="rotate(90 75 75)" :fill="secondary"/>
      <rect width='50' height='4' x="50%" y="49%" transform="rotate(-45 75 75)" :fill="secondary"/>
      <rect width='50' height='4' x="50%" y="49%" transform="rotate(45 75 75)" :fill="secondary"/>

      <rect width='50' height='4' x="50%" y="49%" transform="rotate(-22.5 75 75)" :fill="secondary"/>
      <rect width='50' height='4' x="50%" y="49%" transform="rotate(-66.5 75 75)" :fill="secondary"/>
      <rect width='50' height='4' x="50%" y="49%" transform="rotate(-112.5 75 75)" :fill="secondary"/>
      <rect width='50' height='4' x="50%" y="49%" transform="rotate(-135 75 75)" :fill="secondary"/>
      <rect width='50' height='4' x="50%" y="49%" transform="rotate(-157.5 75 75)" :fill="secondary"/>
      <rect width='50' height='4' x="50%" y="49%" transform="rotate(157.5 75 75)" :fill="secondary"/>
      <rect width='50' height='4' x="50%" y="49%" transform="rotate(135 75 75)" :fill="secondary"/>
      <rect width='50' height='4' x="50%" y="49%" transform="rotate(112.5 75 75)" :fill="secondary"/>
      <rect width='50' height='4' x="50%" y="49%" transform="rotate(66.5 75 75)" :fill="secondary"/>
      <rect width='50' height='4' x="50%" y="49%" transform="rotate(22.5 75 75)" :fill="secondary"/>
    </g>
  </svg>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Pinwheel',
  data: function () {
    return {
      animIntro: null,
      animMain: null,
    }
  },
  computed: {},
  props: {
    pri: String,
    secondary: String
  },
  components: {},
  methods: {
    playMain: function () {
      console.log('test');
      this.animMain.play();
    },
    playIntro: function () {
      this.animIntro.play();
    },
    initIntro: function () {
      this.animIntro = anime({
        duration: 750,
        targets: this.$refs.objects.children,
        easing: 'easeOutCubic',
        loop: false,
        autoplay: false,
        // delay: anime.stagger(20),
        width: [0, 50],
        complete: () => {
          
        }
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        duration: 300,
        targets: this.$refs.objects.children,
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
      })
      .add({
        width: [50, 0]
      })
      .add({
        width: [0, 50]
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
  g > rect {
    rx: 1;
    ry: 1;
  }
</style>