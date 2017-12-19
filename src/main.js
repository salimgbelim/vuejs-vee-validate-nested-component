'use strict';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false;
Vue.config.debug = true;

const dictionary = {
  en: {
    custom: {
      email: {
        required: 'Your email is empty' // messages can be strings as well.
      },
      name: {
        required: 'Please let us know your first name'
      }
    }
  }
};

VeeValidate.Validator.extend('valid_name', {
  getMessage: () => 'Please enter a non numeric valid name',
  validate: (value) => {
    const strongRegex = new RegExp('([a-zA-Z][a-zA-Z- \']*?[a-zA-Z])$|([a-zA-Z])$');
    return strongRegex.test(value);
  }
});

Vue.use(VeeValidate, {
  dictionary
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
