<template>
  <div class="column email-component-column">
    <span style="display:block"><strong>This is a Email component</strong></span>
    <label class="label">Email</label>
    <input name="email"  v-validate="'required|email'"
           :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
    <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
    <br/>
    <pre style="display:block;margin-top:30px;text-align:left">{{errors}}</pre>
  </div>
</template>

<script>
  export default {
    name: 'EmailComponent',
    inject: ['$validator'],
    data: () => ({
      email: ''
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

  .email-component-column {
    border: 1px solid red;
    padding: 20px;
  }
</style>
