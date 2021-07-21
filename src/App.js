import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Actualizar from "./components/Actualizar";
import Agregar from "./components/Agregar";
import Borrar from "./components/Borrar";
import Lista from "./components/Lista";

function App() {
  return (
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Empresa</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Empleados</Nav.Link>
              <Nav.Link href="/añadir_empleado">Añadir empleado</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Lista} />
        <Route exact path="/añadir_empleado" component={Agregar} />
        <Route exact path="/borrar/empleado/:id" component={Borrar} />
        <Route exact path="/actualizar/empleado/:id" component={Actualizar} />
      </Switch>
    </div>
  );
}

export default App;
