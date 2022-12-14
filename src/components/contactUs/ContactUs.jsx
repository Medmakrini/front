import React from 'react';
import Form from '../common/Form';
import Joi from 'joi-browser';
import row from '../../assets/images/row.png';
import name from '../../assets/svgs/name.svg';
import email from '../../assets/svgs/email.svg';
import phone from '../../assets/svgs/phone.svg';
import './contactUs.scss';
import { sendEmail } from '../../utils/sendEmail';
import { getMembers } from '../../services/fakeMembresService';


class ContactUs extends Form {
    state = { 
        data: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        errors: {}
    } 

    schema = {
        name: Joi.string().min(3).required().label('Name'),
        email: Joi.string().email().required().label('Email'),
        phone: Joi.string().min(10).required().label('Phone'),
        message: Joi.string().required().label('Message')
    }

    doSubmit = () =>{
        const {name, email, phone, message} = this.state.data;
        const chefCelluleContact = getMembers().filter(m => m.roles.includes('Chef cellule contact & sponsoring'))[0]
        sendEmail(name, 'Our Contact team', message, chefCelluleContact.template_id, email, phone);
    }


    render() { 
        return (
            <div className='contact-us' id='contact-us'>
                <div className='contact-us__heading'>Contact us</div>
                <form className='contact-us__form' onSubmit={this.handleSubmit}>
                    <div className='contact-us__form__info'>
                        <div className='contact-us__form__info__name'>
                            <img src={name} />{this.renderInput('name', '','text', 'Your Full Name')}
                        </div>
                        <div className='contact-us__form__info__email'>
                            <img src={email} />{this.renderInput('email', '','text', 'Your email')}
                        </div>
                        <div className='contact-us__form__info__phone'>
                            <img src={phone} />{this.renderInput('phone', '','text', 'Your phone number')}
                        </div>
                    </div>
                    <div className='contact-us__form__content'>
                        <div className='conatact-us__form__content__message'>
                            {this.renderTextArea('message', '1', '30')}
                        </div>
                        {this.renderButton('Send', row)}
                    </div>
                </form>
            </div>
        );
    }
}
 
export default ContactUs;