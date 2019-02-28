<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>
import { bus } from '../main';

export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      copyright: "Copyright 2019"
    };
  },
  created() {
    bus.$on('titleChanged', (data) => {
      this.title = data;
      // data => Header에서 emit해주는 'Vue Wizards'
      // Header를 클릭할 경우 Footer도 변한다.
    })
  }
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
