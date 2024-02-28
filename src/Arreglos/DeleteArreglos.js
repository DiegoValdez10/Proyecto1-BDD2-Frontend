import React, { useState } from 'react';
import './DeleteArreglos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DeleteArreglos() {
    const [sku, setSku] = useState('');

    const handleInputChange = (event) => {
        setSku(event.target.value);
    };

    const borrarArreglo = async () => {
        try {
            // Realizar la solicitud de borrado al backend
            const response = await axios.delete(`http://localhost:3161/Arreglos/${sku}`);
            console.log(response.data);
            // Aquí puedes manejar la respuesta del servidor si es necesario

        } catch (error) {
            console.error('Error al borrar el arreglo:', error);
            // Aquí puedes manejar los errores de manera adecuada, ya sea mostrando un mensaje al usuario o realizando otra acción.
        }
    };

    return (
        <div className="delete-arreglos-container">
            <h2 className="delete-arreglos-title">Ingrese el SKU de la flor que desea eliminar</h2>
            <div className="delete-arreglos-form">
                <label htmlFor="skuInput">SKU:</label>
                <input type="text" id="skuInput" name="skuInput" value={sku} onChange={handleInputChange} />
            </div>
            <div className="delete-arreglos-buttons">
                <button onClick={borrarArreglo}>Borrar arreglo</button>
            </div>
            <div className="arrow-container">
                <Link to="/update-arreglos">
                    <button className="arrow-button">&#8592;</button>
                </Link>
            </div>
        </div>
    );
}

export default DeleteArreglos;
