import React from 'react';
import { Link } from 'react-router-dom';
import './appbar.css';

function Nb() {
  return (
    <div>
    <nav>
    <div style={{display:'flex',justifyContent:'space-between',marginLeft:'5px',color:'lightgray'}}>
    <nav>
    <Link to='/Hom'>
    <a href=''>ADAP Foundation</a>
    </Link>
    </nav>
      <ul>
        <li>
          <Link to="login">Login</Link>
        </li>

        
        <li>
          <Link to="/about">About</Link>
        </li>
        

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      </div>
    </nav>
    </div>
  );
}

export default Nb;
