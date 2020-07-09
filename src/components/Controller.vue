<template>
  <div>
    <div id="cont" ref="modes">
      <div class="mode" v-bind:class="{'active' : active(0)}" @click="handleClick(0)"></div>
      <div class="mode" v-bind:class="{'active' : active(1)}" @click="handleClick(1)"></div>
    </div>
  </div>
</template>

<script>
  import anime from 'animejs';
  import { mapState } from 'vuex';
  import router from '../router';

  export default {
  data: function () {
    return {
      animIntro: null
    }
  },
  components: {},
  computed: {
    ...mapState([
      'mode',
      'modes',
      'naving',
    ]),
  },
  watch: {},
  methods: {
    active (idx) {
      return this.modes[idx] === this.mode;
    },
    handleClick (idx) {
      if (!this.active(idx)) {
        router.push({ name: this.modes[idx] });
      }
    },
    initIntro () {
      this.animIntro = anime({
        targets: this.$refs.modes,
        duration: 2000,
        easing: 'easeOutExpo',
        delay: anime.stagger(100),
        opacity: [0, 1]
      })
    }
  },
  mounted () {
    this.initIntro();
    this.animIntro.play();
  }
}
</script>

<style scoped>

  .mode:not(.active) {
    cursor: pointer;
  }

  #cont > .mode {
    opacity: 0.5;
  }

  #cont > .mode.active {
    opacity: 1;
  }

  .mode {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 5px;
    background-color: #FFFFFF;
    transition: opacity 150ms translateY 5000ms;
  }
</style>