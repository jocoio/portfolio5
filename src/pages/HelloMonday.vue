<template>
  <router-link to="/">
    <Grid mode="solids" />
  </router-link>
</template>

<script>

import Grid from '../components/Grid';

export default {
  
  name: 'Hello',
  data: function () {
    return {}
  },
  components: {
    Grid
  },
  computed: {
  },
  watch: {},
  mounted() {},
  methods: {}
}
</script>
<style>
</style>