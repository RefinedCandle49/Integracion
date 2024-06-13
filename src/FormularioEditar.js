import './App.css';
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './App2.css'
import './Revista.css'
import {Form, Field} from 'react-final-form';
import {useParams} from "react-router-dom";
function Formulario(){

    const {id} = useParams();
    console.log(id)


    const [user, setUser] = useState({ title: '', body: '' });

    const handlePost = (e) =>{
        // console.log("Esta es la función principal de mi formulario")
        console.log(e.txtTitle);
        console.log(e.txtFor);
        fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
            method: "PUT",
            body: JSON.stringify({
                id: id,
                title: e.txtTitle,
                body: e.txtFor,
                userId: id
            }),
            headers:{
                "Content-type": "application/json; charset= UTF-8"
            }
        })
            .then(res=> res.json())
            .then(data => {
                console.log(data)
            })
    }

    const handleGetUser = async () => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(res => res.json())
            .then(data => {
                setUser({
                    title: data.title,
                    body: data.body
                });
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }
    useEffect(() => {
        handleGetUser();
    }, [id]);

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>Este es mi formulario de registro de usuarios</h1>
                    <Form
                        onSubmit={handlePost}
                        render={({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="">Título: {user.title}</label>
                                <br/>
                                <label htmlFor="">Descripción: {user.body}</label>
                                <br/>
                            </form>
                        )}
                    />
                    <Link to="/" className="go">Regresar</Link>
                </header>

            </div>

        </>
    );
}


export default Formulario;