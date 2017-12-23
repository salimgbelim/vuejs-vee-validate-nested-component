jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({data: [1, 2, 3]}))
}))

import {shallow} from 'vue-test-utils';
import Form from '@/components/form';
import axios from 'axios';

describe('Another Form.spec.js', () => {

  let cmp;

  beforeEach(() => {
    cmp = shallow(Form);
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('calls axios.get', () => {
    cmp.vm.buttonClick();

    expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/posts?q=sa');
  });

  it('Calls axios.get and checks promise result', async () => {

    const result = await cmp.vm.buttonClick();

    expect(result).toEqual({data: [1, 2, 3]});
    expect(cmp.vm.results).toEqual([1, 2, 3]);
    expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/posts?q=sa');

  });
});
