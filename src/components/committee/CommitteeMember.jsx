import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './committeeMember.scss';
import ContactCommitteeMember from './ContactCommitteeMember';

function CommitteeMember({member}) {
    const [showMember, setShowMember] = useState(true);
    const [showContact, setShowContact] = useState(false);


    const {name, roles, image, template_id, user_id, service_id} = member;

    const source = require(`../../assets/membersImages/${image}`);

    const handelShowContat = () => {
        setShowMember(false);
        setShowContact(true);
    }

    const handelShowMember = () => {
        setShowMember(true);
        setShowContact(false);
    }

    return (
        <>
        {showMember &&
            <div className='member'>
            <img src={source} className='member__img'/>
            <div className='member__info'>
                <div>
                    <div className='member__info__name'>{name}</div>
                    <div className='member__info__role'>{roles[0]}</div>
                </div>
                <div className='member__info__message-icon' onClick={handelShowContat}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
            </div>
        </div> 
        }

        {showContact &&
            <div className='contact-member'>
                <div className='contact-member__heading'><span>Send for </span> {name} - {roles[0]}</div>
                <ContactCommitteeMember onShowMember={handelShowMember}  name={name} template_id={template_id} user_id={user_id} service_id={service_id}/>
            </div>
        }
        </>
    );
}

export default CommitteeMember;