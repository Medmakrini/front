import React from 'react';
import './animatedText.css';

function AnimatedText({text}) {
    return (
        <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                {text}
            </text>
        </svg>  
    );
}

export default AnimatedText;