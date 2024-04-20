import React, { useRef, useState } from 'react'
import { validation } from '../utils/validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import { auth } from '../utils/firebase';

const LoginPage = () => {

    const [errorMessage,setErrorMessage] = useState('');
    const [signIn,setSignIn] = useState(true)
    const email = useRef(null)
    const password = useRef(null)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        // e.preventDefault()
        const emailError1 = validation(email.current.value,password.current.value)
        setErrorMessage(emailError1)

        console.log("Submit clicked", emailError1)

        if(!signIn) {
            console.log("!signIn block");
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                console.log("Signup block", {userCredential})
                // Signed up 
                const user = userCredential.user;
                // ...
                navigate("/browse")
            })
            .catch((error) => {
                console.log("Signup failed", error);
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        }
        else {
            console.log("SignIn block");
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                    console.log("Signin success", {userCredential});
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    navigate("/browse")
                })
                .catch((error) => {
                    console.log("Signin failed", error);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

        }
    }

    const handleLoginLogout = () => {
        setSignIn(!signIn)
           
    }

   

  return (
    <>
    <p className='text-2xl font-bold text-center mt-5'>{signIn ? "SignIn" : "SignUp"}</p>
    <div className='w-1/3 mx-auto shadow-xl rounded-xl bg-[#f0f0f0] p-3 mt-8'>
       {!signIn &&  <div className='flex flex-col gap-2 mb-3'>
            <label>Name:</label>
            <input type="text" placeholder='enter your name' className='px-4 py-2 rounded-lg outline-none' />
        </div>}
        <div className='flex flex-col gap-2 mb-3'>
            <label>email:</label>
            <input ref={email} type="email" placeholder='enter your email' className='px-4 py-2 rounded-lg outline-none' />
        </div>
        <div className='flex flex-col gap-2 mb-3'>
            <label>password:</label>
            <input ref={password} type="password" placeholder='enter your password' className='px-4 py-2 rounded-lg outline-none' />
        </div>
        {errorMessage && <span className='text-red-800 text-xs font-bold'>{errorMessage}</span>}
        <div>
            <button type='button' onClick={handleSubmit} className='px-4 py-2 rounded-lg outline-none bg-green-800'>submit</button>
        </div>
        <p className='mt-3 cursor-pointer underline' onClick={handleLoginLogout}>{signIn ? "new user signUp" : "already user signIn"}</p>
    </div>
    </>
  )
}

export default LoginPage