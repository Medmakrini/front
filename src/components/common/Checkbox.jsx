import React from 'react';
import './checkbox.css';

function Checkbox({ name, label, error, ...rest }) {
    return (
        <div className="checkbox-box" >
            <input {...rest} name={name} id={name} className="input-field" />
            <label htmlFor={name}>{label}</label>
            {error && <div className="danger-alert">{error}</div>}
        </div>
    );
}

export default Checkbox;