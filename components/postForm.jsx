import axios  from "axios";
import { useState, useContext } from "react";
import { Context } from "../AppContext";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useRouter } from "next/router";

const PostForm = () => {
    const {alertMessage} = useContext(Context);
    const [post, setPost] = useState({});
    const router = useRouter();
    const handleChanges = (changes) => {
        setPost(prevState => {return{...prevState, ...changes}})
    }

    const submitForm = async(e) => {
        try {
            e.preventDefault();
            const token = JSON.parse(sessionStorage.getItem('next_public_token'));
            const URL = process.env.NEXT_PUBLIC_URL;
            if(token){
                const formData =  new FormData();
                formData.append('title', post.title);
                formData.append('image', post.image);
                formData.append('author', post.author);
                formData.append('content', post.content);
                formData.append('description', post.description);

                const headers = {
                    'authorization': `bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }

                await axios.post(`${URL}/posts`,formData , {headers: headers});
                router.push('/');
                alertMessage('new post created','alert-success')
            }
        } catch (error) {
            alertMessage('failed to create post','alert-danger')
            console.log(error);
        }
    }

    return (
        <>
            <form className='container my-5 fw-bolder' onSubmit={e=>submitForm(e)}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">title:</label>
                    <input 
                        type="text" 
                        placeholder='title'
                        className="form-control" 
                        onChange={e=>handleChanges({title: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">description: </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder='description'
                        onChange={e=>handleChanges({description: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">author:</label>
                    <input 
                        type="text" 
                        placeholder='author'
                        className="form-control" 
                        onChange={e=>handleChanges({author: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">banner image:</label>
                    <input 
                        type="file" 
                        placeholder='banner image for post'
                        className="form-control" 
                        onChange={e=>handleChanges({image: e.target.files[0]})}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">content</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data=""
                        onChange={(e, editor)=>{handleChanges({content: editor.getData()})}}
                    />
                </div>
                <div className="my-4 text-end">
                    <button className='btn btn-reject mx-2 text-muted'>cancel</button>
                    <button className='btn btn-success mx-2' type='submit'>submit</button>
                </div>
            </form>
        </>
    )
}

export default PostForm;