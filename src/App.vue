<template>
  <div id="app" class="container">
    <!-- <div class="columns is-multiline">
       <simple-component></simple-component>
     </div>-->

    <MessageListV1 :messages="messages"></MessageListV1>
    <Form v-bind:reversed="true"></Form>
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

  import MessageListV1 from './components/MessageListV1';
  import Form from './components/Form';

  export default {

    name: 'app',
    data: () => ({
      messages: ['Hey john', 'Oi john']
    }),
    components: {
      MessageListV1,
      Form
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
