import React from 'react';
import Form from '../common/Form';
import Joi from 'joi-browser';
import { sendEmail } from '../../utils/sendEmail';

class ContactCommitteeMember extends Form {
    state = {
        data: {
          mail: "",
          message: ''
        },
        errors: {}
    } 

    schema = {
        mail : Joi.string().email().required().label('Your email'),
        message: Joi.string()
    }

    doSubmit = () =>{

        
        //call the server
        const {name, template_id, onShowMember, user_id, service_id} = this.props;
        const {mail, message} = this.state.data;
        sendEmail("Gadz'IT Contact", name, message, template_id, service_id, user_id);
        onShowMember();
    }

    render() {

        const {onShowMember} = this.props;
        
        return (
            <form onSubmit={this.handleSubmit} className='contact-member__form'>
                {this.renderInput('mail', '', 'text' ,'Your email')}
                {this.renderTextArea('message', 'Message')}
                <div className='contact-member__form__buttons'>
                    {this.renderButton('Send')}
                    <button type='buttom' onClick={onShowMember}>Back</button>
                </div>
            </form>
        );
    }
}
 
export default ContactCommitteeMember;