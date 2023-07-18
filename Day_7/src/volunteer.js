import React, { useState } from 'react';
import './volunteer.css';

function VolunteerPage() {
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

  return (
    <div className='container'>
      <h1>Volunteer for our user program</h1>
      <form onSubmit={handleFormSubmit}>
      <center><h4>You can subscribe to our user program and be a part of our community</h4></center>
      <center><h4>This gains you royalty benifits and you will be invited to our community gatherings -- and further more later</h4></center>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {volunteers.map((volunteer, index) => (
          <li key={index}>
            Name: {volunteer.name}, Email: {volunteer.email}, Phone: {volunteer.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VolunteerPage;