<template>
  <div :style="container_sty" v-if="num === (mobile ? cols + 1 : 2)">
    <div :style="wrapper_sty">
      <slot />
    </div>
  </div>
</template>

<script>
// Utils
import anime from "animejs";
import { mapState } from "vuex";

export default {
  name: "ClassicPageWrapper",
  data: function () {
    return {
      animIntro: null,
    };
  },
  props: {
    num: Number,
  },
  components: {},
  computed: {
    ...mapState(["contentWidth", "transitioning", "mobile", "cols", "navOpen"]),
    container_sty() {
      return {
        position: "absolute",
        zIndex: 1,
        width: this.contentWidth * 0.9 + "px",
        padding: "0 " + this.contentWidth * 0.05 + "px",
        pointerEvents: this.navOpen ? "none" : "auto",
        paddingTop: this.mobile ? "0px" : "75px",
        overflowY: "scroll",
        display: "flex",
        justifyContent: "center",
      };
    },
    wrapper_sty() {
      return {
        maxWidth: "1200px",
        height: "min-content",
        marginBottom: "200px",
      };
    },
  },
  watch: {},
  methods: {
    initIntro() {
      this.animIntro = anime({
        targets: "#cont",
        duration: 1000,
        easing: "easeOutExpo",
        delay: anime.stagger(100),
        opacity: [0, 1],
        translateY: [15, 0],
      });
    },
  },
  mounted() {
    this.initIntro();
    this.animIntro.play();
  },
};
</script>

<style scoped>
/* #cont {
    display: flex;
    margin-left: -10%;
  }

  #cross {
    margin: auto 25px auto 0;
    height: 16px;
  }

  @media only screen and (max-width: 768px) {
    #cross {
      margin-right: 15px;
    }
  } */
</style>