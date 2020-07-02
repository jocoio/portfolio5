<template>
  <div id="nav">
      <Logo v-if="activeIcon === 'logo'" ref="logo" :style="open_sty" @click.native="toggleNav"/>
      <div id="navContent" v-if="navOpen && !naving" :style="size_style">
        <Info  />
        <Modes />
      </div>
  </div>
</template>

<script>
  // import anime from 'animejs';
  import { mapState } from 'vuex';
  import Info from './Info';
  import Logo from '../assets/Logo';
  import Modes from './Modes';

  export default {
  name: 'Nav',
  data: function () {
    return {
      activeIcon: 'logo',
    }
  },
  components: {
    Info,
    Logo,
    Modes
  },
  computed: {
    ...mapState([
      'naving',
      'navOpen',
      'navWidth'
    ]),
    open () {
      return this.navOpen & !this.naving
    },
    open_sty () {
      return {
        width: '100%',
        height: '100%',
      }
    },
    size_style () {
      return {
        width: this.navWidth + 'px',
        height: '100vh',
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

  #navContent {
    position: absolute;
    margin-top: -50px;
    text-align: left;
    overflow: scroll;
    z-index: 1;
  }


  .icon {
    cursor: pointer;
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

  @media only screen and (max-width: 768px) {
    #navContent {
      margin-top: 0px;
    }
  }
</style>