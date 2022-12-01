import React, { useState } from 'react'
import './LoginScreen.css' 
import SignupScreen from './SignupScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false) ;
  return (
    <div className='loginscreen'>
        <div className='ls_background'>
            <img className='ls_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=''/>
            
            <button onClick={() => setSignIn(true)} 
            className='ls_btn'>Sign in </button>

            <div className='loginscreen_gradient'/> 
        </div>

         <div className='loginscreen__body'>
                     {signIn ? (
                      <SignupScreen />
                     ):(
                <>
             <h1>Unlimited films, TV progammes and more</h1>
             <h2>Watch anywhere . Cancel at anytime.</h2>
             <h3>Readt to watch? Enter your email to create or restart your membership.</h3>

             <div className='loginscreen__input'>
                <form>
                    <input type='email' placeholder='Email address'/>
                    <button onClick={() => setSignIn(true)}
                     className='loginscreen__getstarted'> let's get started</button>
                </form>
             </div>
            </> 
            )}
             
         </div>
    </div>
  )
}

export default LoginScreen ;