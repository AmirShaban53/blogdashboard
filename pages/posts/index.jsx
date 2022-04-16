import PostCard from "../../components/postCard";
import {Context} from "../../AppContext";
import {useEffect , useContext } from "react";

const posts = () => {
    const {posts, getPosts} = useContext(Context);
    
    useEffect(() => {
        getPosts();
    }, [])
    return <>
        <div>
            <h3 className="title display-4">POSTS.</h3>
            <div>
                {posts.map(post=>{
                    return <PostCard key={post.id} {...post}/>
                })
                }
            </div>
        </div>
    
    </>
}
export default posts;