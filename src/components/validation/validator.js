import {Validator as VeeValidator} from 'vee-validate';
import nonNumeric from './rules/nonNumeric';
import customMessages from './messages/customMessages';

export default function Validator() {

  VeeValidator.extend('non_numeric_field', nonNumeric);
  VeeValidator.localize(customMessages);

}
