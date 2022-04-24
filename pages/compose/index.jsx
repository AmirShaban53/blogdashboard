import PostForm from "../../components/postForm";
import Head from 'next/head';

const compose = () => {
    return <>
    <Head>
      <title>dashboard | compose</title>
    </Head>
        <div>
        <h2 className="display-4 ">CREATE POST.</h2>
        </div>
        <div>
            <PostForm/>
        </div>
    </>
}
export default compose;