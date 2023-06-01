<template>
  <div>
    <h1>{{ FEATURES[$route.params.slug].name }}</h1>
    <div @click="handleClose" :style="close_style">
      <Cross />
    </div>
  </div>
</template>

<script>
// Utils
import router from "../router";

// Data
import { FEATURES, ALL } from "../data/projects";
import { mapState } from "vuex";
import anime from "animejs";

// Components
import Cross from "../assets/icons/Cross";

export default {
  name: "IndividualProject",
  data: function() {
    return {
      FEATURES,
      ALL,
      animIntro: null,
    };
  },
  computed: {
    ...mapState(["transitioning"]),
    close_style() {
      return {
        backgroundColor: "#FEFEFE",
        color: "#000000",
        padding: "15px",
        borderRadius: "25px",
        position: "fixed",
        left: "50px",
        bottom: "50px",
        display: "flex",
        cursor: "pointer",
        width: "24px",
        height: "24px",
      };
    },
  },
  props: {
    num: Number,
  },
  components: {
    Cross,
  },
  methods: {
    intro: function() {
      this.animIntro = anime({
        duration: 500,
        targets: "h1",
        easing: "easeInOutQuad",
        loop: false,
        autoplay: false,
        opacity: 1,
      });
      this.animIntro.play();
    },
    handleClose() {
      router.push({
        path: `/projects`,
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
  created: function() {},
  mounted: function() {
    // this.intro();
  },
};
</script>

<style>
.mono {
  opacity: 0;
}
</style>
