import React, { useState } from 'react';
import { sendLetter } from '../../../api/authApi/authApi';

export const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendLetter(formData);
      console.log('Response from server:', response);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Write your email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Write your feedback
        <input
          type="text"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Send feedback</button>
    </form>
  );
};
