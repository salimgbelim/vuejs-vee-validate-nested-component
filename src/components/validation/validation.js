import VeeValidate from 'vee-validate';
import nonNumericField from './validators/nonNumericField';
import customMessages from './customMessages';

VeeValidate.Validator.extend('non_numeric_field', nonNumericField);
VeeValidate.Validator.localize(customMessages);

