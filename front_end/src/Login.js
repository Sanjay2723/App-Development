// import React, { useState } from 'react';
// import "./Login.css";
// import { Link } from 'react-router-dom';


// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={handleEmailChange}
//           required
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={handlePasswordChange}
//           required
//         />
//         <nav>
//             <Link to="home">
//             <center>
//           <nav>
//             <Link to='/home'>
//                 <button type="submit">Login</button>
//             </Link>
//           </nav>
//             </center>
//             </Link>
//         </nav>
//         <br />
//       <center><a href='' style={{color:'black'}}>Forgot Password</a></center> <br/>

//       <nav>
//         <Link to="reg"> 
//         <nav>
//           <Link to='/reg'>
//               <center><a href='' style={{color:'black'}}>Sign Up</a></center>
//           </Link>
//         </nav>
        
//         </Link>
//       </nav>
//       </form>

//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUsername } from './actions';
import { addUser } from './masterslice';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(email));

    console.log('Email:', email);
    console.log('Password:', password);

    axios
      .post('http://localhost:8080/add', { email, password })
      .then((response) => {
        console.log('Login successful:', response.data);

         dispatch(setUsername(email));

         navigate('/home');
      })
      .catch((error) => {
        console.error('Login error:', error);
       });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <nav>
        <center>
        <button type="submit" onChange={handleSubmit}>Login</button>
        </center>
    
        </nav>

        <nav>
          <Link to="/reg" style={{ color: 'black' }}>
            <center>Sign Up</center>
          </Link>
        </nav>
      </form>
    </div>
  );
};

export default LoginPage;

