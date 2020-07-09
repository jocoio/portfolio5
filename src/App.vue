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
      if (this.$route.name === "hellomonday") {
        return "letter";
      }
      else {
        return this.$route.name;
      }
    }
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

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
