<template>
  <div>
    <br/> <br/> <br/>
    <h1>Some Form Elements</h1>
    <br/>
    <form action="">
      <input type="text" v-model="inputValue">
      <span class="reversed">{{ reverseInput }}</span>
    </form>
  </div>
</template>

<script>
  export default {
    props: ['reversed'],
    data: () => ({
      inputValue: '',
    }),
    computed: {
      reverseInput() {
        return this.reversed ?
          this.inputValue.split("").reverse().join("") :
          this.inputValue;
      }
    }
  }
</script>
