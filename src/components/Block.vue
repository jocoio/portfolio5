<template>
  <div>
      <div v-if="first" class="logo" @click="transition"><Logo/></div>
      <div v-else-if="resizing"></div>
      <Mono v-else-if="mode==='mono'" :paused="paused" :num="id" :changing="transitioning"/>
      <Solids v-else-if="mode==='solids'" :paused="paused" :num="id" :changing="transitioning"/>
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
    Logo,
    Mono,
    Solids
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
    ...mapGetters({
      mode: 'mode',
      paused: 'paused',
      resizing: 'resizing',
      transitioning: 'transitioning'
    })
  },
  watch: {
    paused() {

    }
  },
  methods: {
    transition() {
      this.$store.commit('setTransitioning', true);
      setTimeout(() =>{
      this.$store.dispatch('outroComplete');
      }, 500);
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

  .block>.logo {
    display: flex;
    background-color: #000000;
  }

  .block>.logo>svg {
    margin: auto;
    width: 30%;
  }
</style>