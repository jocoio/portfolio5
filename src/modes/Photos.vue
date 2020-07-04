<template>
  <div id="container" :ref="num">
    <img :src="url" ref="photo"/>
    <!-- <div id="cover" ref="cover"/> -->
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
    animate: function () {
      console.log('animating ' + this.num);
    },
    initIntro: function () {
      this.animIntro = anime({
        duration: 500,
        targets: this.$refs.photo,
        easing: 'easeOutQuad',
        loop: false,
        autoplay: false,
        opacity: [0, 1],
      });
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
    this.initIntro();
    this.$refs.photo.onload = () => {   
      setTimeout(() => {
        this.animIntro.play();
      }, Math.random() * 1000)
    }
  }
}
</script>

<style>

  #container {
    display: grid;
    grid-template-columns: 1fr;
  }

  #cover {
    grid-row-start: 1;
    grid-column-start: 1;
    background-color: #000000;
    width: 100%;
    bottom: 0;
  }

  img {
    grid-row-start: 1;
    grid-column-start: 1;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>