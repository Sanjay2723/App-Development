import React from 'react';
import './adopt.css';
import { Link } from 'react-router-dom';

function AdoptionProcessPage() {
  return (
    <div>
      <h1>How do I proceed?</h1>
      <center>
      <ul>
        <li>
          <strong>Be sure about the kind of dog you want - </strong> Before adopting a pup/dog make sure you make note of your lifestyle, living condition, space available and family members consent in mind.
        </li>
        <li>
          <strong>Explore the shelters and centres near you - 
          </strong> Visit the shelter/ adoption home a few times and bond with the animals there to get a feel of what it would be like to have a pet at home. Some animals in the home could be shy or apprehensive of your visit, make sure you make these pets feel loved and safe.
        </li>
        <li>
          <strong>Vaccinations and Medical history - </strong> As soon to be pet parents, it is of top priority that you secure all your pets past vaccination and medical records. It is of extreme importance for you to know the history of your soon to be pet so that you can take utmost care of him/her in the best possible way.
        </li>
        
        <li>
          <strong>Follow the guidelines of the adoption policy - </strong>
          The majority of animal shelters adhere to a set adoption process that includes submitting an adoption form and additional credentials. The adoption application may include questions regarding taking the dog to the veterinarian, providing for the dog at home, vacation plans, etc., as well as the worst-case scenario—if you end up having to give up the dog at some point in the future.
        </li>
       
       
        <li>
          <strong>Bringing home your new pet
              </strong> After completing these essential steps and identifying the verification, it is finally the day to bring home your new pup. Remember that adoption is not going to be easy for you or for your pet. Give them time to acclimatise and be sure of the fact that they are now in a safe environment. 
        </li>
      </ul>
      </center>
      <nav>
      <Link to='/petss'>
      
      <center><button>View - pets to purchase</button></center>
      </Link>
      </nav>
    </div>
  );
}

export default AdoptionProcessPage;