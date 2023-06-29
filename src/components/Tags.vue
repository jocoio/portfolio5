<template>
  <div class="tags">
    <h6 v-for="(tag, idx) in tags" :key="idx">
      {{ tag }}
    </h6>
  </div>
</template>

<script>
export default {
  name: "Tags",
  data: function() {
    return {};
  },
  computed: {},
  props: {
    tags: Array,
  },
  components: {},
  methods: {},
  watch: {},
  created: function() {},
  mounted: function() {
    // this.intro();
  },
};
</script>

<style>
.tags {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
}
.tags > h6 {
  opacity: 0.75;
}
</style>
