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
      // this.title = "Vue Wizards"
      this.$emit('changeTitle', 'Vue Wizards');
      // this.$emit(...)을 쓰는 경우 => child to parent
      // 이벤트를 상위로 올려준다? 
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
