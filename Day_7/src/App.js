import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
// import LoginPage from './Login';
// import RegistrationPage from './Reg';
import './App.css';
// import HomePage from './Home';
import Pet from './pets';
import Nb from './appbar';
import AdoptionProcessPage from './adopt';
import PetDonationPage from './donate';
import VolunteerPage from './volunteer';

import { Route,  BrowserRouter, Routes, Link } from 'react-router-dom' 
import LoginPage from './Login';
import HomePage from './Home';
import RegistrationPage from './Reg';
import About from './about';
import Contact from './contact';
import Petone from './petone';
import Pettwo from './pettwo';
import Petthree from './petthree';
const App = () => {
  return (
    <div>
      
      {/* <LoginPage/> */}
      {/* <RegistrationPage /> */}     {/* <HomePage /> */}
      {/* <Pet /> */}

      
      <BrowserRouter>
        <Nb/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='login' element={<LoginPage/>} />
          <Route path='home' element={<HomePage/>} />
          <Route path='/reg' element={<RegistrationPage />} />
          <Route path='log' element={<LoginPage/>} />
          <Route path='pet' element={<Pet/>} />
          <Route path='adopt' element={<AdoptionProcessPage/>} />
          <Route path='don' element={<PetDonationPage/>} />
          <Route path='vol' element={<VolunteerPage/>} />
          <Route path='petss' element={<Pet/>} />
          <Route path='Hom' element={<HomePage/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='onep' element={<Petone/>} />
          <Route path='twop' element={<Pettwo/>} />
          <Route path='threep' element={<Petthree/>} />
          
          

        </Routes>
      </BrowserRouter>

      
     


    </div>
    
    );
  };
  
  export default App;
  
  
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;
