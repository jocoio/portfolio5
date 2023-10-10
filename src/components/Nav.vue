<template>
  <div id="nav">
    <Joco @click.native="togNav" />
    <div id="navContent" ref="content" v-if="open" :style="width_sty">
      <Menu />
    </div>
    <ActionButton v-if="onProjectPage" />
  </div>
</template>

<script>
// Libraries
import anime from "animejs";

// Utils
import { mapState, mapGetters } from "vuex";

// Components
import ActionButton from "./ActionButton";
import Joco from "../assets/logos/Joco";
import Menu from "./Menu";

export default {
  name: "Nav",
  data: function () {
    return {
      animOutro: null,
      company: null,
    };
  },
  components: {
    ActionButton,
    Joco,
    Menu,
  },
  computed: {
    ...mapState([
      "mode",
      "naving",
      "navOpen",
      "navWidth",
      "currentSlug",
      "introd",
      "transitioning",
    ]),
    ...mapGetters(["blockWidth", "blockHeight"]),
    open() {
      return this.navOpen & !this.naving;
    },
    onProjectPage() {
      return this.$route.name === "projects/:slug";
    },
    width_sty() {
      return {
        width: this.navWidth + "px",
      };
    },
    control_sty() {
      return {
        width: this.blockWidth + "px",
        height: this.blockHeight + "px",
        top: "-" + this.blockHeight + "px",
      };
    },
    company_sty() {
      return {
        width: this.blockWidth * 2 + "px",
        height: this.blockHeight + "px",
        top: "-" + this.blockHeight + "px",
      };
    },
    content_sty() {
      return {
        marginTop: -this.blockHeight / 5 + "px",
        padding: "0 10%",
      };
    },
  },
  watch: {
    naving() {
      // We are naving but want to close
      if (this.naving && !this.navOpen) {
        this.playOutro();
      }
    },
    transitioning() {
      if (this.transitioning) {
        this.playOutro();
      } else if (this.mode === "letter") {
        setTimeout(() => {
          this.$store.dispatch("changeNav");
        }, 2300);
      }
    },
  },
  methods: {
    togNav() {
      if (this.introd && !this.naving) {
        this.$store.dispatch("changeNav");
      }
    },
    playOutro() {
      this.animOutro = anime({
        duration: 250,
        targets: this.$refs.content,
        easing: "easeInExpo",
        opacity: [1, 0],
      });

      this.animOutro.play();
    },
  },
  mounted() {},
};
</script>

<style scoped>
#navButtons {
  width: 100%;
  height: 100%;
}

#company {
  position: absolute;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: -10%;
}

#navContent {
  position: absolute;
  text-align: left;
  z-index: 1;
}

.icon {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 1;
}

.icon > svg {
  height: 30%;
}

@media only screen and (max-width: 768px) {
  #navContent {
    margin-top: 0px;
  }
}
</style>
