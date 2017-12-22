<template>
  <ul>
    <Message :message="message"
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
    }
  }
</script>
