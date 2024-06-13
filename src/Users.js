import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import './App2.css'
import './Revista.css'
import {Button, Col, Container, Row} from "react-bootstrap";

function Users(){
    const [user, setUsers] = useState('');
    const {id} = useParams();
    const handlePost = (e) =>{
        // console.log("Esta es la función principal de mi formulario")
        console.log(e.txtTitle);
        console.log(e.txtFor);
        fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
            method: "DELETE",
            headers:{
                "Content-type": "application/json; charset= UTF-8"
            }
        })
            .then(res=> res.json())
            .then(data => {
                alert('Eliminado correctamente')
            })
    }

    const handleGetUser = async () =>{
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
            .then(res => res.json())
            .then(data =>{
                let html = data.map((value)=>
                <div>
                    <h2>{value.title}</h2>
                    <p>{value.body}</p>
                    <Button value={value.id}><Link className="link"  to={`Editar/${value.id}`} >Ver detalles</Link></Button>
                    <Button value={value.id} onClick={handlePost}>ELiminar</Button>
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
          <Button as="a" variant="primary">
              <Link className="link" to="Formulario">Ir a formulario</Link>
          </Button>


          <Container>
              <Row>
                  <Col>
                      {user}
                  </Col>
              </Row>
          </Container>
      </>
    );
}
export default Users;