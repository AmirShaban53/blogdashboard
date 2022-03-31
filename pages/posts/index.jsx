import PostCard from "../../components/postCard";

const posts = () => {
    return <>
        <div>
            <div className="title display-4">
                POSTS.
            </div>
            <div>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>
        </div>
    
    </>
}
export default posts;