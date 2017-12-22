import Vue from 'vue';
import App from '@/App';

describe('App.test.js', () => {

  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(App);

    vm = new cmp({
      data: {
        messages: ['Cat']
      }
    }).$mount();

  });

  it('equals message to ["Cat"]', () => {
    expect(vm.messages).toEqual(['Cat']);
  });

  it('has the expected html structure', () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
