<template>
  <div :id="num" :ref="num">
    <img src="../assets/photos/0.jpg" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import anime from 'animejs';


export default {
  name: 'Photo',
  data: function () {
    return {
      color: '#b06262',
      animIntro: null
    }
  },
  computed: {
    ...mapState([
      'transitioning'
    ])
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
        opacity: [0, 1]
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
  img {
    width: 100%;
    height: 100%;
  }
</style>