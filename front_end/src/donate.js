import React, { useState } from 'react';
import './donate.css';
import { Link } from 'react-router-dom';

const PetDonationPage = () => {
  const [petName, setPetName] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petAge, setPetAge] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handlePetNameChange = (e) => {
    setPetName(e.target.value);
  };

  const handlePetBreedChange = (e) => {
    setPetBreed(e.target.value);
  };

  const handlePetAgeChange = (e) => {
    setPetAge(e.target.value);
  };

  const validateForm = () => {
    const errors = {};
    if (!petName) {
      errors.petName = 'Pet Name is required';
    }
    if (!petBreed) {
      errors.petBreed = 'Pet Breed is required';
    }
    if (!petAge) {
      errors.petAge = 'Pet Age is required';
    } else if (isNaN(petAge) || petAge <= 0) {
      errors.petAge = 'Pet Age must be a valid number greater than zero';
    }
    return errors;
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      // Here you can perform donation logic with the provided petName, petBreed, and petAge
      // For simplicity, let's just log the values to the console
      console.log('Pet Name:', petName);
      console.log('Pet Breed:', petBreed);
      console.log('Pet Age:', petAge);
    }
  };

  return (
    <div className="donation-container">
      <h2>Donate a Pet</h2>
      <form onSubmit={handleDonationSubmit}>
        <label htmlFor="petName">Pet Name:</label>
        <input
          type="text"
          id="petName"
          value={petName}
          onChange={handlePetNameChange}
          required
        />
        {formErrors.petName && <span className="error">{formErrors.petName}</span>}

        <label htmlFor="petBreed">Pet Breed:</label>
        <input
          type="text"
          id="petBreed"
          value={petBreed}
          onChange={handlePetBreedChange}
          required
        />
        {formErrors.petBreed && <span className="error">{formErrors.petBreed}</span>}

        <label htmlFor="petAge">Pet Age:</label>
        <input
          type="number"
          id="petAge"
          value={petAge}
          onChange={handlePetAgeChange}
          required
        />
        {formErrors.petAge && <span className="error">{formErrors.petAge}</span>}

        <nav>
          <Link to='/reach'>
            <center><button type="submit">Donate Pet</button></center>
          </Link>
        </nav>
      </form>
    </div>
  );
};

export default PetDonationPage;
