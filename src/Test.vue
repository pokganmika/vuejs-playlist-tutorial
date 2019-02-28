<template>
  <ul>
    <li v-for="character in characters" :key="character">{{ character }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      characters: ["Yoshi", "Mario", "Ryu"]
    };
  }
};
</script>

<style>
</style>
