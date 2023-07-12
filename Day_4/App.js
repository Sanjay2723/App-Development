import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
// import LoginPage from './Login';
// import RegistrationPage from './Reg';
import './App.css';
// import HomePage from './Home';
import Pet from './pets';

import { Route,  BrowserRouter, Routes } from 'react-router-dom' 
import LoginPage from './Login';
import HomePage from './Home';
import RegistrationPage from './Reg';
const App = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6">ADAP Foundation</Typography>
        </Toolbar>
      </AppBar>
      {/* <LoginPage/> */}
      {/* <RegistrationPage /> */}
      {/* <HomePage /> */}
      {/* <Pet /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='home' element={<HomePage/>} />
          <Route path='reg' element={<RegistrationPage/>} />
          <Route path='/pet' element={<Pet />} />
          <Route path='log' element={<LoginPage/>} />

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
