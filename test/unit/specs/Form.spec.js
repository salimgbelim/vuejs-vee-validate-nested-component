jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({data: [3]}))
}))

import {shallow} from 'vue-test-utils';
import Form from '@/components/form';
import axios from 'axios';

describe('Form.spec.js', () => {

  let cmp;

  beforeEach(() => {
    cmp = shallow(Form);
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should return the string in normal order if reversed property is not true', () => {
    cmp.vm.inputValue = 'Yoo';

    expect(cmp.vm.reverseInput).toBe('Yoo');
  });

  it('should return the reversed string if reversed property is true', () => {
    cmp.vm.inputValue = 'Yoo';
    cmp.setProps({reversed: true});

    expect(cmp.vm.reverseInput).toBe('ooY');
  });

  it('calls axios.get', () => {
    cmp.vm.onSubmit('someValue');

    expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/posts?q=someValue');
  });

  it('Calls axios.get and checks promise result', async () => {

    const result = await cmp.vm.onSubmit('an');

    expect(result).toEqual({data: [3]});
    expect(cmp.vm.results).toEqual([3]);
    expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/posts?q=an');

  });
});
