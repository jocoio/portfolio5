<template>
  <div >
      <Logo v-if="first" @click.native="transition" :ref="id"/>
      <!-- <Info v-else-if="last" @click.native="transition"/> -->
      <div v-else-if="resizing"></div>
      <Mono v-else-if="mode==='mono'" :num="id" :ref="id" :changing="transitioning"/>
      <Solids v-else-if="mode==='solids'" :num="id" :ref="id" :changing="transitioning"/>
      <Shapes v-else-if="mode==='shapes'" :num="id" :ref="id" :changing="transitioning"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import anime from 'animejs';

import Mono from '../modes/Mono';
import Solids from '../modes/Solids';
import Shapes from '../modes/shapes/Shapes';
import Logo from '../assets/Logo';

export default {
  name: 'Block',
  components: {
    Mono,
    Solids,
    Shapes,
    Logo
  },
  props: {
    id: Number
  },
  data: function () {
    return {}
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
  watch: {},
  methods: {
    transition() {
      this.$store.commit('setTransitioning', true);
    },
    animate() {
      this.$refs[this.id].animate();
    }
  },
  mounted: function () {}
}
</script>

<style>
  
  .block>div {
    width: 100%;
    height: 100%;
  }
</style>