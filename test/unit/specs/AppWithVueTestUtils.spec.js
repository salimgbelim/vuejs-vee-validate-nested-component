import {shallow} from 'vue-test-utils';
import App from '@/App';

describe('App.test js with vue test utils and jest', () => {

  let cmp;

  beforeEach(() => {
    cmp = shallow(App, {
      data: {
        messages: ['Cat']
      }
    });
  });

  it('equals messages to ["Cat"]', () => {
    expect(cmp.vm.messages).toEqual(['Cat']);
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot();
  });

});
