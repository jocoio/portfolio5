<template>
  <svg 
    ref="svg"
    width="100%" 
    height="100%" 
    viewBox="0 0 150 150" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="150" height="150" :fill="primary"/>
    <g ref="objects">
      <circle cx="75" cy="75" r="5.5" fill="none" :stroke="secondary" stroke-width="3"/>
      <circle cx="75" cy="75" r="12.5" fill="none" :stroke="secondary" stroke-width="3"/>
      <circle cx="75" cy="75" r="19.5" fill="none" :stroke="secondary" stroke-width="3"/>
      <circle cx="75" cy="75" r="26.5" fill="none" :stroke="secondary" stroke-width="3"/>
      <circle cx="75" cy="75" r="33.5" fill="none" :stroke="secondary" stroke-width="3"/>
      <circle cx="75" cy="75" r="41.5" fill="none" :stroke="secondary" stroke-width="3"/>
      <circle cx="75" cy="75" r="49.5" fill="none" :stroke="secondary" stroke-width="3"/>
      <circle cx="75" cy="75" r="57.5" fill="none" :stroke="secondary" stroke-width="3"/>
    </g>
  </svg>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Bullseye',
  data: function () {
    return {
      animIntro: null,
      animMain: null,
      animPallette: null,
      primary: "#000000",
      secondary: "#FFFFFF"
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
    applyPallette: function () {
      this.primary = this.pri;
      this.secondary = this.sec;
    },
    initIntro: function () {
      this.animIntro = anime({
        duration: 1000,
        targets: this.$refs.objects.children,
        easing: 'easeOutCirc',
        loop: false,
        autoplay: false,
        delay: anime.stagger(40),
        opacity: 1,
        complete: () => {
          this.animIntro.reverse();
          this.initMain();
          // this.initPallette();
          // this.animPallette.play();
        }
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        targets: this.$refs.objects.children,
        loop: false,
        autoplay: false
      })
      .add({
        duration: 300,
        easing: 'easeOutSine',
        opacity: [1, 0],
        delay: anime.stagger(40)
      })
      .add({
        duration: 300,
        easing: 'easeOutCirc',
        opacity: [0, 1],
        delay: anime.stagger(40)
      });
    },
    initPallette: function () {
      
    }
  },
  watch: {},
  created: function () {},
  mounted: function () {
    this.initIntro();
  }
}
</script>

<style scoped>
  circle {
    opacity: 0;
  }

  svg * {
    transition: fill 150ms, stroke 150ms;
  }
</style>