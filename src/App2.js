import './App2.css'
import './Revista.css'
import Revista from './Revista';
import imagen1 from './jugo1.jpg';
import imagen2 from './jugo2.jpg';
import imagen3 from './jugo3.jpg';
function App2() {
    
    return (
      <>
      <div className="App">
        <header className="App-header">
          <div className='grid'>
            <Revista image={imagen1} title="Console" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
            <Revista image={imagen2} title="Uix" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
            <Revista image={imagen3} title="Rfd" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
          </div>
        </header>
      </div>
      
      </>
    );
  }
  export default App2;