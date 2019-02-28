<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    }
  },
  data() {
    return {
      // title: "Vue Characters"
      // => props로 받기 때문에 쓸모없음
    };
  },
  methods: {
    changeTitle: function () {
      this.title = "Vue Wizards"
    }
  }
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
