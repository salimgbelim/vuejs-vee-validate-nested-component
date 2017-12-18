<template>
  <div id="app" class="container">
      <div class="columns is-multiline">
        <simple-component></simple-component>
      </div>
  </div>
</template>

<script>
  import SimpleComponent from './components/SimpleComponent.vue';

  export default {
    name: 'app',
    components: {
      SimpleComponent
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
