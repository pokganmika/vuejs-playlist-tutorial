<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-article v-bind:characters="characters"></app-article>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./components/Article";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-article": Article
  },
  data() {
    return {
      characters: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false }
      ],
      title: "Vue Character"
    };
  },
  methods: {
    updateTitle: function (updatedTitle) {
      this.title = updatedTitle;
      // updatedTitle => 하위 컴포넌트에서 보내주는 값
    }
  }
};
</script>

<style>
</style>
