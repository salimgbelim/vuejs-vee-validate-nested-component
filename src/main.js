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
        required: 'Your name is empty'
      }
    }
  }
};

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
