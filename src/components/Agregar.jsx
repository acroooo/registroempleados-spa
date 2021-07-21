import React from "react";
import { Button, Form } from "react-bootstrap";

const Añadir = () => {
  return (
    <div className="mt-3">
      <Form>
        <Form.Group className="mb-3" controlId="formbasiconombre">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control type="text" placeholder="Nombre/s + Apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formbasicodireccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="address" placeholder="Calle falsa 123" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formbasicoemail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="tumail@mail.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="forminfo">
          <Form.Text className="text-muted">
            Estos datos se encuentran protegidos por la ley de Protección de
            Datos
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="terminosycondiciones">
          <a href="#">Términos y Condiciones</a>
          <Form.Check
            type="checkbox"
            label="Estoy de acuerdo con los términos y condiciones."
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Añadir empleado
        </Button>
      </Form>
    </div>
  );
};

export default Añadir;
