<template>
  <div id="app" class="container">
    <!-- <div class="columns is-multiline">
       <simple-component></simple-component>
     </div>-->

    <MessageList :messages="messages"></MessageList>
  </div>
</template>

<script>
  /* import SimpleComponent from './components/SimpleComponent.vue';
   import SimpleValidation from './components/vuelidate/SimpleValidation';


   export default {
     name: 'app',
     components: {
       SimpleComponent
     }
   }*/

  import MessageList from './components/MessageList';

  export default {

    name: 'app',
    data: () => ({
      messages: ['Hey john', 'Howdy Paco']
    }),
    components: {
      MessageList
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
