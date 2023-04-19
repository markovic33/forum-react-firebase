import React, { useEffect, useState } from 'react'
import './post.css';
import { Post as IPost } from './Forum';

interface Props {
    post: IPost;
}



const Post = (props: Props) => {

    const { post } = props;
 

  return (
    <div className='post'>
        <div className='post-title'>
            <h1>{post.title}</h1>
        </div>
        <div className='post-body'>
            <p>{post.description}</p>
        </div>
        <div className='post-user'>
            <p>@{post.username}</p>
        </div>
    </div>
  )
}

export default Post

