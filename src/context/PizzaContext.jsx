import React, { useState } from 'react'
import { createContext, useEffect } from "react";

export const PizzaContext = createContext({});

const PizzaContextProvider = ({children}) => {

    const [pizzas, setPizzas] = useState([]);
    const [valortotal, setValortotal] = useState(0)

    useEffect(()=>{
        
        const cargaPizzas = async()=>{
            const res = await fetch("/pizzas.json");
            const data = await res.json();
            setPizzas([...data])
            localStorage.setItem("pizzas", JSON.stringify(data));
        }

        cargaPizzas();

    },[])

    const arrPizass = JSON.parse(localStorage.getItem('pizzas'))
    //console.log(arrPizass)
    if(pizzas.length==0)
      setPizzas(arrPizass)

  return (
    <PizzaContext.Provider value={{pizzas, setPizzas, valortotal, setValortotal}}>
        {children}
    </PizzaContext.Provider>
  )
}

export default PizzaContextProvider