<template>
  <div class="solid" :id="num" :ref="num"/>
</template>

<script>
import { mapGetters } from 'vuex';
import anime from 'animejs';

export default {
  name: 'Solids',
  data: function () {
    return {
      colors: ['#dbacac', '#a2c9aa', '#909eb4', '#b06262', '#605e5e', '#2f86ff', '#ffa490'],
      color: '#FFFFFF',
      // Has this solid animated already
      animated: false,
      introAnim: null,
      colorAnim: null
    }
  },
  computed: {
    ...mapGetters({
      transitioning: 'transitioning'
    }),
    color_style () {
      return {
        backgroundColor: this.color
      }
    }
  },
  props: {
    num: Number
  },
  components: {
  },
  watch: {
    transitioning: function () {
      if (!this.transitioning) {
        this.introAnim.reset();
        this.introAnim.play();
      } 
    }
  },
  methods: {
    animate: function () {
      if (this.animated) {
        this.colorAnim.reverse();
      }
      this.colorAnim.play();
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
    initColor: function () {
      this.colorAnim = anime({
          duration: 500,
          targets: this.$refs[this.num],
          easing: 'easeInOutQuad',
          loop: false,
          autoplay: false,
          backgroundColor: this.color,
          complete: () => this.animated = true
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

  created: function () {
    this.changeColor();
  },
  mounted: function () {
    
    // Initial color
    this.$refs[this.num].style.backgroundColor = this.randomColor();
    
    this.initIntro();
    this.initColor();

    this.introAnim.play();
  }
}
</script>

<style>
  .solid {
    opacity: 0;
  }
</style>