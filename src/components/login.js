import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import {auth, provider} from '../firebase';
import {actionTypes} from '../reducer';
import {useStateValue} from '../StateProvider'

const Login = ()=> {

    const [state, dispatch] = useStateValue(); 

    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
            console.log(result);
        }).catch((error) =>{
             alert('ther is an error') 
            });
    }
    return (
        <div>
        <div className="login-container">
        <div className="column">
            <img src="https://raw.githubusercontent.com/clumes/instagram-login/master/assets/images/phones.png" alt=""/>
        </div>
        <div className="column login-column ">
            <div className="login-form">
                <img src="https://raw.githubusercontent.com/clumes/instagram-login/master/assets/images/instagram-logo.png" alt=""/>
                    <form>
                    <input type="text" name="Phone no, username, or email" placeholder="Phone number, username, or email"/>
                    <input type="text" name="Password" placeholder="Password"/>
                    <input type="submit" value="Login"/>
                    </form>

                <div className="or-divider">
                    <div className="or-divider-line"></div>
                    <div className="or">OR</div>
                    <div className="or-divider-line"></div>
                </div>
                <div className="login-facebook">
                    <FacebookIcon color="primary"/>
                   <button onClick={signIn}><p>Login from Facebook</p></button>
                </div>
                <p className="forgot-password">Forgot password?</p>
            </div>
            <div className="login-form-mid">
                <p>Don't have an account? <span id="sign-up">Sign up</span></p>
            </div>
            <p id="get-app">Get the app.</p>
            <div className="badges">
            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt=""/>
            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt=""/>
            </div>
        </div>
    </div>
    </div>
    
    )
}

export default Login;
