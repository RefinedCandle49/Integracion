import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import Users from "./Users";
import Formulario from "./Formulario";
import reportWebVitals from './reportWebVitals';
import FormularioEditar from "./FormularioEditar";

const router = createBrowserRouter([
    {
        path: '/App',
        element: <App/>,
    },
    {
        path: '/App2',
        element: <App2/>,
    },
    {
        path: '/',
        element: <Users/>
    },
    {
        path: '/Formulario',
        element: <Formulario/>
    },
    {
        path: '/FormularioEditar',
        element: <FormularioEditar/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/* <App2/>*/}
    {/*  <Users></Users>*/}
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
