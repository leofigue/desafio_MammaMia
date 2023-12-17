import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import Anadir from "../components/Anadir";


const Detalle = () => {
  const { id } = useParams();
  const { pizzas, setPizzas } = useContext(PizzaContext);

  

  
  const index = pizzas.findIndex((pizza) => pizza.id === id);
  const pizzaSeleccionada = pizzas[index];

  

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="card col-11 col-md-10 mb-3 "
        style={{ marginTop: "20px" }}
      >
        <div className="row g-0">
          <div className="col-12 col-md-4 fill" style={{backgroundImage:`url(${pizzaSeleccionada.img})`}} >
            
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{pizzaSeleccionada.name}</h5>
              <hr></hr>
              <p className="card-text">{pizzaSeleccionada.desc}</p>
              <strong style={{ fontSize: "16px" }}>Ingredientes:</strong>

              <ul style={{ listStyle: "none" }}>
                {pizzaSeleccionada.ingredients.map((item, index) => {
                  return <li key={index}>🍕 {item}</li>;
                })}
              </ul>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <p className="divPrecio">Precio: $ {pizzaSeleccionada.price.toLocaleString("es-MX")}</p>
                <Anadir pizzaSeleccionada ={pizzaSeleccionada} texto="Añadir" accion="sumar" color='#DC3545'></Anadir>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
