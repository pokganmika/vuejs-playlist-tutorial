<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <characters></characters>
  </div>
</template>

<script>
import Test from "./Test";

export default {
  components: {
    characters: Test
  },
  // data() {
  //   return {
  //     title: "first Vue file"
  //   };
  // },
  data: function() {
    return {
      title: "Test App"
    };
  }
};
</script>

<style>
</style>
