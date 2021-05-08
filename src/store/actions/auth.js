import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess =()=>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const logout =()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
}

export const authFail =()=>{
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const checkAuthTimeout = expirationTime =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(logout());
        },expirationTime*1000);
    };
};

export const authLogin = (username,password)=>{
    return dispatch =>{
        dispatch(authStart());
        axios
            .post("http://localhost:8000/rest-auth/login/",{
                username: username,
                password: password
            })
            .then(res =>{
                const token = res.data.key;
                const expirationDate =new Date(new Date().getTime()+3600*1000);
                localStorage.setItem("token",token);
                localStorage.setItem("expirationDate",expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
            })
            .catch(err =>{
                dispatch(authFail(err));
            });
    };
};

export const authSignup = (username,email,password1,password2)=>{
    return dispatch =>{
        dispatch(authStart());
        axios
            .post("http://localhost:8000/rest-auth/registration/",{
                username: username,
                email: email,
                password1: password1,
                password2: password2
            })
            .then(res =>{
                const token = res.data.key;
                const expirationDate =new Date(new Date().getTime()+3600*1000);
                localStorage.setItem("token",token);
                localStorage.setItem("expirationDate",expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
            })
            .catch(err =>{
                dispatch(authFail(err));
            });
    };
};