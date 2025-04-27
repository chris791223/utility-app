import React, { useState } from 'react';
import UnitConverterForm from './components/UnitConverterForm';
import ResultDisplay from './components/ResultDisplay';
import './App.css';

const App = () => {
  const [activeTool, setActiveTool] = useState('unitConverter');

  const renderTool = () => {
    switch (activeTool) {
      case 'unitConverter':
        return (
          <>
            <UnitConverterForm onResult={(result) => setResult(result)} />
            <ResultDisplay result={result} />
          </>
        );
      default:
        return <p className="under-construction">This tool is under construction.</p>;
    }
  };

  const [result, setResult] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Utility Tools</h1>
        <nav className="App-nav">
          <ul>
            <li className={activeTool === 'unitConverter' ? 'active' : ''}>
              <button onClick={() => setActiveTool('unitConverter')}>Unit Converter</button>
            </li>
            <li className={activeTool === 'currencyConverter' ? 'active' : ''}>
              <button onClick={() => setActiveTool('currencyConverter')}>Currency Converter</button>
            </li>
            <li className={activeTool === 'pdfConverter' ? 'active' : ''}>
              <button onClick={() => setActiveTool('pdfConverter')}>PDF Converter</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {renderTool()}
      </main>
    </div>
  );
};

export default App;
