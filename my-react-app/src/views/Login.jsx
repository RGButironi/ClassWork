import React, { useState, useEffect } from 'react';
import { Login } from "../models/Users";
import { useHistory } from 'react-router-dom';
import { InitGoogle } from '../models/oAuthHelpers';
export default function LoginComponent(){

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    useEffect(()=>{
        InitGoogle();
    }, [])

    async function login(e){
        e.preventDefault();
        try {
            await Login(email, password);
            history.push('/game');
        } catch (ex) {
            setError(ex.message);
        }

    }
    function google_login(e){
            setError('You Logged in with Google')
            e.preventDefault();
                window.auth2.signIn()
                .then(googleUser =>{
                    console.log(googleUser);
                    
                    const profile = googleUser.getBasicProfile();
                    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
                    console.log('Full Name: ' + profile.getName());
                    console.log('Given Name: ' + profile.getGivenName());
                    console.log('Family Name: ' + profile.getFamilyName());
                    console.log("Image URL: " + profile.getImageUrl());
                    console.log("Email: " + profile.getEmail());
                } )
                .catch(error => console.error(error))

        }
    }

    return(
        <form className="container" onSubmit={login}>
      {error}
      <div className="field">
        <p className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email" value={email} onChange={e=> setEmail(e.target.value)}/>
            <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
            </span>
        </p>
        </div>
        <div className="field">
        <p className="control has-icons-left">
            <input className="input" type="password" placeholder="Password" value={password} onChange={e=> setPassword(e.target.value)}/>
            <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div className="field">
        <p className="control">
            <button className="button is-success">
            Login
            </button>
        </p>
        <button className="button is-primary" onClick={google_login} >
                Login with Google
            </button>
        </div>
  </form>
    )
