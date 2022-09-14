import $ from 'jquery';
import {toast} from 'react-toastify';


let data = {
  service_id: '',
  template_id: '',
  user_id: '',
  template_params: {
    'from_name': '',
    'to_name': '',
    'message': '',
    'email': '',
    'phone': ''
  }
};


export function sendEmail(from_name, to_name, message, template_id, service_id, user_id, email='', phone=''){
  data['template_params']['from_name'] = from_name; 
  data['template_params']['to_name'] = to_name ;
  data['template_params']['message'] = message;
  data['template_params']['email'] = email;
  data['template_params']['phone'] = phone;
  data['template_id'] = template_id; 
  data['service_id'] = service_id; 
  data['user_id'] = user_id; 
  $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
  type: 'POST',
  data: JSON.stringify(data),
  contentType: 'application/json'
}).done(function() {
  toast.success(`${to_name} has recieved your E-mail`);
}).fail(function(error) {
  toast.error('An error had accured!');
});
}