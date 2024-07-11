import React from 'react';

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div>
            <h1>ID: {id}</h1>
            <h3>Title: {title}</h3>
        </div>
    );
};

export default Post;