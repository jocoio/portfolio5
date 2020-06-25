<template>
  <div class="shape" ref="shape" v-bind:class="{'flipped': flipped}" @click="animate">
    <Vines v-if="atom === 0" :ref="num" :primary="prime" :secondary="second"/>
    <Halfmoon v-else-if="atom === 1" :ref="num" :primary="prime" :secondary="second"/>
    <Diamond v-else-if="atom === 2" :ref="num" :primary="prime" :secondary="second"/>
    <Trigrow v-else-if="atom === 3" :ref="num" :primary="prime" :secondary="second"/>
    <Pinwheel v-else-if="atom === 4" :ref="num" :primary="prime" :secondary="second"/>
    <Rectripple v-else-if="atom === 5" :ref="num" :primary="prime" :secondary="second"/>
    <Halfblack v-else-if="atom === 6" :ref="num" :primary="prime" :secondary="second"/>
    <Bullseye v-else-if="atom === 7" :ref="num" :pri="prime" :sec="second"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import anime from 'animejs';

import Vines from './atoms/1_Vines';
import Halfmoon from './atoms/2_Halfmoon';
import Diamond from './atoms/3_Diamond';
import Trigrow from './atoms/4_Trigrow';
import Pinwheel from './atoms/5_Pinwheel';
import Rectripple from './atoms/6_Rectripple';
import Halfblack from './atoms/7_Halfblack';
import Bullseye from './atoms/8_Bullseye';

export default {
  name: 'Shapes',
  data: function () {
    return {
      animIntro: null,
      atom: 0,
      prime: 'black',
      second: 'white',
      pallettes: [
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
    Halfmoon,
    Diamond,
    Trigrow,
    Pinwheel,
    Rectripple,
    Halfblack,
    Bullseye
  },
  methods: {
    animate: function () {
      this.$refs[this.num].playMain();
    },
    intro: function () {
      this.animIntro = anime({
        duration: 500,
        targets: this.$refs.shape,
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
        opacity: 1
      });
      setTimeout(() => {
        this.$refs[this.num].playIntro();
      }, Math.random() * 1000)
    },
    setAtom: function (num) {
      this.atom = num;
    },
    setColors: function (pallette) {
      this.prime = pallette[0];
      this.second = pallette[1]
    },
    setFlipped: function () {
      this.flipped = false;
    }
  },
  watch: {
    transitioning: function () {
      if (!this.transitioning) {
        this.animIntro.reset();
        this.animIntro.play();
      } 
    }
  },
  created: function () {
    this.setAtom(Math.floor(Math.random() * 8));
    this.setColors(this.pallettes[Math.floor(Math.random() * this.pallettes.length)]);
    this.setFlipped(Math.round(Math.random()) === 1);
  },
  mounted: function () {
    this.intro();
  }
}
</script>

<style>
  .shape {
    opacity: 1;
  }
  .shape.flipped {
    transform: rotate(180deg);
  }
</style>