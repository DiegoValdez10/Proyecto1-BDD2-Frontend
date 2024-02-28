import React, { useState } from 'react';
import './Clientes.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Clientes() {
    const [cliente, setCliente] = useState({
        Nombre: '',
        Apellido: '',
        Nit: '',
        Teléfono: '',
        Correo: '',
        CUI: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCliente(prevCliente => ({
            ...prevCliente,
            [name]: value
        }));
    };
    const crearCliente = async () => {
        try {
            // Validar que todos los campos requeridos estén llenos
            const { Nombre, Apellido, Nit, Teléfono, Correo, CUI } = cliente;
            if (!Nombre || !Apellido || !Nit || !Teléfono || !Correo || !CUI) {
                alert('Por favor llene todos los campos requeridos');
                return;
            }

    
            // Enviar la solicitud al backend para crear el cliente
            const response = await axios.put(`http://localhost:3161/Clientes/${CUI}`, {
                Nombre,
                Apellido,
                Nit,
                Teléfono,
                Correo,
                CUI
            });
            console.log(response.data);
    
        } catch (error) {
            console.error('Error al hacer update el cliente:', error);
            // Aquí puedes manejar los errores de manera adecuada, ya sea mostrando un mensaje al usuario o realizando otra acción.
        }
    };
    
    
    

    return (
        <div className="clientes-container">
            <h1 className="clientes-title">Actualizar cliente</h1>
            <form className="cliente-form">
                <div>
                    <label htmlFor="Nombre">Nombre:</label>
                    <input type="text" id="Nombre" name="Nombre" value={cliente.Nombre} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="Apellido">Apellido:</label>
                    <input type="text" id="Apellido" name="Apellido" value={cliente.Apellido} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="Nit">NIT:</label>
                    <input type="text" id="Nit" name="Nit" value={cliente.Nit} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="Teléfono">Teléfono:</label>
                    <input type="text" id="Teléfono" name="Teléfono" value={cliente.Teléfono} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="Correo">Correo:</label>
                    <input type="email" id="Correo" name="Correo" value={cliente.Correo} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="CUI">CUI:</label>
                    <input type="text" id="CUI" name="CUI" value={cliente.CUI} onChange={handleChange} />
                </div>
            </form>
            <div className="arreglos-buttons">
                <button onClick={crearCliente}>Actualizar Cliente</button>
            </div>

            <div className="arrow-container">
                <Link to="/ver-Clientes">
                    <button className="arrow-button">&#8592;</button>
                </Link>
                <Link to="/borrar-Clientes">
                    <button className="arrow-button">&#8594;</button>
                </Link>
            </div>
        </div>
    );
}

export default Clientes;
