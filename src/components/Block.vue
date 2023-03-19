<template>
  <div :id="'block_' + id">
    <Nav v-if="first" :ref="id" />
    <div v-else-if="mode === 'intro'" />
    <div v-else-if="resizing"></div>
    <component v-else v-bind:is="mode" :num="id" :ref="id" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Nav from './Nav';
import about from '../modes/About';
import letter from '../modes/Letter';
import mono from '../modes/Mono';
import solids from '../modes/Solids';
import photos from '../modes/Photos';
import home from '../modes/Shapes';
import projects from '../modes/Projects';

export default {
  name: 'Block',
  data: function () {
    return {}
  },
  components: {
    Nav,
    about,
    letter,
    mono,
    photos,
    solids,
    home,
    projects,
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
.block > div {
  width: 100%;
  height: 100%;
}
</style>
