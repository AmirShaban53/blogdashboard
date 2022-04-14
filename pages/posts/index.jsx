import PostCard from "../../components/postCard";
import axios from "axios";
import { useState, useEffect } from "react";

const URL = process.env.NEXT_PUBLIC_URL;

const posts = () => {
    const [posts, setPosts] = useState([]);

    const getPost = async() => {
        try {
            const posts = await axios.get(`${URL}/posts`);
            if(posts.data)setPosts(posts.data);
        } 
        catch (error) {console.log(error);}
    }
    useEffect(() => {
        getPost();
    }, [])
    return <>
        <div>
            <div className="title display-4">
                POSTS.
            </div>
            <div>
                {
                posts.map(post=>{
                    return <PostCard key={post.id} {...post} getPost={getPost}/>
                })
                }
            </div>
        </div>
    
    </>
}
export default posts;