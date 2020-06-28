<template>
  <div class="nav" @click="toggleNav">
      <Logo v-if="activeIcon === 'logo'" ref="logo"/>
      <Info v-if="navOpen && !naving" />
  </div>
</template>

<script>
  // import anime from 'animejs';
  import { mapState } from 'vuex';
  import Info from './Info';
  import Logo from '../assets/Logo';

  export default {
  name: 'Nav',
  data: function () {
    return {
      activeIcon: 'logo',
      open: false,
    }
  },
  components: {
    Info,
    Logo
  },
  computed: {
    ...mapState([
      'naving',
      'navOpen'
    ]),
  },
  watch: {
  },
  methods: {
    toggleNav: function () {
      this.$store.dispatch('changeNav');
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .nav {
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .nav.open > .icon {
    background-color: red;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 1;
  }

  .icon>svg {
    height: 30%;
  }
</style>