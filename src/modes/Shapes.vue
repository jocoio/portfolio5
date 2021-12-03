<template>
  <div class="shape" ref="shape" v-bind:class="{'flipped': flipped}" @click="animate">
    <component v-bind:is="'s_' + atom" :ref="num" :pri="prime" :sec="second" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Shapes',
    data: function () {
      return {
        animIntro: null,
        atom: 1,
        prime: '#000000',
        second: '#FFFFFF',
        flipped: true,
        colorTimer: null,
        introTimer: null,
      }
    },
    computed: {
      ...mapState([
      'shapes',
      'numShapes',
      'colors',
    ]),
    },
    props: {
      num: Number
    },
    components: {
      s_1, s_2, s_3, s_4, s_5, s_6, s_7, s_8,
      s_9, s_10, s_11, s_12, s_13, s_14, s_15, s_16,
      s_17, s_18, s_19, s_20, s_21, s_22, s_23, s_24,
      s_25, s_26, s_27, s_28, s_29, s_30, s_31, s_32,
      s_33, s_34, s_35, s_36, s_37, s_38, s_39, s_40,
      s_41, s_42, s_43, s_44, s_45, s_46, s_47, s_48,
      s_49, s_50, s_51, s_52, s_53, s_54, s_55, s_56,
      s_57, s_58, s_59, s_60, s_61, s_62, s_63, s_64
    },
    watch: {},
    created: function () {
      // For testing individual blocks
      this.setAtom(64);
      // For random block selection
      this.setAtom(this.shapes[this.num % this.numShapes] + 1);
      this.setFlipped(Math.round(Math.random()) === 1);
    },
    mounted: function () {
      
      this.playIntro();

      this.colorTimer = setTimeout(() => {
        this.applyColors();
      }, 2500)
    },
    beforeDestroy () {
      clearTimeout(this.colorTimer);
      clearTimeout(this.introTimer);
    },
    methods: {
      animate: function () {
        this.$refs[this.num].playMain();
      },
      playIntro: function () {
        this.introTimer = setTimeout(() => {
          this.$refs[this.num].playIntro();
        }, Math.random() * 1000)
      },
      setAtom: function (num) {
        this.atom = num;
      },
      applyColors: function () {
        this.prime = this.colors[this.num - 2];
        this.second = '#F9F9F9';   
      },
      setFlipped: function () {
        this.flipped = false;
      }
    }
  }

  import s_1 from '../assets/shapes/1_Vines';
  import s_2 from '../assets/shapes/2_Halfmoon';
  import s_3 from '../assets/shapes/3_Diamond';
  import s_4 from '../assets/shapes/4_Trigrow';
  import s_5 from '../assets/shapes/5_Pinwheel';
  import s_6 from '../assets/shapes/6_Rectripple';
  import s_7 from '../assets/shapes/7_Halfblack';
  import s_8 from '../assets/shapes/8_Bullseye';
  import s_9 from '../assets/shapes/9_ArrowMax';
  import s_10 from '../assets/shapes/10_Dot';
  import s_11 from '../assets/shapes/11_Star'
  import s_12 from '../assets/shapes/12_TriStalks';
  import s_13 from '../assets/shapes/13_QuarterCirc';
  import s_14 from '../assets/shapes/14_TriFour';
  import s_15 from '../assets/shapes/15_CircOutline';
  import s_16 from '../assets/shapes/16_Grid';
  import s_17 from '../assets/shapes/17_CircFour';
  import s_18 from '../assets/shapes/18_TriMax';
  import s_19 from '../assets/shapes/19_Cross';
  import s_20 from '../assets/shapes/20_CircMirrored';
  import s_21 from '../assets/shapes/21_PlusGrid';
  import s_22 from '../assets/shapes/22_Track';
  import s_23 from '../assets/shapes/23_TriDown';
  import s_24 from '../assets/shapes/24_Zigzag';
  import s_25 from '../assets/shapes/25_Flock';
  import s_26 from '../assets/shapes/26_Chess';
  import s_27 from '../assets/shapes/27_HalfMoons'
  import s_28 from '../assets/shapes/28_Bolt';
  import s_29 from '../assets/shapes/29_Weave';
  import s_30 from '../assets/shapes/30_PlusMax';
  import s_31 from '../assets/shapes/31_TriMirrored';
  import s_32 from '../assets/shapes/32_Tri';
  import s_33 from '../assets/shapes/33_Eames';
  import s_34 from '../assets/shapes/34_Osmos';
  import s_35 from '../assets/shapes/35_Crosshairs';
  import s_36 from '../assets/shapes/36_Slices';
  import s_37 from '../assets/shapes/37_Fence';
  import s_38 from '../assets/shapes/38_Direction';
  import s_39 from '../assets/shapes/39_Houndstooth';
  import s_40 from '../assets/shapes/40_Tracksmith';
  import s_41 from '../assets/shapes/41_CircGrid';
  import s_42 from '../assets/shapes/42_Squiggles';
  import s_43 from '../assets/shapes/43_Stairs'
  import s_44 from '../assets/shapes/44_DiamondGrid';
  import s_45 from '../assets/shapes/45_Zebra';
  import s_46 from '../assets/shapes/46_HalfGrid';
  import s_47 from '../assets/shapes/47_Line';
  import s_48 from '../assets/shapes/48_TriGrid';
  import s_49 from '../assets/shapes/49_Horizontals';
  import s_50 from '../assets/shapes/50_Donut';
  import s_51 from '../assets/shapes/51_Arrow';
  import s_52 from '../assets/shapes/52_Frame';
  import s_53 from '../assets/shapes/53_Sash';
  import s_54 from '../assets/shapes/54_CircFourOut';
  import s_55 from '../assets/shapes/55_CrossFour';
  import s_56 from '../assets/shapes/56_CircMax';
  import s_57 from '../assets/shapes/57_PetalFour';
  import s_58 from '../assets/shapes/58_PetalMax';
  import s_59 from '../assets/shapes/59_PetalCirc'
  import s_60 from '../assets/shapes/60_Ripple';
  import s_61 from '../assets/shapes/61_PetalGrid';
  import s_62 from '../assets/shapes/62_PetalFour';
  import s_63 from '../assets/shapes/63_Macaroni';
  import s_64 from '../assets/shapes/64_Watch';
</script>

<style scoped>
  .shape.flipped {
    transform: rotate(180deg);
  }

  .shape > svg {
    display: block;
  }

  svg > * {
    transition: fill 500ms, stroke 500ms;
  }
</style>