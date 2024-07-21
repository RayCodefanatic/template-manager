// src/components/Templates.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTemplates } from '../store/actions';
import Accordion from './Accordion';
import './Templates.css';

const Templates = () => {
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.templates);

  useEffect(() => {
    dispatch(fetchTemplates());
  }, [dispatch]);

  return (
    <div className="templates">
      {templates.map((template) => (
        <Accordion
          key={template.id}
          title={`${template.displayName} - ${template.description}`}
        >
          <p>Cache Key: {template.cacheKey}</p>
          <p>Request Body: {template.requestBody}</p>
        </Accordion>
      ))}
    </div>
  );
};

export default Templates;
