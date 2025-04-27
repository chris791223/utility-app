import React from 'react';
import './ResultDisplay.css';

const ResultDisplay = ({ result }) => {
  if (!result) return null;

  return (
    <div className="result-container">
      <h3>Conversion Result</h3>
      <div className="result-box">
        <p>
          <span className="result-label">Converted Value:</span>
          <span className="result-value">{result.convertedValue}</span>
        </p>
        <p>
          <span className="result-label">Unit:</span>
          <span className="result-unit">{result.unit}</span>
        </p>
      </div>
    </div>
  );
};

export default ResultDisplay;