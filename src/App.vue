<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>
import './styles/fonts.css';

export default {
  name: 'App',
  components: {
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
