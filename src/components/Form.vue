<template>
  <div>
    <br/> <br/> <br/>
    <h1>Some Form Elements</h1>
    <br/>
    <form action="" @submit.prevent="onSubmit(inputValue)">
      <input type="text" v-model="inputValue">
      <span class="reversed">{{ reverseInput }}</span>
      <button v-on:click="buttonClick">Click Me</button>
    </form>
  </div>
</template>

<script>

  import axios from 'axios';

  export default {
    props: ['reversed'],
    data: () => ({
      inputValue: '',
      results: []
    }),
    computed: {
      reverseInput() {
        return this.reversed ?
          this.inputValue.split("").reverse().join("") :
          this.inputValue;
      }
    },
    methods: {
      onSubmit(value) {

        const getPromise = axios.get('https://jsonplaceholder.typicode.com/posts?q=' + value);

        getPromise.then(results => {
          this.results = results.data;
        });

        return getPromise;
      },
      buttonClick(){
        const getPromise = axios.get('https://jsonplaceholder.typicode.com/posts?q=sa');

        getPromise.then(results => {
          console.log(results.data);
          this.results = results.data;
        });

        return getPromise;
      }
    }
  }
</script>
