<template>
  <div >
      <Logo v-if="first" @click.native="transition"/>
      <!-- <Info v-else-if="last" @click.native="transition"/> -->
      <div v-else-if="resizing"></div>
      <Mono v-else-if="mode==='mono'" :num="id" :ref="id" :changing="transitioning"/>
      <Solids v-else-if="mode==='solids'" :num="id" :ref="id" :changing="transitioning"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import anime from 'animejs';

import Mono from '../modes/Mono';
import Solids from '../modes/Solids';
import Logo from '../assets/Logo';

export default {
  name: 'Grid',
  components: {
    Mono,
    Solids,
    Logo
  },
  props: {
    id: Number
  },
  data: function () {
    return {

    }
  },
  computed: {
    first() {
      return this.id === 1;
    },
    last() {
      return this.id === this.cols;
    },
    ...mapGetters({
      rows: 'rows',
      cols: 'cols',
      mode: 'mode',
      resizing: 'resizing',
      introing: 'introing',
      transitioning: 'transitioning'
    })
  },
  watch: {
  },
  methods: {
    transition() {
      this.$store.commit('setTransitioning', true);
      setTimeout(() =>{
      this.$store.dispatch('outroComplete');
      }, 500);
    },
    animate() {
      this.$refs[this.id].animate();
    }
  },
  mounted: function () {
  }
}
</script>

<style>
  
  .block>div {
    width: 100%;
    height: 100%;
  }
</style>