<template>
  <div id="nav">
    <Joco @click.native="togNav" />
    <div id="navContent" ref="content" v-if="open" :style="width_sty">
      <!-- Nav content -->
      <Menu id="menu" :style="control_sty" />
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import { mapState, mapGetters } from "vuex";
// import Featured from "./Featured";
import Joco from "../assets/logos/Joco";
import Menu from "./Menu";

export default {
  name: "Nav",
  data: function() {
    return {
      animOutro: null,
      company: null,
    };
  },
  components: {
    // Featured,
    Joco,
    Menu,
  },
  computed: {
    ...mapState([
      "mode",
      "naving",
      "navOpen",
      "navWidth",
      "introd",
      "transitioning",
      "naving",
    ]),
    ...mapGetters(["blockWidth", "blockHeight"]),
    open() {
      return this.navOpen & !this.naving;
    },
    width_sty() {
      return {
        width: this.navWidth + "px",
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
