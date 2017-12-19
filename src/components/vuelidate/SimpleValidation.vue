<template>
  <div class="simple-component">

    <div class="parent-component" v-bind:class="{error: form.isSubmitted && $v.form.value.$error}">

      <input type="text" v-model="form.value" v-on:keyup="resetSubmit">
      <span class="form-group__message" v-if="form.isSubmitted  && $v.form.value.$error">Field is required</span>
      <!--<span class="form-group__message" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</span>
-->
      <button @click="submitForm">Validate</button>

      <pre>{{$v.form.value}}</pre>
      <pre> {{ form.isSubmitted }}</pre>
    </div>
  </div>
</template>

<script>

  import {required} from 'vuelidate/lib/validators';

  export default {
    name: 'SimpleComponent',
    data() {
      return {
        form: {
          value: '',
          isSubmitted: false
        }
      }
    },
    methods: {
      submitForm() {
        this.form.isSubmitted = true;
        this.$v.form.$touch();

        if (this.$v.form.$error) {
          return;
        }
      },
      resetSubmit() {
        this.form.isSubmitted = false;
      }
    },
    validations: {
      form: {
        value: {
          required
        }
      }
    }
  };
</script>

<style>
  .simple-component {
    width: 50%;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
  }

  .error {
    border-color: red;
    background: #FDD;
  }

  .error:focus {
    outline-color: #F99;
  }

  .valid {
    border-color: #5A5;
    background: #EFE;
  }

  .valid:focus {
    outline-color: #8E8;
  }

  .parent-component {
    border: 1px solid blue;
    margin-top: 10px;
  }
</style>
