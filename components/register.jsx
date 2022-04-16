import styles from '../styles/auth.module.css';
import axios from 'axios';
import { useState, useContext } from 'react';
import { Context } from '../AppContext';
import { useRouter } from 'next/router';

const URL = process.env.NEXT_PUBLIC_URL;
const Register = () => {
    const {alertMessage} = useContext(Context);
    const [registerForm, setRegisterForm] = useState({});
    const router = useRouter();

    const handleChanges = (state) => {
         setRegisterForm(prevState=> {return{...prevState, ...state}})
    }

    const submitRegisteration = async(e) => {
        try {
            e.preventDefault();
            await axios.post(`${URL}/auth/signup`, registerForm);
            alertMessage('your account was created, login', 'alert-info');
            router.push('/auth');
            
        } catch (error) {
            alertMessage('failed to create your account', 'alert-danger');
            console.log(error);
        }

    }
    return(
        <div className="container">
            <div className="row">
                <form 
                    className='p-3 col-sm-8 col-md-6 col-lg-4 mx-auto text-light'
                    onSubmit={e=> submitRegisteration(e)}
                >
                    <div className="mb-3">
                        <label  className="form-label">username:</label>
                        <input 
                            type="text" 
                            className={`form-control ${styles.input} rounded-0`}
                            onChange={e=> handleChanges({username: e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">email:</label>
                        <input 
                            type="text" 
                            className={`form-control ${styles.input} rounded-0`}
                            onChange={e=> handleChanges({email: e.target.value})}
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label  className="form-label">password:</label>
                        <input 
                            type="password" 
                            className={`form-control ${styles.input} rounded-0`}
                            onChange={e=> handleChanges({password: e.target.value})}
                        />
                    </div>
                    <div className="my-5">
                        <button className={`btn btn-light w-100 rounded-0`}>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register;