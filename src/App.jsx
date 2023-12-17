import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Detalle from './views/Detalle';
import Carro from './views/Carro';
import NotFound from './views/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
function App() {


  return (
    <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}> </Route>
          <Route path="/detalle/:id" element={<Detalle></Detalle>}> </Route>
          <Route path="/carro" element={<Carro></Carro>}> </Route>
          <Route path="*" element={<NotFound></NotFound>}> </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
