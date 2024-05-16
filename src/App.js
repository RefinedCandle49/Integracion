import logo from './logo.svg';
import './Calculator.css';
import Buttons from './Buttons';
import './App.css'
import { useState } from "react";
function App() {
  const[value, setValue] = useState('')
  return (
    <>
    <div className="App">
      <header className="App-header">
        <div className='grid'>
        
        <Buttons></Buttons>
        </div>
      </header>
    </div>
    
    </>
  );
}

export default App;
