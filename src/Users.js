import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import './App2.css'
import './Revista.css'

function Users(){
    const [user, setUsers] = useState('');

    const handleGetUser = async () =>{
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
            .then(res => res.json())
            .then(data =>{
                let html = data.map((value)=>
                <div>
                    <h2>{value.title}</h2>
                    <p>{value.body}</p>
                    <button value={value.id}><Link  to={`Editar/${value.id}`} >Editar</Link></button>
                </div>
                );
                setUsers(html);
            })
    }
    useEffect(()=>{
        handleGetUser();
    },[])
    return(
      <>
          <Link to="Formulario" className="go">Ir a formulario</Link>
          <Link to="FormularioEditar" className="go">Ir a formulario editar</Link>
          {user}
      </>
    );
}
export default Users;