import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';

import {
  required,
  email,

} from 'vee-validate/dist/rules'

// NOTE
// {_field_} => this refer to th filed name in form
// {_field_} => you can use it like that to put the filed name then pass it to provider
// this will allow you display the name for each form filed or use normal msg without it
extend('required', {
  ...required,
  message: 'The {_field_} is required'
})

extend('email', {
  ...email,
  message: 'The {_field_} must be a valid email'
})




Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
