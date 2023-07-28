import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom' 
import {useSelector}from 'react-redux';


const HomePage = () => {
  // const username=useSelector((state)=>state.user.username);
  const {user}=useSelector((state)=>state.master)
  return (
    <div className="home-container">
      <h1>Welcome {user}!</h1>

      <main>
        <section className="hero-section">
          <div className="hero-image">
           </div>
          <div className="hero-content">
            <center><h3>Here you can either volunteer to donate or can adopt a pet</h3></center>
            <p> </p>

            <nav>
                <Link to="/pet">
                    <center><button>Check out our options</button></center>

                </Link>
            </nav>
          </div>
        </section>

        <section className="info-section">
          <div className="info-card">
            <center><h4>Proceeding with adoption</h4></center>
            <center><p><center>Learn how you can adopt your pet.</center></p></center>
            <nav>
            <Link to='/adopt'>
            
                <center><button>Learn More</button></center>
            </Link>
            </nav>
            </div>
            
            <div className="info-card">
            <center><h4>Donate an animal</h4></center>
            <center><p><center>Help us find new homes for helpless pets</center> </p></center>
            <nav>
            <Link to='/don'>
            
                   <center><button>Donate</button></center>
                    
            </Link>
            </nav>
            
            </div>
          
        </section>

        
      </main>



      <center><footer style={{ backgroundColor: 'lightgrey', padding: '20px', textAlign: 'center',  left: '0', bottom: '0', width: '60%' }}>
      <p><center>© 2023 ADAP Foundations. All rights reserved.</center></p>
    </footer></center>




    </div>
  );
};

export default HomePage;
