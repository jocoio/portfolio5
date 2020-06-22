<template>
  <div class="nav">
      <Logo v-if="activeIcon === 'logo'" ref="logo"/>
      <Soon v-else-if="activeIcon === 'soon'" ref="soon"/>
  </div>
</template>

<script>
  // import anime from 'animejs';
  import Logo from '../assets/Logo';
  import Soon from '../assets/Soon';

  export default {
  name: 'Nav',
  data: function () {
    return {
      activeIcon: 'logo',
      
    }
  },
  components: {
    Logo,
    Soon
  },
  watch: {
  },
  methods: {
    animate: function () {},
  },
  mounted () {
  }
}
</script>

<style scoped>
  .nav {
    width: 100%;
    height: 100%;
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