import React from 'react';
import Form from '../components/common/Form';
import { useNavigate } from 'react-router';
import './formationForm.scss';
import { getOffers } from '../services/fakeFormationService';
import Package from '../components/others/Package';
import source from '../assets/svgs/custom.svg';
import Joi from 'joi-browser';
import { useMutation } from '@apollo/client';
import { ADDFORM } from '../graphql/Mutation';
import LoadingRing from '../components/common/LoadingRing';

function withHook(Component) {
    return function WrappedComponent(props) {
      const navigate = useNavigate();
      const [AddFormation, { data, loading, error }] = useMutation(ADDFORM);
      return <Component {...props} navigate={navigate} AddFormation={AddFormation}/>;
    }
}

class FormationForm extends Form {
    state = { 
        data: { email: '', firstName: '', lastName: '', phone: ''},
        choices : {},
        errors: {},
        offers: [],
        discount: 17,
        loading: 0
    }
    componentDidMount(){
        const offers = getOffers();
        const choices = {}
        for(let offer of offers){
            choices[offer['name']] = false;
        }
        this.setState({choices, offers});
    }
    

    schema = {
        email: Joi.string().required().email().label('E-mail'),
        firstName: Joi.string().max(20).required().label('FIRST NAME'),
        lastName: Joi.string().max(20).required().label('LAST NAME'),
        phone : Joi.string().max(10).min(10).required().label('Phone')
    };  

    handelCheckboxChange = e => {
        const {choices} = this.state;
        choices[e.target.value] = e.target.checked;
        this.setState({choices});
    }

    doSubmit =  async() => {
        const {data, choices} = this.state;
        let s = ""
        for(let key of Object.keys(choices)){
            if (choices[key]){
                s += key + " ";
            } 
        }
        data['choices'] = s;
        const loading = 1;
        this.setState({loading});
        //call back end
        await this.props.AddFormation({ variables: { email:data.email ,firstName:data.firstName ,lastName:data.lastName,phone:data.phone ,choices:data.choices }})  
        .then(res=>{
            console.log(res);
            const responseStatus = ('errors' in Object.keys(data)) ? "failed":"success";
            if(responseStatus=="failed"){
                this.props.navigate('/completed/failed', {replase: true});

            } else if(responseStatus=='success'){
            this.props.navigate(`/formation-form/approved`, {replace: true});
            }
        })
        
    
    };

    render() {
        const {offers, choices, loading} = this.state;
        const discount = (Object.values(choices).filter(choice => choice === true).length > 1)? this.state.discount:0;
        return (
            <>
                <div className="formation-form">
                    <div className='formation-form__container'>
                        <img src={source} className='formation-form__container__img' />
                        <div className="formation-form__container__pack">
                            <div className='formation-form__container__pack__heading'>Customize Your Plan</div>
                            <div className="formation-form__container__pack__sub-heading">Take advantege from {this.state.discount}% OFF for (2+) courses plan</div>
                        </div>
                        
                    </div>
                    
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('email', 'E-mail', 'text', 'example@gmail.com')}
                        {this.renderInput('firstName', 'Last Name', 'text', 'Write your first name')}
                        {this.renderInput('lastName', 'First Name', 'text', 'Write your last name')}
                        {this.renderInput('phone', 'Phone Number', 'text', '0661...')}
                        <div className='formation-form__final'>
                            <div className='formation-form__final__checkbox'>
                                {offers.map(offer =><div key={offer.name}><label htmlFor={offer.name} >{offer.name}</label> <input name='choices' type='checkbox' value={offer.name} checked={choices[offer.name]} onChange={this.handelCheckboxChange} /></div>)}
                            </div>
                            <Package items={offers.filter(offer => choices[offer.name])} discount={discount}/>
                        </div>
                        {(loading == 1)? <LoadingRing /> :  this.renderButton('Submit', false, Object.values(choices).filter(choice => choice === true).length > 0 ? true : false )}
                    </form>
                    
                    
                </div>
            </>
        );
    }
}
 
export default withHook(FormationForm);