import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';
import './postCard.scss';

function PostCard({image, title, subHeading, id}) {
    const source = require(`../../assets/blogsImages/${image}`);
    return (
        <Link className='post-card' to={`/blogs/${id}`}>
            <img src={source} />
            <div className='post-card__layer'>
                <AnimatedText text={title} />
            </div>
            <div className='post-card__sub-heading'>
                <span>{subHeading}</span>
            </div>
        </Link>
    );
}

export default PostCard;