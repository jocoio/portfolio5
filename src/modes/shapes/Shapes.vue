<template>
  <div class="shapes" ref="shapes">
    <Dot :ref="num" :num="num"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import anime from 'animejs';

import Dot from './atoms/Dot';

export default {
  name: 'Shapes',
  data: function () {
    return {
      introAnim: null
    }
  },
  computed: {
    ...mapGetters({
      transitioning: 'transitioning'
    }),
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
  components: {
    Dot
  },
  methods: {
    animate: function () {
      this.$refs[this.num].animate();
    },
    intro: function () {
      this.introAnim = anime({
        duration: 500,
        targets: this.$refs.shapes,
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
        opacity: 1
      });
      this.introAnim.play();
    }
  },
  watch: {
    transitioning: function () {
      if (!this.transitioning) {
        this.introAnim.reset();
        this.introAnim.play();
      } 
    }
  },
  created: function () {},
  mounted: function () {
    this.intro();
  }
}
</script>

<style>
  .shapes {
    opacity: 0;
  }
</style>