<template>
  <div class="shape" ref="shape" v-bind:class="{'flipped': flipped}" @click="animate">
    <component v-bind:is="'_' + atom" :ref="num" :pri="prime" :sec="second" />
  </div>
</template>

<script>
import _1 from './atoms/1_Vines';
import _2 from './atoms/2_Halfmoon';
import _3 from './atoms/3_Diamond';
import _4 from './atoms/4_Trigrow';
import _5 from './atoms/5_Pinwheel';
import _6 from './atoms/6_Rectripple';
import _7 from './atoms/7_Halfblack';
import _8 from './atoms/8_Bullseye';
import _9 from './atoms/9_ArrowMax';
import _10 from './atoms/10_Dot';
import _11 from './atoms/11_Star'
import _12 from './atoms/12_TriStalks';
import _13 from './atoms/13_QuarterCirc';
import _14 from './atoms/14_TriFour';
import _15 from './atoms/15_CircOutline';
import _16 from './atoms/16_Grid';

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
    _1, _2, _3, _4, _5, _6, _7, _8,
    _9, _10, _11, _12, _13, _14, _15, _16
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
    this.setAtom(Math.ceil(Math.random() * 15));
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