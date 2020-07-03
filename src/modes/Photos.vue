<template>
  <div :id="num" :ref="num">
    <img :src="url" />
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
      idx: 0,
      animIntro: null
    }
  },
  computed: {
    ...mapState([
      'transitioning'
    ]),
    url () {
      var images = require.context('../assets/photos/', false, /\.jpg$/)
      return images('./' + (this.num - 1) % 29 + ".jpg")
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
  created: function () {
    this.idx = Math.floor(Math.random() * 20);
  },
  mounted: function () {
    this.intro();
  }
}
</script>

<style>
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>