import React, { useState } from 'react';
import './DeleteClientes.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DeleteArreglos() {
    const [CUI, setCUI] = useState('');

    const handleInputChange = (event) => {
        setCUI(event.target.value);
    };

    const borrarCliente = async () => {
        try {
            // Realizar la solicitud de borrado al backend
            const response = await axios.delete(`http://localhost:3161/Clientes/${CUI}`);
            console.log(response.data);
            // Aquí puedes manejar la respuesta del servidor si es necesario

        } catch (error) {
            console.error('Error al borrar el arreglo:', error);
            // Aquí puedes manejar los errores de manera adecuada, ya sea mostrando un mensaje al usuario o realizando otra acción.
        }
    };

    return (
        <div className="delete-clientes-container">
            <h2 className="delete-clientes-title">Ingrese el CUI del cliente que desea eliminar</h2>
            <div className="delete-clientes-form">
                <label htmlFor="skuInput">CUI:</label>
                <input type="text" id="skuInput" name="skuInput" value={CUI} onChange={handleInputChange} />
            </div>
            <div className="delete-clientes-buttons">
                <button onClick={borrarCliente}>Borrar Cliente</button>
            </div>
            <div className="arrow-container">
                <Link to="/update-Clientes">
                    <button className="arrow-button">&#8592;</button>
                </Link>
            </div>
        </div>
    );
}

export default DeleteArreglos;
