// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Header/Header.js';
import HomePage from './Inicio/Inicio.js';
import ArreglosPage from './Arreglos/Arreglos.js'; 
import PedidosPage from './Pedidos/Pedidos.js';
import ClientesPage from './Clientes/Clientes.js';
import VerArreglosPage from './Arreglos/VerArreglos.js';
import BorrarArreglosPage from './Arreglos/DeleteArreglos.js';
import UpdateArreglosPage from './Arreglos/UpdateArreglos.js';
import VerClientesPage from './Clientes/VerClientes.js';
import BorrarClientesPage from './Clientes/DeleteClientes.js';
import UpdateClientesPage from './Clientes/UpdateClientes.js';
import VerPedidosPage from './Pedidos/VerPedidos.js';
import BorrarPedidosPage from './Pedidos/DeletePedidos.js';
import UpdatePedidosPage from './Pedidos/UpdatePedidos.js';
import GetArreglos from './Arreglos/GetArreglos.js';
import GetClientes from './Clientes/GetClientes.js'; 
import GetPedidos from './Pedidos/GetPedidos.js';   

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/arreglos" element={<ArreglosPage />} />
          <Route exact path="/pedidos" element={<PedidosPage />} />
          <Route exact path="/clientes" element={<ClientesPage />} />
          <Route exact path="/ver-arreglos" element={<VerArreglosPage />} />
          <Route exact path="/borrar-arreglos" element={<BorrarArreglosPage />} />
          <Route exact path="/update-arreglos" element={<UpdateArreglosPage />} />
          <Route exact path="/ver-Clientes" element={<VerClientesPage />} />
          <Route exact path="/update-Clientes" element={<UpdateClientesPage />} />
          <Route exact path="/borrar-Clientes" element={<BorrarClientesPage />} />
          <Route exact path="/ver-Pedidos" element={<VerPedidosPage />} />
          <Route exact path="/update-Pedidos" element={<UpdatePedidosPage />} />
          <Route exact path="/borrar-Pedidos" element={<BorrarPedidosPage />} />
          <Route exact path="/get-arreglos" element={<GetArreglos />} />
          <Route exact path="/get-clientes" element={<GetClientes />} />
          <Route exact path="/get-pedidos" element={<GetPedidos />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
