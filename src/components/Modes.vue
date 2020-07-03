<template>
  <div>
    <div id="cont" ref="modes">
      <div class="mode" v-bind:class="{'active' : this.next === 0}" @click="handleClick(0)"></div>
      <div class="mode" v-bind:class="{'active' : this.next === 1}" @click="handleClick(1)"></div>
      <div class="mode" v-bind:class="{'active' : this.next === 2}" @click="handleClick(2)"></div>
    </div>
  </div>
</template>

<script>
  import anime from 'animejs';
  import { mapState } from 'vuex';

  export default {
  name: 'Nav',
  data: function () {
    return {
      animIntro: null
    }
  },
  components: {},
  computed: {
    ...mapState([
      'mode',
      'next',
      'modes',
      'naving',
      'navOpen',
    ])
  },
  watch: {
    naving: function () {
      if (!this.naving && this.navOpen) {
        console.log('nav: should set nav block');
        
      }
      else if (this.naving && !this.navOpen) {
        console.log("nav: should be reset");
      }
    }
  },
  methods: {
    handleClick (mode) {
      this.$store.commit('setTransitioning', true);
      this.$store.commit('setNext', mode);
    },
    initIntro () {
      this.animIntro = anime({
        targets: this.$refs.modes.children,
        duration: 2000,
        easing: 'easeOutExpo',
        delay: anime.stagger(100),
        opacity: [0,'inherit']
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