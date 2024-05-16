import logo from './logo.svg';
import './Calculator.css';
import Buttons from './Buttons';
import './App.css'

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <div className='grid'>
        <Buttons name="1"></Buttons>
        </div>
      </header>
    </div>
    
    </>
  );
}

export default App;
