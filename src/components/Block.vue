<template>
  <div :id="'block_' + id">
      <Nav v-if="first" :ref="id" />
      <div v-else-if="resizing"></div>
      <Mono v-else-if="mode==='mono'" :num="id" :ref="id" />
      <Solids v-else-if="mode==='solids'" :num="id" :ref="id" />
      <Shapes v-else-if="mode==='shapes'" :num="id" :ref="id" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Mono from '../modes/Mono';
import Nav from './Nav';
import Solids from '../modes/Solids';
import Shapes from '../modes/shapes/Shapes';

export default {
  name: 'Block',
  data: function () {
    return {
      width: '200%'
    }
  },
  components: {
    Mono,
    Nav,
    Solids,
    Shapes
  },
  props: {
    id: Number
  },
  computed: {
    ...mapState([
      'rows',
      'cols',
      'mode',
      'resizing',
      'transitioning',
    ]),
    first() {
      return this.id === 1;
    },
    last() {
      return this.id === this.cols;
    }
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