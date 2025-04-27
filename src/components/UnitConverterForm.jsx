import React, { useState } from 'react';
import axios from 'axios';

const UnitConverterForm = ({ onResult }) => {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const unitOptions = {
    length: ['meter', 'kilometer', 'centimeter', 'millimeter', 'mile', 'yard', 'foot', 'inch'],
    weight: ['kilogram', 'gram', 'milligram', 'pound', 'ounce'],
    temperature: ['celsius', 'fahrenheit', 'kelvin'],
    volume: ['liter', 'milliliter', 'cubic_meter', 'cubic_centimeter', 'gallon', 'quart', 'pint', 'cup', 'fluid_ounce', 'tablespoon', 'teaspoon'],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('https://utility-api-630965966466.us-central1.run.app/api/convert/unit', {
        category,
        fromUnit,
        toUnit,
        value: parseFloat(value),
      });
      onResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="length">Length</option>
          <option value="weight">Weight</option>
          <option value="temperature">Temperature</option>
          <option value="volume">Volume</option>
        </select>
      </div>

      <div>
        <label>From Unit:</label>
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="">Select a unit</option>
          {unitOptions[category].map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
      </div>

      <div>
        <label>To Unit:</label>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          <option value="">Select a unit</option>
          {unitOptions[category].map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Value:</label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="e.g., 1"
        />
      </div>

      <button type="submit">Convert</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default UnitConverterForm;