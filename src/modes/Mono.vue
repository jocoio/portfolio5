<template>
  <div class="mono" :id="num" :ref="num" :style="color_style"/>
</template>

<script>
import { mapState } from 'vuex';
import anime from 'animejs';

export default {
  name: 'Mono',
  data: function () {
    return {
      color: '#b06262',
      animIntro: null
    }
  },
  computed: {
    ...mapState([
      'transitioning'
    ]),
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
      this.animIntro = anime({
        duration: 500,
        targets: this.$refs[this.num],
        easing: 'easeInOutQuad',
        loop: false,
        autoplay: false,
        opacity: 1
      });
      this.animIntro.play();
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