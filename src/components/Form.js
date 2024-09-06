import './FormStyles.css'
import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://formspree.io/f/xnnargpj', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => {
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send message');
      }
    });
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} required></input>

        <label>Email</label>
        <input type='email' name='email' value={formData.email} onChange={handleChange} required></input>

        <label>Subject</label>
        <input type='text' name='subject' value={formData.subject} onChange={handleChange} required></input>

        <label>Message</label>
        <textarea rows="6" name='message' value={formData.message} onChange={handleChange} placeholder='Type your message here' required></textarea>

        <button className='btn' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
