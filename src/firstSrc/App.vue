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

<style scoped>
h1 {
  color: orange;
}
/*
하위 컴포넌트의 CSS 영향을 우선적으로 받게 되는데 
하위 컴포넌트의 영향을 받지 않기 위해서는 scoped를 넣어줘야 한다
*/
</style>
