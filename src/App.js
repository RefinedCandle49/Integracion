import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './Calculator.css';
import Buttons from './Buttons';
import './App.css';
import App2 from "./App2";
import Revista from "./Revista";
import imagen1 from "./jugo1.jpg";
import imagen2 from "./jugo2.jpg";
import imagen3 from "./jugo3.jpg";
import './App2.css'
import './Revista.css'

function App() {
    return (
        <>

            <div className="App">
                <header className="App-header">
                    <button class="go">
                        <Link to="Formulario">Ir a formulario</Link>
                    </button>
                </header>
            </div>
        </>

    );
}

export default App;
