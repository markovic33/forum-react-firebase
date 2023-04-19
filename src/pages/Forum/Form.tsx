import React from 'react'
import './form.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { auth } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';



interface CreateFormData {
    title: string;
    description: string;
}

const Form = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title"),
        description: yup.string().required("You must add a descprition"),
    });

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    });

    const postsRef = collection(db, "posts");

    const onCreatePost = async (data: CreateFormData) => {
        await addDoc(postsRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid,
        });

        navigate('/forum')
    };

  return (
    <div className='form'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input className='form-input' placeholder='Title...' {...register('title')} />
            <p style={{color: 'red'}}>{errors.title?.message}</p>
            <textarea className='form-textarea' placeholder='Description...' {...register('description')} />
            <p style={{color: 'red'}}>{errors.description?.message}</p>
            <input type="submit" className='form-button' />

        </form>
    </div>
  )
}

export default Form