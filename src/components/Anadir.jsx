import React, { useContext } from 'react'
import cart from "/cart.png";
import { PizzaContext } from "../context/PizzaContext";



const Anadir = ({pizzaSeleccionada, texto, accion, color, imagen = true}) => {
    const { pizzas, setPizzas, setValortotal } = useContext(PizzaContext);
    const buscarIndex = () => {
        const index = pizzas.findIndex((pizza) => pizza.id === pizzaSeleccionada.id);
        const carritoPizzas = [...pizzas]
        if (typeof carritoPizzas[index].cantidad != 'undefined'){
          accion=="sumar" ? carritoPizzas[index].cantidad++ : carritoPizzas[index].cantidad--;
        }
        else{
          carritoPizzas[index].cantidad=1;
        }
        setPizzas([...carritoPizzas])
        if(accion==="sumar")
          setValortotal(prev => prev + carritoPizzas[index].price)
        else
          setValortotal(prev => prev - carritoPizzas[index].price)
        
        localStorage.setItem("pizzas", JSON.stringify(pizzas));
    
      };
  return (
    <button className="anadir" style={{backgroundColor:color}} onClick={()=>buscarIndex()}>
                  {texto} <img src={imagen ? cart : ""}></img>
                </button>
  )
}

export default Anadir