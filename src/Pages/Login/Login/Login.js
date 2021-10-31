import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            console.log(result);
            history.push(redirect_url);
        } )
    }

    return (
        <div className="container-parent">
            <h2 className="title-orange">Please Login!</h2>
            <div className="google-Login">
                <button onClick={handleGoogleLogin} className="btn btn-warning my-3"> Google Sign In <i className="fab fa-google"></i> </button>
            </div>
        </div>
    );
};

export default Login;