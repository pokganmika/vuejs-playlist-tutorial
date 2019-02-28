<template>
  <div>
    <h1>List of Characters</h1>
    <ul>
      <li v-for="character in characters" :key="character">{{ character }}</li>
    </ul>
  </div>
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
h1 {
  color: green;
}
</style>
