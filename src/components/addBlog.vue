<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <!-- <input type="text" v-model="title" required> -->
      <!-- <input type="text" v-model="blog.title" required> -->
      <input type="text" v-model.lazy="blog.title" required>
      <label>Blog Content:</label>
      <!-- <textarea v-model="content"></textarea> -->
      <!-- <textarea v-model="blog.content"></textarea> -->
      <textarea v-model.lazy="blog.content"></textarea>

      <div id="checkboxes">
        <label>Knight</label>
        <input type="checkbox" value="knight" v-model="blog.categories">
        <label>Wizard</label>
        <input type="checkbox" value="wizard" v-model="blog.categories">
        <label>Warrior</label>
        <input type="checkbox" value="warrior" v-model="blog.categories">
        <label>Thief</label>
        <input type="checkbox" value="thief" v-model="blog.categories">
      </div>

      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author">{{ author }}</option>
      </select>
      
      <button v-on:click.prevent="post">Add Blog</button>
    </form>

    <div v-if="submitted">
      <h3>Thanks for addingyour post</h3>
    </div>

    <div id="preview">
      <h3>Preview blog</h3>
      <!-- <p>Blog title: {{ title }}</p> -->
      <p>Blog title: {{ blog.title }}</p>
      <!-- <p>Blog content: {{ content }}</p> -->
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>

      <p>Blog Categories</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">{{ category }}</li>
      </ul>

      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // title: "",
      // content: ""
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["The Net Ninja", "The Angular Avenger", "The Vue Vindicator "],
      submitted: false
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("http://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userID: 1
        })
        .then(data => {
          console.log(data);
          this.submitted = true;
        });
    }
  }
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
