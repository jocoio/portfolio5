<template>
  <div class="solid" :id="num" :ref="num">Coming Soon</div>
</template>

<script>
import { mapState } from 'vuex';
import anime from 'animejs';

export default {
  name: 'Work',
  data: function () {
    return {
      colors: ['#DD6E42', "#FFBF46", "#648381", "#8ACB88", "#01295F", "#463F3A", "#BC4B51", "#453750", "#E94F37", "#FCA311"],
      color: '#FFFFFF',
      // Has this solid animated already
      animated: false,
      animIntro: null,
      colorAnim: null
    }
  },
  computed: {
    ...mapState([
      'transitioning'
    ]),
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
        this.animIntro.reset();
        this.animIntro.play();
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
      this.animIntro = anime({
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
      return this.colors[Math.floor(Math.random() * this.colors.length)];
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

    this.animIntro.play();
  }
}
</script>

<style>
  .solid {
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>