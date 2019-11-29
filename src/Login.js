import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import "./Login.css";

export default function Login(props) {
  const [password, setPassword] = useState("");

  function validateForm() {
    return password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
      <div className='Fondo'>
        <div className="Login">
        <form onSubmit={handleSubmit}>
             <div>   
                <h2 className="Titulo">
                    VIRTUAL - SIPGB
                </h2>
            </div>
            <FormGroup controlId="usuario" bsSize="large">
            <FormLabel>Usuario</FormLabel>
            <FormControl
                autoFocus
                type="text"
                name="name"
            />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
            <FormLabel >Password</FormLabel>
            <FormControl
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
            />
            </FormGroup>
            <Button block bsSize="large" disabled={!validateForm()} type="submit">
            Login
            </Button>
            <Button block bsSize="large" variant="contained" color="primary">
            Registrar
        </Button>

         </form>
        </div>
    </div>
  );
}