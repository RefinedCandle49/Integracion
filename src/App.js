import logo from './logo.svg';
import './Calculator.css';
import Buttons from './Buttons';
import './App.css'
import { useState } from "react";
function App() {
  const[value, setValue] = useState('');

  const ButtonClick = (buttonValue) => {
    setValue(value + buttonValue);
  };

  const handleCalculate = () => {
    try {
      const result = eval(value);
      if (isNaN(result) || !isFinite(result)) {
        setValue('ERROR');
      } else {
        setValue(result);
      }
    } catch (error) {
      setValue('ERROR');
    }
  };

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Calculadora básica</h1>
      <input className='display' type='text' value={value}/>
        <div className='grid'>
            <Buttons name="1" onClick={ButtonClick}/>
            <Buttons name="2" onClick={ButtonClick}/>
            <Buttons name="3" onClick={ButtonClick}/>
            <input type='button' className='button' value="+" onClick={() => setValue(value + '+')}/>
            <Buttons name="4" onClick={ButtonClick}/>
            <Buttons name="5" onClick={ButtonClick}/>
            <Buttons name="6" onClick={ButtonClick}/>
            <input type='button' className='button' value="-" onClick={() => setValue(value + '-')}/>
            <Buttons name="7" onClick={ButtonClick}/>
            <Buttons name="8" onClick={ButtonClick}/>
            <Buttons name="9" onClick={ButtonClick}/>
            <input type='button' className='button' value="*" onClick={() => setValue(value + '*')}/>
            <Buttons name="0" onClick={ButtonClick}/>
            <Buttons name="." onClick={ButtonClick}/>
            <Buttons name="C" onClick={e => setValue('')}/>
            <input type='button' className='button' value="=" onClick={handleCalculate}/>
        </div>
      </header>
    </div>
    
    </>
  );
}

export default App;
