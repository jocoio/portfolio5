<template>
  <div class="shape" ref="shape" v-bind:class="{'flipped': flipped}" @click="animate">
    <Vines v-if="atom === 0" :ref="num" :pri="prime" :sec="second"/>
    <Halfmoon v-else-if="atom === 1" :ref="num" :pri="prime" :sec="second"/>
    <Diamond v-else-if="atom === 2" :ref="num" :pri="prime" :sec="second"/>
    <Trigrow v-else-if="atom === 3" :ref="num" :pri="prime" :sec="second"/>
    <Pinwheel v-else-if="atom === 4" :ref="num" :pri="prime" :sec="second"/>
    <Rectripple v-else-if="atom === 5" :ref="num" :pri="prime" :sec="second"/>
    <Halfblack v-else-if="atom === 6" :ref="num" :pri="prime" :sec="second"/>
    <Bullseye v-else-if="atom === 7" :ref="num" :pri="prime" :sec="second"/>
    <ArrowMax v-else-if="atom === 8" :ref="num" :pri="prime" :sec="second"/>
    <Dot v-else-if="atom === 9" :ref="num" :pri="prime" :sec="second"/>
    <QuarterCirc v-else-if="atom === 10" :ref="num" :pri="prime" :sec="second"/>
    <TriFour v-else-if="atom === 11" :ref="num" :pri="prime" :sec="second"/>
    <CircOutline v-else-if="atom === 12" :ref="num" :pri="prime" :sec="second"/>
    <Grid v-else-if="atom === 13" :ref="num" :pri="prime" :sec="second"/>
  </div>
</template>

<script>
import Vines from './atoms/1_Vines';
import Halfmoon from './atoms/2_Halfmoon';
import Diamond from './atoms/3_Diamond';
import Trigrow from './atoms/4_Trigrow';
import Pinwheel from './atoms/5_Pinwheel';
import Rectripple from './atoms/6_Rectripple';
import Halfblack from './atoms/7_Halfblack';
import Bullseye from './atoms/8_Bullseye';
import ArrowMax from './atoms/9_ArrowMax';
import Dot from './atoms/10_Dot';
import QuarterCirc from './atoms/13_QuarterCirc';
import TriFour from './atoms/14_TriFour';
import CircOutline from './atoms/15_CircOutline';
import Grid from './atoms/16_Grid';

export default {
  name: 'Shapes',
  data: function () {
    return {
      animIntro: null,
      atom: 0,
      prime: '#000000',
      second: '#FFFFFF',
      palettes: [
        ['#4066EC', '#FFFFFF']
      ],
      flipped: true
    }
  },
  computed: {},
  props: {
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
    Bullseye,
    ArrowMax,
    Dot,
    QuarterCirc,
    TriFour,
    CircOutline,
    Grid
  },
  methods: {
    animate: function () {
      this.$refs[this.num].playMain();
    },
    playIntro: function () {
      // this.animIntro = anime({
      //   duration: 500,
      //   targets: this.$refs.shape,
      //   easing: 'easeInOutQuad',
      //   loop: false,
      //   autoplay: false,
      //   opacity: 1
      // });
      setTimeout(() => {
        this.$refs[this.num].playIntro();
      }, Math.random() * 1000)
      setTimeout(() => {
        this.setColors(this.palettes[0]);
      }, 2500)
    },
    setAtom: function (num) {
      this.atom = num;
    },
    setColors: function (palette) {
      if (Math.round(Math.random()) === 1) {
        this.prime = palette[0];
        this.second = palette[1];
      }
      else {
        this.prime = palette[1];
        this.second = palette[0];
      }
      
      
    },
    setFlipped: function () {
      this.flipped = false;
    }
  },
  watch: {},
  created: function () {
    this.setAtom(Math.floor(Math.random() * 14));
    this.setFlipped(Math.round(Math.random()) === 1);
  },
  mounted: function () {
    this.playIntro();
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

  .shape > svg {
    height: 100%;
    height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
  }

  svg > * {
    transition: fill 500ms, stroke 500ms;
  }
</style>