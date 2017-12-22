<template>
  <ul>
    <Message
      @message-clicked="handleMessageClick"
      :message="message"
      v-for="message in messages"
      v-bind:key="message">
    </Message>
  </ul>
</template>

<script>

  import Message from './Message';

  export default {
    name: 'list',
    props: ['messages'],
    components: {
      Message
    },
    methods: {
      handleMessageClick(message){
        console.log(message);
      }
    }
  }
</script>
