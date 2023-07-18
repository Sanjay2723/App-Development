import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom' 


const HomePage = () => {
  return (
    <div className="home-container">
      

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
            <center><p><center>Learn how you can find a home for your pet.</center></p></center>
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
            <div className="info-card">
            <center><h4>Volunteer Opportunities</h4></center>
            <center><p><center>View your options and the merits to your kind act.</center></p></center>
            <nav>
            <Link to='/vol'>
            
                   <center><button>Voice it out</button></center>
                    
            </Link>
            </nav>
          </div>
        </section>

        
      </main>



      <footer style={{ backgroundColor: 'lightgrey', padding: '20px', textAlign: 'center',  left: '0', bottom: '0', width: '60%' }}>
      <p><center>© 2023 ADAP Foundations. All rights reserved.</center></p>
    </footer>




    </div>
  );
};

export default HomePage;
