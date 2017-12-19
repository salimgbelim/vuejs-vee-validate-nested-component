<template>
  <div class="simple-component">
    <email-component></email-component>
    <textbox-component></textbox-component>

    <div class=" parent-component">
      <span style="display:block"><strong>This is a Parent component</strong></span>

      <div class="column">
        <label class="label">Phone</label>
        <input name="phone" v-model="phone" v-validate="'required|numeric'"
               :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Phone">
        <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
      </div>
      <div class="column">
        <label class="label">Website</label>
        <input name="url" v-model="url" v-validate="'required|url'"
               :class="{'input': true, 'is-danger': errors.has('url') }" type="text" placeholder="Website">
        <span v-show="errors.has('url')" class="help is-danger">{{ errors.first('url') }}</span>
      </div>

      <div class="column">
        <p class="control">
          <button @click="validateBeforeSubmit" class="button is-primary">Submit</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import EmailComponent from './EmailComponent';
  import TextboxComponent from './TextBoxComponent';


  export default {
    name: 'SimpleComponent',
    data: () => ({
      email: '',
      name: '',
      phone: '',
      url: ''
    }),
    methods: {
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            return;
          }
        });
      }
    },
    components: {
      EmailComponent,
      TextboxComponent
    }
  };
</script>

<style>
  .simple-component {
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

  .column {
    padding: 20px;
  }

  .parent-component {
    border: 1px solid blue;
    margin-top: 10px;
  }
</style>
