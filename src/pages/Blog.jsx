import React from 'react';
import { useParams } from 'react-router';
import { getBlogs } from '../services/fakeBlogServices';
import './blog.scss';

function Blog(props) {
    const {id} = useParams();
    console.log(id)
    const blog = getBlogs().filter(blog => blog.id === id)[0]
    console.log(blog)
    const {title, subHeading, image, content, publishDate, writer} = blog;
    return (
        <div className='blog'>
            <h1>{title}</h1>
            <h3>{subHeading}</h3>
            <div className='blog__img'>
                <img src={require(`../assets/blogsImages/${image}`)} />
            </div>
            <div className='blog__content'>
                {content}
            </div>
            <span>By: {writer} on : {publishDate.toDateString()}</span>
        </div>
    );
}

export default Blog;