<template>
  <div class="column text-component-column">
    <span style="display:block"><strong>This is a TextBox component</strong></span>
    <label class="label">Name</label>
    <input name="name" v-model="name" v-validate="'required|non_numeric_field'" data-vv-validate-on="none"
           :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name"
           @keypress="validateInput">
    <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
  </div>
</template>

<script>
  export default {
    name: 'TextComponent',
    inject: ['$validator'],
    data: () => ({
      name: ''
    }),
    methods: {
      isNumber(evt) {
        evt = (evt) ? evt : window.event;
        if ((
            (evt.which > 64 && evt.which < 91) ||
            (evt.which > 96 && evt.which < 123) ||
            evt.which == 8 ||
            evt.which == 32 ||
            (evt.which >= 48 && evt.which <= 57) ||
            evt.which == 190 ||
            evt.which == 188) && (evt.which < 48 || evt.which > 57)) {
          return true;
        }
        else {
          evt.preventDefault();
        }
      },
      validateInput(evt) {
        this.isNumber(evt);
      }
    }
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
