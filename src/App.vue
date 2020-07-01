<template>
  <!-- <transition name="fade">
   <router-view></router-view>
  </transition> -->
  <Grid mode="shapes" />
</template>

<script>
import './styles/fonts.css';
import Grid from './components/Grid';

export default {
  name: 'App',
  components: {
    Grid
  }
}
</script>

<style>

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
