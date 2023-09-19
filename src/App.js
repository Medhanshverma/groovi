import React from 'react';
import Header from './components/Header';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';


function App() {
  return (
    <div className="App">

      <Router>
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