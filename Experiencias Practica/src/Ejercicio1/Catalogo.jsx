import { useState } from "react";

export const Catalogo = () => {

    const [productos] = useState([
        { id: 1, nombre: 'Corte de Pelo', precio: 30 },
        { id: 2, nombre: 'Baño', precio: 45 },
        { id: 3, nombre: 'Desparasitación', precio: 90 },
        { id: 4, nombre: 'Vacuna Polivalente', precio: 160 },
        { id: 5, nombre: 'Vacuna Antirrabica', precio: 130 }
      ]);

      return (
        <div className="Catalogo">
          <h2>Catalogo</h2>
          <ul>
            {productos.map((producto) => (
              <li key={producto.id}>
                {producto.nombre} <br/> S/{producto.precio}
              </li>
            ))}
          </ul>
        </div>
      );
}
