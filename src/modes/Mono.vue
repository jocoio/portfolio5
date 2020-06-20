<template>
  <div class="mono" :id="num" :ref="num" :style="color_style"/>
</template>

<script>
import { mapGetters } from 'vuex';
import anime from 'animejs';

export default {
  name: 'Mono',
  data: function () {
    return {
      color: '#b06262',
      introAnim: null
    }
  },
  computed: {
    ...mapGetters({
      transitioning: 'transitioning'
    }),
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
  methods: {
    animate: function () {},
    intro: function () {
      this.introAnim = anime({
        duration: 500,
        targets: this.$refs[this.num],
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
  .mono {
    opacity: 0;
  }
</style>