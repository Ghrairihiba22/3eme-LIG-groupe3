import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import{
  BrowserRouter ,
  Switch,
  Route,
} from "react-router-dom"
import LoginScreen from './screens/LoginScreen';
import {auth} from './firebase'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfilScreen from './screens/ProfilScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscibe = auth.onAuthStateChanged(userAuth                                                                                                                                                                                                                                                 => {
      if (userAuth) {
       dispatch(login({
        uid: userAuth.uid,
        email: userAuth.email
       }))
      }else{
      dispatch (logout())
      }
    })
   return unsubscibe 
  }, [dispatch])
  return (
    <div className="app">
      < BrowserRouter>
        {!user ? (
          <LoginScreen />
        ):(
          <Switch>
            <Route path='/profil'  component={ProfilScreen}>
             

            </Route>
          <Route path="/" exact component={HomeScreen}>
        
          </Route>
        </Switch>
        )}
        
      </ BrowserRouter>
    </div>
  );
}

export default App;
