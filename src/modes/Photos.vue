<template>
  <div>
    <img :src="url" ref="photo" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import anime from "animejs";

export default {
  name: "Photo",
  data: function() {
    return {
      idx: 0,
      animIntro: null,
    };
  },
  computed: {
    ...mapState(["transitioning", "photos", "numPhotos"]),
    url() {
      var images = require.context("../assets/photos/", false, /\.jpg$/);
      return images(
        "./" + this.photos[(this.num - 2) % this.numPhotos] + ".jpg"
      );
    },
  },
  props: {
    num: Number,
  },
  components: {},
  methods: {
    animate: function() {},
    initIntro: function() {
      this.animIntro = anime({
        duration: 500,
        targets: this.$refs.photo,
        easing: "easeOutQuad",
        loop: false,
        autoplay: false,
        opacity: [0, 1],
      });
    },
  },
  watch: {
    transitioning: function() {
      if (!this.transitioning) {
        this.animIntro.reset();
        this.animIntro.play();
      }
    },
  },
  created: function() {
    this.idx = Math.floor(Math.random() * 20);
  },
  mounted: function() {
    this.initIntro();
    this.$refs.photo.onload = () => {
      setTimeout(() => {
        this.animIntro.play();
      }, Math.random() * 1000);
    };
  },
};
</script>

<style>
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
