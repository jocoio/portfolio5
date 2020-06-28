<template>
  <div class="nav" @click="toggleNav">
      <Logo v-if="activeIcon === 'logo'" ref="logo" :style="open_sty"/>
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
    open () {
      return this.navOpen & !this.naving
    },
    open_sty () {
      return {
        width: this.open ? '33%' : '100%'
      }
    }
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

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    opacity: 1;
  }

  .icon>svg {
    height: 30%;
  }
</style>