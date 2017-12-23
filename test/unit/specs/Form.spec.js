import {shallow} from 'vue-test-utils';
import Form from '@/components/form';

describe('Form.spec.js', () => {

  let cmp;

  beforeEach(() => {
    cmp = shallow(Form);
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
});
