<template>
  <a class="button" :href="link" target="_blank">
    <h6 :style="button_sty">{{ label }}</h6>
  </a>
</template>  

<script>
export default {
  name: "Button",
  data: function () {
    return {};
  },
  computed: {
    button_sty() {
      return {
        padding: "10px 15px",
        borderRadius: "30px",
        fontWeight: "600",
        color: "black",
        backgroundColor: "white",
        width: "max-content",
      };
    },
  },
  props: {
    link: String,
    label: String,
  },
  components: {},
  methods: {},
  watch: {},
  created: function () {},
  mounted: function () {
    // this.intro();
  },
};
</script>

<style>
</style>
