<template>
  <Dot :ref="num" :num="num"/>
</template>

<script>
// import anime from 'animejs';
import Dot from './atoms/Dot';

export default {
  name: 'Shapes',
  data: function () {
    return {
      introAnim: null
    }
  },
  computed: {
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
    }
  },
  watch: {
    changing: function () {
      this.introAnim.reverse();
      this.introAnim.play();
    }
  },
  created: function () {},
  mounted: function () {}
}
</script>

<style>
  .mono {
    opacity: 0;
  }
</style>