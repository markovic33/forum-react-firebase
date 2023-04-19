import React, { useEffect, useState } from 'react'
import Form from './Form';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Post from './Post';
import './forum.css';

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

const Forum = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);

  const postsRef = collection(db, 'posts');

  const getPosts = async () => {
      const data = await getDocs(postsRef);
      setPostsList(data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      })) as Post[]);
  };
 
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='forum'>
      <div className='forum-left'>
        <Form />
      </div>
      <div className='forum-right'>
        {postsList?.map((post) =>
          <Post post={post} />
        )}
      </div>
    </div>
  )
}

export default Forum
