import { Button, FormGroup, FormControl, FormLabel, Container} from "react-bootstrap";
/*import React from 'react';*/
import "./Registro.css";
import React, { Component } from 'react';
import Calendar from 'react-calendar';


export default function Registro(props) {

    function handleSubmit(event) {
        event.preventDefault();
      }
      

    return (
    <div className='Fondo'>
    <div className="Registro">
        <form onSubmit={handleSubmit}>
             <div>   
                <h2 className="Titulo">
                    REGISTRO DE USUARIOS
                </h2>
            </div>
            <FormGroup controlId="Nombre" bsSize="large">
            <FormLabel>Nombre</FormLabel>
            <FormControl
                autoFocus
                type="text"
                name="name"
            />
            </FormGroup>
            <FormGroup controlId="Apellido" bsSize="large">
            <FormLabel >Apellido</FormLabel>
            <FormControl
                autoFocus
                type="text"
                name="a"
            />
            </FormGroup>
            <FormGroup controlId="Documento" bsSize="large">
            <FormLabel >Tipo de Documento</FormLabel>
            <FormControl
                autoFocus
                type="text"
                name="documento"
            />
            <div>
            <FormGroup controlId="Documento" bsSize="large">
            <FormLabel >Fecha de Nacimiento</FormLabel>
            <Calendar> 
                
                 </Calendar>
            </FormGroup>
          </div>

          <FormGroup controlId="user" bsSize="large">
            <FormLabel>Usuario</FormLabel>
            <FormControl
                autoFocus
                type="text"
                name="usuario"
            />
            </FormGroup>
            <FormGroup controlId="pass" bsSize="large">
            <FormLabel >Contraseña</FormLabel>
            <FormControl
                autoFocus
                type="password"
                name="contraseña"
            />
            </FormGroup>
          
            </FormGroup>
            <Button block bsSize="large"  type="submit">
            Guardar Registro
            </Button>
         </form>
        </div>
        </div>
        );
    }






