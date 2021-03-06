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

  it('Both MessageList and Message are vue instances', () => {
    expect(cmp.isVueInstance()).toBe(true);
    expect(cmp.find(Message).isVueInstance()).toBe(true);
  });

  // Assert Structure in more details
  it('Message element exists', () => {
    expect(cmp.find('.message').exists()).toBe(true);
  });

  it('Message is not empty', () => {
    expect(cmp.find(Message).isEmpty()).toBe(false);
  });

  it('Message has a class attribute set to "message"', () => {
    expect(cmp.find(Message).element.getAttribute('class')).toEqual('message');
  });

  it('Message component has the .message class', () => {
    expect(cmp.find(Message).classes()).toContain('message');
  });

  it('Message component has style margin-top: 10', () => {
    expect(cmp.find(Message).hasStyle('margin-top', '10px')).toBe(true);
  });

  test('Message component has style margin-top: 10', () => {
    expect(cmp.find(Message).hasStyle('margin-top', '10px')).toBe(true);
  });

  it('Calls handleMessageClick when @message-click happens', () => {
    const stub = jest.fn();
    cmp.setMethods({handleMessageClick: stub});
    cmp.update();

    cmp.find(Message).vm.$emit('message-clicked', 'cat');
    expect(stub).toBeCalledWith('cat');
  });

  it('logs the message when @message-click happens', () => {
    const spy = jest.spyOn(console, 'log');

    cmp.find(Message).vm.$emit('message-clicked', 'cat');

    expect(spy).toBeCalledWith(expect.stringContaining('cat'));
    spy.mockReset(); // or mockRestore() to completely remove the mock
  });

});
