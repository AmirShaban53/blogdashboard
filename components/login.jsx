import styles from '../styles/auth.module.css';
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Context } from '../AppContext';

const URL = process.env.NEXT_PUBLIC_URL;
const LOCAL_TOKEN_KEY = "next_public_token";

const Login = () => {
    const [loginForm, setLoginForm] = useState({});
    const {alertMessage, getUserData} = useContext(Context);
    const router = useRouter();

    const handleChanges = (changes) => {
        setLoginForm(prevState=> {return{...prevState, ...changes}});
    }

    const submitLogin = async(e) => {
        try {
            e.preventDefault();
            const log = await axios.post(`${URL}/auth/login`, loginForm);
            if(log.data.token) {
                sessionStorage.setItem(LOCAL_TOKEN_KEY, JSON.stringify(log.data.token));
                alertMessage('you successfully logged in', 'alert-success');
                getUserData();
            }
            router.push('/');
        } catch (error) {
            console.log(error);
            alertMessage('failed to logged in', 'alert-danger');
        }
    }
    return(
        <div className="container ">
            <div className="row">
                <form 
                    className='p-3 col-sm-8 col-md-6 col-lg-4 mx-auto text-light' 
                    onSubmit={e=>submitLogin(e)}
                >
                    <div className="mb-3 ">
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
                        <button className={`btn btn-light w-100 rounded-0`} type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;