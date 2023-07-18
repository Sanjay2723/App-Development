import React from 'react';
import './pets.css';
import { Link } from 'react-router-dom';

function Pet() {
  return (
    <div>
      <h2>Here are some pets we'd recommend for you</h2>
      <center><h3>check out our cuties...</h3></center>
      <center><div className="featured-pets">
        <div className="pet-card">
          <img src="cat1.jpg" alt="Cat" />
          <h3>Matt</h3>
          <p><center>Age: 3 years</center></p>
          <p><center>Breed: Abyssinian</center></p>
          <nav>
            <Link to='/onep'>
                <center><button>View purchase options</button></center>
            
            </Link>
          </nav>
          
          
        </div>

    
        <div className="pet-card">
          <img src="cat2.jpg" alt="Cat" />
          <h3>Browney</h3>
          <p><center>Age: 2 years</center></p>
          <p><center>Breed: Ragdoll</center></p>
          <nav>
          <Link to='/twop'>
          <center><button>View purchase options</button></center>
          
          </Link>
          </nav>

        </div>

        <div className="pet-card">
          <img src="dog1.jpg" alt="Cat" />
          <h3>Plumbo</h3>
          <p><center>Age: 1 years</center></p>
          <p><center>Breed: Husky</center></p>
          <nav>
          <Link to='/threep'>
          <center><button>View purchase options</button></center>
          
          </Link>
          </nav>

        </div>
        <div className="pet-card">
          <img src="dog2.jpg" alt="Dog" />
          <h3>Logan</h3>
          <p><center>Age: 2 years</center></p>
          <p><center>Breed: Beagle</center></p>
          <center><button>View purchase options</button></center>

        </div>
        <div className="pet-card">
          <img src="dog3.jpg" alt="Dog" />
          <h3>Rambo</h3>
          <p><center>Age: 3 years</center></p>
          <p><center>Breed: Rottweiler</center></p>
          <center><button>View purchase options</button></center>

        </div>
      </div>
      </center>
    <center>
<br></br>
      <button>View More...</button>
    </center>
    </div>
  );
}

export default Pet;