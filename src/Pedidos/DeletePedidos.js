import React, { useState } from 'react';
import './DeletePedidos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DeletePedidos() {
    const [pedidoId, setPedidoId] = useState('');

    const handleInputChange = (event) => {
        setPedidoId(event.target.value);
    };

    const handleDeletePedido = async () => {
        try {
            await axios.delete(`http://localhost:3161/Pedidos/${pedidoId}`);
            // Aquí podrías redirigir a otra página o hacer cualquier otra acción después de eliminar el pedido
        } catch (error) {
            console.error('Error al eliminar el pedido:', error);
        }
    };

    return (
        <div className="delete-arreglos-container">
            <h2 className="delete-arreglos-title">Ingrese el ID del pedido que desea eliminar</h2>
            <div className="delete-arreglos-form">
                <label htmlFor="pedidoIdInput">ID:</label>
                <input type="text" id="pedidoIdInput" name="pedidoIdInput" value={pedidoId} onChange={handleInputChange} />
            </div>
            <div className="delete-arreglos-buttons">
                <button onClick={handleDeletePedido}>Borrar Pedido</button>
            </div>
            <div className="arrow-container">
                <Link to="/update-Pedidos">
                    <button className="arrow-button">&#8592;</button>
                </Link>
            </div>
        </div>
    );
}

export default DeletePedidos;
