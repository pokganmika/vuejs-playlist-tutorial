<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     title: "first Vue file"
  //   };
  // },
  data: function() {
    return {
      title: "first Vue file"
    };
  },
  methods: {
    greeting: function() {
      return "Hello World";
    }
  }
};
</script>

<style>
</style>
