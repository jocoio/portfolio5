<template>
  <div class="solid" :style="color_style" :id="num"/>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Solids',
  data: function () {
    return {
      colors: ['#dbacac', '#a2c9aa', '#909eb4', '#b06262', '#605e5e', '#2f86ff', '#ffa490'],
      color: '#FFFFFF',
      introAnim: anime({
        duration: 500,
        targets: '.solid',
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
        opacity: 1,
        // backgroundColor: "#444444"
      }),
      colorAnim: anime({
        duration: 500,
        targets: '#' + this.id,
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
        backgroundColor: "#444444"
      }),
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
    paused: Boolean,
    num: Number
  },
  components: {
  },
  methods: {
    // Change color on a constant interval
    changeColor: function () {
      this.color = this.randomColor();
    },
    // Returns random color from colors list
    randomColor: function () {
      return this.colors[Math.floor(Math.random() * 7)];
    }
  },
  watch: {
    paused: function () {
      // this.paused ? this.colorAnim.play() : this.colorAnim.pause();
    }
  },
  created: function () {
    this.changeColor();
    this.introAnim.play();
    // let vm = this;

    let rand = Math.round(Math.random() * (15000) + 2000);
    window.setInterval(() => {
      // vm.colorAnim.play();
      this.changeColor();
    }, rand);

  }
}
</script>

<style>
  .solid {
    background-color: #000000;
    opacity: 0;
  }
</style>