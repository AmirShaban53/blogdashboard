import axios from "axios";
import { Context } from "../AppContext";
import { useContext } from "react";


const PostCard = ({id,title, description}) => {
    const {getPosts, alertMessage} = useContext(Context);
    const handleDelete = async() => {
        try {
            const URL = process.env.NEXT_PUBLIC_URL;
            const token = JSON.parse(sessionStorage.getItem('next_public_token'));
            const headers = {'authorization': `bearer ${token}`};
            await axios.delete(`${URL}/posts/${id}`, {headers: headers});
            alertMessage('post deleted', 'alert-danger');
            getPosts();
        } catch (error) {
            console.log(error);
            alertMessage('could not delete post', 'alert-info');
        }
    }
    return(
        <div className='card shadow-sm my-4'>
            <div className='position-relative'>
            <img className="card-img-top" src="1080.webp" alt="" />
            <div className="date bg-dark text-light position-absolute px-1 bottom-0 end-0">20/20/2222</div>
            </div>
            <div className="card-body">
                <p className="card-title fw-bolder fs-3">
                    {title}
                </p>
                <p>{description}</p>
                <div>
                <p className="btn btn-light">read more</p>
                <button
                    className="btn btn-danger"
                    onClick={()=>handleDelete()}
                >delete</button>

                </div>
            </div>
        </div>
    )
}
export default PostCard;