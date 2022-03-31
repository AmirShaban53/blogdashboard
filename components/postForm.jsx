const PostForm = () => {
    return (
        <>
            <form className='container my-5 fw-bolder'>

                <div className="mb-3">
                    <label htmlFor="" className="form-label">title:</label>
                    <input type="text" className="form-control" placeholder='title'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">description:</label>
                    <input type="text" className="form-control" placeholder='description'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">author:</label>
                    <input type="text" className="form-control" placeholder='author'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">content</label>
                    <textarea name="" id="" cols="30" rows="10" className='form-control'/>
                </div>
                <div className="my-4 text-end">
                    <button className='btn btn-reject mx-2 text-muted'>cancel</button>
                    <button className='btn btn-success mx-2'>submit</button>

                </div>
            </form>
        </>
    )
}

export default PostForm;