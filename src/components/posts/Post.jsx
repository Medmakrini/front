import React from 'react';

function Post({heading, subHeading, source, text, writer, type}) {
    const image = require(`../../assets/blogsImages/${source}`);
    return (

        <div className={`activities__posts__post--${type}`}>
            <div className={`activities__posts__post--${type}__heading`}>{heading}</div>
            <div className={`activities__posts__post--${type}__sub-heading`}>{subHeading}</div>
            <img src={image} />
            <div className={`activities__posts__post--${type}__text`}>{text}</div>
            <div className={`activities__posts__post--${type}__writer`}>{writer}</div>  
        </div>

    );
}

export default Post;