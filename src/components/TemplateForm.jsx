// src/components/TemplateForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './TemplateForm.css';

const TemplateForm = () => {
  const [formData, setFormData] = useState({
    displayName: '',
    description: '',
    cacheKey: '',
    requestBody: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/templates', formData)
      .then((response) => {
        console.log('Template saved:', response.data);
      })
      .catch((error) => {
        console.error('There was an error saving the template!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="template-form">
      <div>
        <label>Display Name</label>
        <input
          type="text"
          name="displayName"
          value={formData.displayName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Cache Key</label>
        <input
          type="text"
          name="cacheKey"
          value={formData.cacheKey}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Request Body</label>
        <textarea
          name="requestBody"
          value={formData.requestBody}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Save Template</button>
    </form>
  );
};

export default TemplateForm;
