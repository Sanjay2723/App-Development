import React from 'react'
import { Link } from 'react-router-dom'
import './contact.css'
const Contact = () => {
  return (
    <div>
      <center><h2>Contact Options</h2></center>
      <br/>
      <center><div className='box'>
            <center><h3>Mail to us</h3></center>
            <p><center>adapfoundation@gmail.com</center></p>
      </div></center>
      <br/><br/><center>
      <div className='box'>
      <center><h3>Dial us at</h3></center>
            <p><center>+91 92734 98238</center></p>
      </div></center>
      <br/><br/>
      <center>
      <div className='box'>
      <center><h3>Request a call-back</h3></center>
      <center><button>Call Me!</button></center>
      </div></center>
      <p>     </p>
      <br/><br/><br/>

    </div>
  )
}

export default Contact
