import AuthorCard from "../../components/authorCard";
const settings = () => {
    return (
    <>
        <main>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-3">
                        <img className='img-fluid rounded-circle' src="/user.jpg" alt="" />
                    </div>
                    <div className="col-md-9 fs-2 d-flex align-items-center">
                        <p>Amir Budda <br />
                         admin@gmail.com</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h4>authors</h4>
                            <AuthorCard/>
                            <AuthorCard/>
                            <AuthorCard/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
    )
}
export default settings;