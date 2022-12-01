import React from 'react'
import {useSelector} from "react-redux"
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import './ProfilScreen.css'
function ProfilScreen() {
    const user = useSelector(selectUser)
  return (
    <div className='profilscreen'>
        <Nav />
        <div className='ps__body'>
       <h1>Edit profil</h1>
       <div className='ps__info'>
          <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png' alt=''/>
       </div>
       <div className='ps__details'>
        <h2>{user.email}</h2>
        <div className='ps__plans'>
            <h3>plans</h3>
            <p></p>


            <button onClick={() =>auth.signOut()} className='ps__signout'>Sign out</button>
        </div>
       </div>
        </div>
    </div>
  )
}

export default ProfilScreen