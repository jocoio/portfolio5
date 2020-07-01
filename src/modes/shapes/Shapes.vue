<template>
  <div class="shape" ref="shape" v-bind:class="{'flipped': flipped}" @click="animate">
    <component v-bind:is="'s_' + atom" :ref="num" :pri="prime" :sec="second" />
  </div>
</template>

<script>
import s_1 from './atoms/1_Vines';
import s_2 from './atoms/2_Halfmoon';
import s_3 from './atoms/3_Diamond';
import s_4 from './atoms/4_Trigrow';
import s_5 from './atoms/5_Pinwheel';
import s_6 from './atoms/6_Rectripple';
import s_7 from './atoms/7_Halfblack';
import s_8 from './atoms/8_Bullseye';
import s_9 from './atoms/9_ArrowMax';
import s_10 from './atoms/10_Dot';
import s_11 from './atoms/11_Star'
import s_12 from './atoms/12_TriStalks';
import s_13 from './atoms/13_QuarterCirc';
import s_14 from './atoms/14_TriFour';
import s_15 from './atoms/15_CircOutline';
import s_16 from './atoms/16_Grid';

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
    s_1, s_2, s_3, s_4, s_5, s_6, s_7, s_8,
    s_9, s_10, s_11, s_12, s_13, s_14, s_15, s_16
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