import axios  from "axios";
import { useState } from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const PostForm = () => {
    const [post, setPost] = useState({});

    const handleChanges = (changes) => {
        setPost(prevState => {return{...prevState, ...changes}})
    }

    const submitForm = async(e) => {
        try {
            e.preventDefault();
            const token = JSON.parse(sessionStorage.getItem('next_public_token'));
            const URL = process.env.NEXT_PUBLIC_URL;
            if(token){
                const headers = {'authorization': `bearer ${token}`}
                await axios.post(`${URL}/posts`, post , {headers: headers});
                console.log('blog post created');
            }
            else{
                alert('you aint got shit on me');
            }
            
        } catch (error) {
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
                        className="form-control" 
                        placeholder='title'
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
                        className="form-control" 
                        placeholder='author'
                        onChange={e=>handleChanges({author: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">banner image:</label>
                    <input type="file" className="form-control" placeholder='author'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">content</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data="write new post"
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