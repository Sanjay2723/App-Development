import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom' 


const HomePage = () => {
  return (
    <div className="home-container">
      <header>
        <h2>Welcome to ADAP (Adopt A Pet) Foundation </h2>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-image">
           </div>
          <div className="hero-content">
            <center><h3>Here you can either volunteer to donate or can adopt a pet</h3></center>
            <p> </p>

            <nav>
                <Link to="/pet">
                    <center><button>View Available Pets</button></center>

                </Link>
            </nav>
          </div>
        </section>

        <section className="info-section">
          <div className="info-card">
            <h4>Proceeding with adoption</h4>
            <p>Learn how you can find a home for your pet.</p>
            <button>Learn More</button>
          </div>
          <div className="info-card">
            <h4>Volunteer Opportunities</h4>
            <p>View your options and the merits to your kind act.</p>
            <button>Voice it out</button>
          </div>
          <div className="info-card">
            <h4>Donate an animal</h4>
            <p>Help us find new homes for helpless pets </p>
            <button>Donate Now</button>
          </div>
        </section>

        
      </main>

      {/* <footer>
        <p>&copy; 2023 Pet Adoption Center. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default HomePage;
