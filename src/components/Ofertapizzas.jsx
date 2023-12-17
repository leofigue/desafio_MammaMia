import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Anadir from "./Anadir";

// Gallery

const Ofertapizzas = () => {
  const { pizzas } = useContext(PizzaContext);
  const navigate = useNavigate();

  const verDetalle = (id) => {
    navigate(`/detalle/${id}`)

  };

  return (
    <div className="divCards">
      {pizzas.map((pizza) => {
        const intPrecio = pizza.price.toLocaleString("es-MX");
        return (
          <Card key={pizza.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body className="p-2">
              <Card.Title>{pizza.name}</Card.Title>
              <hr />
              <Card.Title>
                <strong style={{ fontSize: "16px" }}>Ingredientes:</strong>
              </Card.Title>
              <ul style={{ listStyle: "none" }}>
                {pizza.ingredients.map((item, index) => {
                  return <li key={index}>🍕 {item}</li>;
                })}
              </ul>
            </Card.Body>
            <hr style={{ margin: "0.5rem" }} />
            <Card.Body className="p-2">
              <div className="divPrecio">
                <span>$ {intPrecio}</span>
              </div>
              <div className="divBotonesMasAnadir">
                <button className="verMas" onClick={()=>verDetalle(pizza.id)}>Ver Más 👀 </button>
                <Anadir pizzaSeleccionada={pizza} texto="Añadir" accion="sumar" color='#DC3545'></Anadir>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Ofertapizzas;
