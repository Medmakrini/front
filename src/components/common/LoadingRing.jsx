import React from 'react';
import './loadingRing.css';

function LoadingRing(props) {

    return (
        <div className="spinner">
			<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<circle cx="50" cy="50" r="10" />
			</svg>
		</div>
    );
}

export default LoadingRing;