import React, { useState } from 'react';
import './volunteer.css';
import { Link } from 'react-router-dom';

function VolunteerPage() {
  // const navigate=useNavigate();
  const [volunteers, setVolunteers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newVolunteer = { name, email, phone };

    setVolunteers([...volunteers, newVolunteer]);

    setName('');
    setEmail('');
    setPhone('');
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    // Use regex to keep only integers (numbers) and remove any non-digit characters
    const sanitizedInput = input.replace(/\D/g, '');
    setPhone(sanitizedInput);

    // navigate('/volun');
  };

  return (
    <div className='container'>
      <h1>Volunteer for our user program</h1>
      <form onSubmit={handleFormSubmit}>
        <h4>You can subscribe to our user program and be a part of our community</h4>
        <h4>This gains you royalty benefits and you will be invited to our community gatherings -- and furthermore, later</h4>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Phone:
          <input type="text" value={phone} onChange={handlePhoneChange} />
        </label>
        <nav>
        <Link to='/volun'>
        <button type="submit">Submit</button>
        </Link>
        </nav>
      </form>

    
    </div>
  );
}

export default VolunteerPage;
