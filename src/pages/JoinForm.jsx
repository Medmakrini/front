import React from 'react';
import Form from '../components/common/Form';
import img1 from '../assets/svgs/Typing-bro.svg';
import _ from 'lodash';
import Joi, { errors } from "joi-browser";
import { useNavigate } from 'react-router';
import { getCells } from '../services/fakeCellsService';
import LoadingRing from '../components/common/LoadingRing';
import './joinForm.scss';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { REGISTRATION } from '../graphql/Mutation';



function withHook(Component) {
    return function WrappedComponent(props) {
      const navigate = useNavigate();
      const [register, { data, loading, error }] = useMutation(REGISTRATION);
      return <Component {...props} navigate={navigate} register={register}  />;
    }
}

 

class JoinFrom extends Form {
    state = { 
        data: { email: '', firstName:'', lastName:'', phone:'', year:'', cell:'', day:''},
        errors: {},
        years: _.range(1,6).map(i => `${i}ème année`),
        cells: getCells().map(cell => cell.name),
        days: ['Premier jour', 'Deuxième jour'],
        place: 'departement info cc14',
        hour: '19:00',
        loading: 0
    }
 
      




    schema = {
        email: Joi.string().required().email().label('E-mail'),
        firstName: Joi.string().max(20).required().label('First Name'),
        lastName: Joi.string().max(20).required().label('Last Name'),
        phone : Joi.string().max(10).min(10).required().label('Phone'),
        year: Joi.required().label('Year'),
        cell: Joi.required().label('Cell'),
        day: Joi.required().label('Day')

    };  

    
    doSubmit =  async() => {

        const password1=`${this.state.data.lastName}_${Math.floor(Math.random() * 500)}_${this.state.data.firstName}`
        const username=this.state.data.lastName.split(' ').join('_')+Math.floor(Math.random() * 500)
        const loading = 1;
        this.setState({loading});
        await this.props.register({ variables: { email:this.state.data.email , username:username,firstName:this.state.data.firstName ,lastName:this.state.data.lastName,phone:this.state.data.phone ,password1:password1,password2:password1,psw:password1 , cell:this.state.data.cell,day:this.state.data.day,year:this.state.data.year}})  
        .then(res=>{
            const responseStatus = (res.data.register.errors === null) ? "success":"failed";
            const condition = (res.data.register.errors && res.data.register.errors.email[0].message === 'A user with that email already exists.') ? true: false;
            if(responseStatus=="failed"){
                if(condition){
                    let errors = this.state.errors;
                    errors['email'] = 'E-mail is already used.';
                    const loading = 0;
                    this.setState({errors, loading});
                }
                else{
                    this.props.navigate('/completed/failed', {replase: true});
                }
            } else if(responseStatus=='success'){
            const {place, hour} = this.state;
            const {day} = this.state.data;
            this.props.navigate(`/completed/success/${day}/${place}/${hour}`, {replace: true});
            }
        })
              
    
    };

    
    render() {

        const {cells, days, loading} = this.state;
        const years = this.state.years;
        years[0] = "1er année";
        return (
            <>
                <div className="join-form">
                    <div className="join-form__heading">
                        <div className="join-form__heading__img">
                            <img src={img1} />
                        </div>
                        <div className="join-form__heading__text">
                            <span className="join-form__heading__text--title">Application Form</span>
                            <span className="join-form__heading__text--sub">Fill the form to get a recruting interview</span>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('email', 'E-mail', 'text', 'example@gmail.com')}
                        {this.renderInput('lastName', 'Last Name', 'text', 'Write your Last name')}
                        {this.renderInput('firstName', 'First Name', 'text', 'Write your First name')}
                        {this.renderInput('phone', 'Phone Number', 'text', '0661...')}
                        {this.renderSelect('year', 'Year', years, 'Year')}
                        {this.renderSelect('cell', 'Cell', cells, 'Cell you are intrested in')}
                        {this.renderSelect('day', 'Day', days, 'recruting Day')}
                        {(loading === 1)? <LoadingRing /> :  this.renderButton('save')}
                    </form>

                    
                </div>
            </>
        );
    }
}
 
export default withHook(JoinFrom);