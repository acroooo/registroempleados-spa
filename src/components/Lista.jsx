import React from "react";
import { Button, Table } from "react-bootstrap";

const Lista = () => {
  return (
    <div className="mt-5">
      <h4>Lista de empleados</h4>
      <div className="mt-4">
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th>Tarjeta</th>
              <th>Nombre completo</th>
              <th>Dirección</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <Button>Actualizar</Button>
                <Button className="ml-5">Eliminar</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Lista;
