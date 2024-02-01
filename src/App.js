
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import SignUP from './pages/signup';
import Home from './pages/home';

function App() {
  const [user, setUser] = useState();

  const getUser = async() => {
    try{
      const url = `/auth/login/success`;
      const {data} = await axios.get(url, {withCredentials:true});
      console.log(data,'user data')
      setUser(data.user);

    }catch(err){
        console.log(err)
    }
  }

  useEffect(()=>{
      getUser()
  },[])

function add (){
  console.log('add function')
}

  return (
    <div className="App">
      <div style={{marginTop:'-20px'}}>har har Mahadev</div>
        <Routes>
          <Route 
          path='/'
          element={user ? <Home user={user}/> : <Navigate to="/login" />}
          />
          <Route 
          path='/login'
          element={user ? <Navigate to="/" /> : <Login /> }
          />
          <Route 
          path='/signup'
          element={user ? <Navigate to="/" /> : <SignUP /> }
          />
         
        </Routes>
    </div>
  );
}

export default App;

