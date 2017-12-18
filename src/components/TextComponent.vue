<template>
  <div class="column text-component-column">
    <span style="display:block"><strong>This is a Text component</strong></span>
    <label class="label">Email</label>
    <input name="email"  v-validate="'required|email'"
           :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
    <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
    <br/>
    <div style="display:block;margin-top:30px">{{errors}}</div>
  </div>
</template>

<script>
  export default {
    name: 'TextComponent',
    inject: ['$validator'],
    data: () => ({
      email: ''
    })
  };
</script>

<style>
  .text-component {
    width: 50%;
  }

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
