<template>
  <div class="shape" ref="shape" v-bind:class="{'flipped': flipped}">
    <Vines v-if="atom === 0" :ref="num" :primary="prime" :secondary="second"/>
    <Dot v-else-if="atom === 1" :ref="num" :primary="prime" :secondary="second"/>
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
      atom: 0,
      prime: 'black',
      second: 'white',
      palletes: [
        ['#000000', '#FFFFFF'],
        ['#FFFFFF', '#000000']
      ],
      flipped: true
    }
  },
  computed: {
    ...mapGetters({
      transitioning: 'transitioning'
    })
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
        targets: this.$refs.shape,
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
        opacity: 1
      });
      this.introAnim.play();
    },
    setAtom: function (num) {
      this.atom = num;
    },
    setColors: function (pallete) {
      this.prime = pallete[0];
      this.second = pallete[1]
    },
    setFlipped: function (bool) {
      this.flipped = !bool;
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
    this.setAtom(Math.floor(Math.random() * 2));
    this.setColors(this.palletes[Math.floor(Math.random() * this.palletes.length)]);
    this.setFlipped(Math.round(Math.random()) === 1);
  },
  mounted: function () {
    this.intro();
  }
}
</script>

<style>
  .shape {
    opacity: 0;
  }
  .shape.flipped {
    transform: rotate(180deg);
  }
</style>