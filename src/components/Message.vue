<template>
  <li
    class="message"
    style="margin-top:10px;"
    @click="handleClick">
    {{message}} -- {{ author }}
  </li>
</template>

<script>
  export default {
    name: 'Message',
    props: {
      message: {
        type: String,
        required: true,
        validator: message => message.length > 1
      },
      author: {
        type: String,
        default: 'Paco'
      }
    },
    methods: {
      handleClick() {
        this.$emit('message-clicked', this.message);
      }
    }
  }
</script>
