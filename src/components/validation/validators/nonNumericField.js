export default {
  getMessage() {
    return 'Please enter a non numeric valid name';
  },
  validate(value) {
    const strongRegex = new RegExp('([a-zA-Z][a-zA-Z- \']*?[a-zA-Z])$|([a-zA-Z])$');
    return strongRegex.test(value);
  }
};
