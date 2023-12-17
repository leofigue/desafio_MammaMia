import React, { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'
import Anadir from "../components/Anadir";

const Carro = () => {
  const{pizzas, valortotal} = useContext(PizzaContext)
 return (
    <div className='divCarrito'>
      <div className='detalleCarrito'>
        <h2 className='titulos'>Detalle del pedido:</h2>
        <div className='listadoCarrito'>
          <table className='table  tblCarro'>
            <tbody>
            {pizzas.filter((p)=> (typeof p.cantidad != 'undefined') && p.cantidad>0).map((p)=>{
              const totalLinea = p.cantidad * p.price 
              return (
                      <tr key={p.id} className='border-bottom'>
                      <td ><img src={p.img} alt='imagen pizza ${}' style={{width:'5vw'}}></img></td>
                      <td >{p.name}</td>
                      <td style={{textAlign:'right',color:'#7FAA83', fontWeight:'bold'}}>${totalLinea.toLocaleString("es-MX")}</td>
                      <td >
                        <div className='botonesCarro'>
                          <Anadir pizzaSeleccionada={p} texto="-" accion="restar" color='#DC3545' imagen={false}></Anadir> 
                          {p.cantidad} 
                          <Anadir pizzaSeleccionada={p} texto="+" accion="sumar" color='#0D6EFD'  imagen={false}></Anadir>
                        </div>
                      </td>
                    </tr>)
            })}
            </tbody>
            
          </table>
        </div>
        <div>
          <h2>Total: ${valortotal.toLocaleString("es-MX")}</h2>
          <button className='btnPagar'>Ir a Pagar</button>
        </div>
        
      </div>
    </div>
  )
}

export default Carro