const PostCard = () => {
    return(
        <div className='card shadow-sm my-4'>
            <div className='position-relative'>
            <img className="card-img-top" src="1080.webp" alt="" />
            <div className="date bg-dark text-light position-absolute px-1 bottom-0 end-0">20/20/2222</div>
            </div>
            <div className="card-body">
                <p className="card-title fw-bolder fs-3">
                    BLOG POST TITLE
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem officiis ex reiciendis nam quisquam. Magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis error cupiditate, id atque explicabo a?</p>
                <div>
                <p className="btn btn-light">read more</p>
                <p className="btn btn-danger">delete</p>

                </div>
            </div>
        </div>
    )
}
export default PostCard;