import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Accueille from './Components/Accueille'
import SignIn from './Components/SignIn'
import Dashboard from './Components/Dashboard'
import RegistrationForm from './Components/constants/FormEtudiants'
import RegistForm from './Components/FormeMaitre'
import FormConsulter from './Components/FormConsulter'
import FormConsulterProf from './Components/FormConsulterProf'
import Evaluation from './Components/Evaluation'
import Cours from './Components/Cours'
import Bulletin from './Components/Bulletin'
import PaymentSystem from './Components/PaymentSystem'
import Nav from './Components/Nav'
import Signup from './Components/Signup'
import Eva from './Components/Eva'
import LCour from './Components/LCour'
import Consulter from './Components/Consulter'
import ConsulterEleve from './Components/ConsulterEleve'
import Bull from './Components/Bull'
import Menu from './Components/Menu'
import Test from './Components/test'
import User from './Components/User'

function App() {


  return (
    <>
      
       <div>
   
  <div className='flex '>


  
     
    <Routes >
     
     <Route exact path="/" element={<Accueille />} />
      <Route exact path="/Sign" element={<SignIn />} />
      <Route exact path="/Signup" element={<Signup />} />
      <Route exact path="/Releves" element={<RegistrationForm />} />
      <Route exact path="/enseignant" element={<RegistForm />} />
      <Route exact path="/Eleves" element={<ConsulterEleve />} />
      <Route exact path="/Prof" element={<Consulter />} />
      <Route exact path="/evaluation" element={<Eva />} />
      <Route exact path="/Cour" element={<LCour />} />
      <Route exact path="/Bulletin" element={<Bull />} />
      <Route exact path="/Encaissement" element={<PaymentSystem />} />
      <Route exact path="/Menu" element={<Menu/>} />
      <Route exact path="/test" element={<Test />} />
      <Route exact path="/User" element={<User />} />
      
      
    </Routes>
    </div>

       </div>
 
    </>
     
  )
}

export default App
