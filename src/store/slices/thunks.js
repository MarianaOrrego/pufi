import axios from 'axios';
import { useState } from 'react';
import { formAPI } from '../../api/formAPI';
import { formSubmit } from './formSlice'

export default function postForm(){
    const [post, setPost] = useState(null);

    function createPost(){
        axios
            .post(formAPI,{
                title: 'hola',
                body: 'ahhhhhhhhhhh'
            })
            .then((resp) =>{
                setPost(resp.data)
            })
    }

    if (!post) return 'Nada'

    
}