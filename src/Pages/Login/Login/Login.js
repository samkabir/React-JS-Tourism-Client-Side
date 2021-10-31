import React from 'react';
import useAuth from '../../../hooks/useAuth';

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
            <h2>This is Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning my-3"> Google Sign In <i className="fab fa-google"></i> </button>
        </div>
    );
};

export default Login;