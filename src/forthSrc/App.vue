<template>
  <div>
    <!-- <form-one></form-one>
    <form-two></form-two> -->
    <keep-alive>
      <component v-bind:is="component"></component>
      <!-- <keep-alive> 진행 중 상황 유지 -->
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form two</button>
  </div>
</template>

<script>
import formOne from './components/formOne';
import formTwo from './components/formTwo';

export default {
  components: {
    'form-one': formOne,
    'form-two': formTwo
  },
  data() {
    return {
      component: 'form-one'
    };
  },
  methods: {

  }
};
</script>

<style>
</style>
