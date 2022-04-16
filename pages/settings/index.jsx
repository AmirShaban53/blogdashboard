import AuthorCard from "../../components/authorCard";
import classes from '../../styles/setting.module.css';
import Image from "next/image";
const settings = () => {
    return (
    <>
        <main>
            <div className="container">
                <div className={`row mb-5 pb-5 g-0`}>
                    <div className={`col-sm-4 text-dark`}>
                        <img className='img-fluid rounded-3' src="/user.jpg" alt="" />
                        <h4 className='d-block d-sm-none'>AMIR BUDDA</h4>
                    </div>
                    <div className={`col-sm-8 position-relative d-none d-sm-inline`}>
                        <div className={`w-100 h-100 ${classes.details} p-5 bg-dark text-light`}>
                            <h2>AMIR BUDDA</h2>
                            <h3>admin@gmail.com</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4>authors</h4>
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