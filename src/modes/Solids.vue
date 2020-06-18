<template>
  <div class="solid" :id="num" :ref="num"/>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Solids',
  data: function () {
    return {
      colors: ['#dbacac', '#a2c9aa', '#909eb4', '#b06262', '#605e5e', '#2f86ff', '#ffa490'],
      color: '#FFFFFF',
      introAnim: null,
      colorAnim: null
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
    },
    initColor: function () {
      this.colorAnim = anime({
          duration: 500,
          targets: this.$refs[this.num],
          easing: 'easeInOutQuad',
          loop: false,
          autoplay: false,
          backgroundColor: this.color
      });
    },
    // Change color on a constant interval
    changeColor: function () {
      this.color = this.randomColor();
    },
    // Returns random color from colors list
    randomColor: function () {
      return this.colors[Math.floor(Math.random() * 7)];
    },
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
  created: function () {
    this.changeColor();
  },
  mounted: function () {
    
    this.$refs[this.num].style.backgroundColor = this.randomColor();
    
    this.initIntro();
    this.initColor();

    let rand = Math.round(Math.random() * (15000) + 2000);
    window.setTimeout(() => {
      this.changeColor();
      this.colorAnim.play();
    }, rand);

    this.introAnim.play();
  }
}
</script>

<style>
  .solid {
    opacity: 0;
  }
</style>