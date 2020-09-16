import { Link } from '@material-ui/core'
import { auth, db } from './firebase'
import React, { useState } from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom'

function Login() {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const history = useHistory()

    const Login = (e) => {
        // Firebase login logic here
        e.preventDefault()
        auth.signInWithEmailAndPassword(Username, Password).then(auth => {
            console.log(auth);
            if (auth) {
                // console.log(db.collection("users").doc(auth.user.uid))
                history.push('/')
            }

        }).catch((error) => console.log(error))
    }

    const SignUp = (e) => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(Username, Password)
            .then(auth => {
                console.log(auth)
                if (auth) {
                    // db.collection("users").doc(auth.user.uid).set(
                    //     { user: auth.user }
                    // )
                    history.push('/')
                }
            })
            .catch((error) => console.log(error))
    }
    return (
        <div className="loginpage">

            <img src="https://logodix.com/logo/233733.gif" alt="" className="loginpage__image" />
            <div className="loginpage__container">
                <h1>Sign In</h1>
                <form>
                    <h5>UserName</h5>
                    <input type="text" className="loginpage__username" value={Username} onChange={e => setUsername(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" className="loginpage__password" value={Password} onChange={e => setPassword(e.target.value)} />

                </form>
                <button onClick={Login}>Log In</button>
                <p>First Time eh!?, Don't Worry, We got you Covered. Click Below Button and Get Started</p>
                <button onClick={SignUp}>Create Account</button>
            </div>


        </div>
    )
}

export default Login
