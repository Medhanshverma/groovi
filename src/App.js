import React from 'react';
import Header from './components/Header';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Login from './components/Login';
import logo from './img/Groovi_logo.png';
import Spinner from 'react-spinkit';


function App() {
  const [user, loading] = useAuthState(firebase.auth());
  if(loading){
    return(
      <AppLoading>
        <ApploadingContents>
          <img src={logo} alt="" />
          <Spinner
            name="ball-spin-fade-loader"
            color="green"
            fadeIn="none"
          />
        </ApploadingContents>
      </AppLoading>
    )
  }
  return (
    <div className="App">

      <Router>
        {!user ? (
          <Login/>
        ):(
          <>
            <Header/>
            <AppBody>
              <Sidebar/>
              <Routes>
                <Route exact path='/' element={<Chat />}>
                  
                </Route>
              </Routes>
              </AppBody>
          </>
        )}
      
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div` 
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;

`;

const ApploadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
    border-radius: 30px;
  }
  
`;