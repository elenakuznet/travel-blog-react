import React from 'react';
import './Section.css'; // Optional: Add styles specific to your section

const Section = ({ title, children }) => {
  return (
    <div className="section">
      {title && <h2 className="section-title">{title}</h2>}
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

export default Section;