<template>
  <div id="characters">
    <ul>
      <li
        v-for="character in characters"
        :key="character"
        v-on:click="character.show = !character.show"
      >
        <h2>{{ character.name }}</h2>
        <h3 v-show="character.show">{{ character.speciality }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteCharacter">Delete Character</button>
  </div>
</template>

<script>
export default {
  // props: ['characters'],
  props: {
    characters: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    deleteCharacter: function () {
      this.characters.pop();
    }
  },
  // lifecycle hooks
  beforeCreate() {
    // alert('beforeCreate');
    console.log('beforeCreate');
  },
  created() {
    // alert('created');
    console.log('created');
  },
  beforeMount() {
    // alert('beforeMount');
    console.log('beforeMount');
  },
  mounted() {
    // alert('mounted');
    console.log('mounted');
  },
  beforeUpdate() {
    // alert('beforeUpdate');
    console.log('beforeUpdate');
  },
  updated() {
    // alert('updated');
    console.log('updated');
  }
};
</script>

<style scoped>
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
