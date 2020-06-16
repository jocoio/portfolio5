<template>
  <div class="block">
      <div v-if="first" class="logo"><Logo/></div>
      <Solids v-else-if="mode==='solids'" />
  </div>
</template>

<script>
import Solids from '../modes/Solids';
import Logo from '../assets/Logo';

export default {
  name: 'Grid',
  data: function () {
    return {
    }
  },
  props: {
    id: Number,
    mode: String,
    color: String
  },
  components: {
    Logo,
    Solids
  },
  computed: {
    first() {
      return this.id === 1;
    }
  },
  mounted: function () {
    console.log(this.id);
  }
}
</script>

<style>
  .block {
    /* text-align: center; */
    transition: border-color 500ms, background-color 250ms;
    /* border: 0.5px solid #000000; */
    box-sizing: border-box;
    overflow: hidden;
  }

  .mono {
    /* background-color: transparent !important; */
    /* border: 0.5px solid black !important; */
  }
  
  .block>div {
    width: 100%;
    height: 100%;
  }

  .block>.logo {
    display: flex;
    background-color: #000000;
  }

  .block>.logo>svg {
    margin: auto;
    width: 30%;
  }
</style>