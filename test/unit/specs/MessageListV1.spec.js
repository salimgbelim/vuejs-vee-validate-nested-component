import {mount} from 'vue-test-utils';
import MessageListV1 from '@/components/MessageListV1';
import Message from '@/components/Message';

describe('MessageListV1.test.js', () => {

  let cmp;

  beforeEach(() => {

    cmp = mount(MessageListV1, {
      propsData: {
        messages: ['Cat']
      }
    });

  });

  it('has received ["Cat"] as the message property', () => {
    expect(cmp.vm.messages).toEqual(['Cat']);
  });

  it('is a MessageList component', () => {
    expect(cmp.is(MessageListV1)).toBe(true);

    // or with css selector
    expect(cmp.is('ul')).toBe(true);
  });

  it('contains a Message component', () => {
    expect(cmp.contains(Message)).toBe(true);

    // or with css selector
    expect(cmp.contains('.message')).toBe(true);
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot();
  });
});
