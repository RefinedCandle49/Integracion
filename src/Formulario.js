import './App.css';
import React from "react";
import {Link} from "react-router-dom";
import './App2.css'
import './Revista.css'
import {Form, Field} from 'react-final-form';
function Formulario(){
    const handlePost = (e) =>{
        // console.log("Esta es la función principal de mi formulario")
        console.log(e.txtTitle);
        console.log(e.txtFor);
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: e.txtTitle,
                body: e.txtFor,
                userId: 1
            }),
            headers:{
                "Content-type": "application/json; charset= UTF-8"
            }
        })
            .then(res=> res.json())
            .then(data => {
                alert('Título: '+data.title+', Cuerpo: '+data.body+', ID: '+data.id);
                console.log(data)
            })
    }
    return(
        <>
            <div className="App">
                <header className="App-header">
                    <h1>Agregar</h1>
                    <Form
                        onSubmit={handlePost}
                        render={({handleSubmit})=>(
                            <form onSubmit={handleSubmit}>
                                <Field name="txtTitle" component="input" placeholder="Ingrese el título"></Field>
                                <br/>
                                <Field name="txtFor" component="input" placeholder="Ingrese el parametro"></Field>
                                <br/>
                                <input type="submit" class="go" value="Registrar"/>
                            </form>
                        )}
                    />
                    <Link class="go" to="/">Volver</Link>

                </header>

            </div>

        </>
    );
}


export default Formulario;