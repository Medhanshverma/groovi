import React from 'react'
import styled from 'styled-components';
import logo from '../img/Groovi_logo.png';
import Button from '@mui/material/Button';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function Login() {

    const signIn = (e) => {
           e.preventDefault(); 
           firebase.auth()
           .signInWithPopup(new firebase.auth.GoogleAuthProvider())
           .catch((error) => alert(error.message));
        };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src={logo} alt="Groovi logo" />
        <h1>Sign in to Groovi</h1>
        <p>Groovi.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login;

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
    `;

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
        border-radius: 30px;
    }
    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #6b8a3d !important;
        color: white;
    }
`;
