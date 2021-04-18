import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../config/firebase.config";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

!firebase.apps.length && firebase.initializeApp(firebaseConfig)



const Login = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" }}
    const  provider = new firebase.auth.GoogleAuthProvider();
    const handleLogin = ()=> {
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
   
    const  user = result.user;
   const newUser = {email:user.email,name:user.displayName}
   setLoggedInUser(newUser)
   history.push(from)
    // ...
  }).catch((error) => {
    const  errorMessage = error.message;
    console.log(errorMessage);
  });
    }
    
    return (
        <div className='text-center'>
            <button className='btn-primary rounded-pill p-2 text-center' onClick={handleLogin}>Continue with Google</button>
        </div>
    );
};

export default Login;