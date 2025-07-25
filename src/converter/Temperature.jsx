import { useState } from "react";

function Temperature() {
  const [celsius, setCelsius] = useState("0.0");
  const [fahrenheit, setFahrenheit] = useState("32.0");
  const [activeInput, setActiveInput] = useState('celsius');

  const handleCelsiusChange = (e) => {
    // const value = parseFloat(e.target.value) || 0;
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit((celsius * 9) / 5 + 32);
    setActiveInput('celsius')
  };

  const handleFahrenheitChange = (e) => {
    // const value = parseFloat(e.target.value) || 0;
    const value = e.target.value
    setFahrenheit(value);
    setCelsius(((fahrenheit - 32) * 5) / 9);
    setActiveInput('fahrenheit');
  };

  const getFormulaText = () => {
    const celsiusNum = parseFloat(celsius) || 0;
    const fahrenheitNum = parseFloat(fahrenheit) || 0;
    
    if (activeInput === 'celsius') {
        return `(${celsiusNum.toFixed(4)}°C x 9/5) + 32 = ${fahrenheitNum.toFixed(4)}°F`
    } else {
        return `(${fahrenheitNum.toFixed(4)}°F - 32) x 5/9 = ${celsiusNum.toFixed(4)}°C`
    }
  }

  const handleSelectChange = (e) => {
    setActiveInput(e.target.value);
  };

  return <div>
    <div className="temperature-selector">
        <select onChange={handleSelectChange} value={activeInput}>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
        </select>
    </div>

    <div className="temperature-converter">
        <div className="celsius-converter">
            <input 
                type="text"
                value={celsius}
                onChange={handleCelsiusChange}
            />
            <label>°C</label>
        </div>
        <div className="fahrenheit">
            <input
                type="text"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
            />
            <label>°F</label>
        </div>
    </div>

    <div className="formula">
        <p>{getFormulaText()}</p>
    </div>

  </div>;
}

export default Temperature

// To whoever read this code, theres a one major problem because of the structure of computer and how computer work, I dont feel like explaining, but GLHF to whoever encounter the problem ;-)