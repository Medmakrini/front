import React from 'react';
import failed from '../../assets/svgs/data-pana.svg';
import { useNavigate } from 'react-router';
import './completed.css';
function Failed(props) {
    let navigate = useNavigate();
    return (
        <div className="completed">
                <img src={failed} />
                <div>An ERROR had accured, please try later</div>
                <a onClick={() => navigate('/')}>Home</a>
        </div>
    );
}

export default Failed;