import styles from '../styles/auth.module.css';

const Register = () => {
    return(
        <form className='p-3 w-25 text-light'>
            <div className="mb-3">
                <label  className="form-label">username:</label>
                <input 
                    type="text" 
                    className={`form-control ${styles.input} rounded-0`}
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">email:</label>
                <input 
                    type="text" 
                    className={`form-control ${styles.input} rounded-0`}
                />
            </div>
            
            <div className="mb-3">
                <label  className="form-label">password:</label>
                <input 
                    type="password" 
                    className={`form-control ${styles.input} rounded-0`}
                />
            </div>
            <div className="my-5">
                <button className={`btn btn-light w-100 rounded-0`}>Sign up</button>
            </div>
        </form>
    )
}
export default Register;