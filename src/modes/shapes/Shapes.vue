<template>
  <div class="shapes" ref="shapes">
    <Vines v-if="atom === 0" :ref="num" primary="white" secondary="black" />
    <Dot v-else-if="atom === 1" :ref="num" primary="white" secondary="black" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import anime from 'animejs';

import Vines from './atoms/0_Vines';
import Dot from './atoms/Dot';

export default {
  name: 'Shapes',
  data: function () {
    return {
      introAnim: null,
      atom: 0
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
    Vines,
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
    },
    setAtom: function () {
      this.atom = Math.floor(Math.random() * 3);
      console.log(this.atom);
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
  created: function () {
    this.setAtom();
  },
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