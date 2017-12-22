import {mount} from 'vue-test-utils';
import Message from '@/components/Message';

describe('Message.test.js', () => {

  let cmp;

  const createCmp = propsData => mount(Message, {propsData});

  describe('Properties', () => {

    it('has a message property', () => {
      cmp = createCmp({message: 'hey'});

      expect(cmp.props().message).toBe('hey');
    });

    it('has no cat property', () => {
      cmp = createCmp({cat: 'hey'});

      expect(cmp.props().cat).toBeDefined();
    });

    it('Paco is the default author', () => {
      cmp = createCmp({message: 'hey'});

      expect(cmp.vm.author).toBe('Paco');
    });

    /*
    it('message is of type string', () => {

      const spy = jest.spyOn(console, 'error')
      cmp = createCmp({ message: 1 })
      expect(spy).toBeCalledWith(expect.stringContaining('[Vue warn]: Invalid prop'))

      spy.mockReset() // or mockRestore() to completely remove the mock

    });
    */

    describe('Validation', () => {

      const message = createCmp().vm.$options.props.message;

      it('message is of type string', () => {
        expect(message.type).toBe(String);
      });

      it('message is required', () => {
        expect(message.required).toBeTruthy();
      });

      it('message has at least length 2', () => {
        expect(message.validator && message.validator('a')).toBeFalsy();
        expect(message.validator && message.validator('aa')).toBeTruthy();
      });

    });

  });

});
