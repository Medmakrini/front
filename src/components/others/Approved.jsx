import React from 'react';
import { useNavigate } from 'react-router';
import approved from '../../assets/svgs/approved.svg';
import './approved.css';

function Approved({message}) {
    const navigate = useNavigate();
    return (
        <div className='approved'>
            <img src={approved} />
            {message}
            <a onClick={() => navigate('/')}>Home</a>
        </div>
    );
}

export default Approved;