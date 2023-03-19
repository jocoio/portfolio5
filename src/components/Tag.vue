<template>
  <div class="tag">
    <h6>{{ label }}</h6>
  </div>
</template>

<script>
import anime from "animejs";
import { mapState } from "vuex";
import router from "../router";

export default {
  name: "Tag",
  data: function() {
    return {
      animIntro: null,
    };
  },
  props: {
    label: String,
  },
  components: {},
  computed: {
    ...mapState(["mode", "modes", "naving"]),
  },
  watch: {},
  methods: {
    // active(idx) {
    //   return this.modes[idx] === this.mode;
    // },
    handleClick(idx) {
      if (!this.active(idx)) {
        router.push({ name: this.modes[idx] });
      }
    },
    initIntro() {
      this.animIntro = anime({
        targets: this.$refs.modes,
        duration: 2000,
        easing: "easeOutExpo",
        delay: anime.stagger(100),
        opacity: [0, 1],
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
.tag {
  opacity: 0.9;
  display: flex;
  justify-content: center;
  width: min-content;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 0.75px solid;
  background-color: initial;
  border-radius: 5px;
  white-space: nowrap;
  padding: 4px 7px 4px 8px;
  letter-spacing: 0.7px;
}

.tag > h6 {
  font-size: 10px;
  font-weight: 400;
  padding: 0;
  margin: 0;
}
</style>
