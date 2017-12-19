<template>
  <div class="column text-component-column">
    <span style="display:block"><strong>This is a TextBox component</strong></span>
    <label class="label">Name</label>
    <input name="name" v-model="name" v-validate="'required|non_numeric_field'" data-vv-validate-on="none"
           :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name">
    <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
  </div>
</template>

<script>
  export default {
    name: 'TextComponent',
    inject: ['$validator'],
    data: () => ({
      name: ''
    })
  };
</script>

<style>

  .label {
    float: left;
  }

  form {
    width: 50%;
  }

  .help {
    float: left;
  }

  .text-component-column {
    border: 1px solid red;
    padding: 20px;
  }
</style>
