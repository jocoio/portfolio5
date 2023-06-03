<template>
  <Grid :mode="mode"/>
</template>

<script>
import './styles/fonts.css';
import Grid from './components/Grid';
export default {
  name: 'App',
  components: {
    Grid
  },
  computed: {
    mode () {
      return this.$route.meta.mode;
    }
  },
  mounted () {
  }
}
</script>

<style>

  * { 
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
  }

  body {
    margin: 0;
    overflow: hidden;
  }
</style>
