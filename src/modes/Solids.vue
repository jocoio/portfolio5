<template>
  <div class="solid" :style="color_style" />
</template>

<script>

export default {
  name: 'Solids',
  data: function () {
    return {
      colors: ['#dbacac', '#a2c9aa', '#909eb4', '#b06262', '#605e5e', '#2f86ff', '#ffa490'],
      color: '#000000'
    }
  },
  computed: {
    color_style () {
      return {
        backgroundColor: this.color
      }
    }
  },
  props: {
  },
  components: {
  },
  methods: {
    // Change color on a constant interval
    changeColor: function () {
      this.color = this.randomColor();
    },
    // Returns random color from colors list
    randomColor: function () {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    }
  },
  created: function () {
    let vm = this;
    let rand = Math.round(Math.random() * (15000) + 2000);
    window.setInterval(() => {
      vm.changeColor();
    }, rand);
  }
}
</script>

<style>
  .solid {
    transition: background-color 500ms;
  }
</style>