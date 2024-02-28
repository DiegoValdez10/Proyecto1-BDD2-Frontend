import React, { useState } from 'react';
import axios from 'axios';
import './GetArreglos.css';
import { Link } from 'react-router-dom';

function GetArreglos() {
    const [arregloData, setArregloData] = useState(null);
    const [ventasPorCategoriaData, setVentasPorCategoriaData] = useState(null);
    const [error, setError] = useState(null);
    const [skuInput, setSkuInput] = useState('');

    const fetchDataExistencia = async () => {
        try {
            const response = await axios.get(`http://localhost:3161/Consulta/VerificarExistencia/${skuInput}`);
            setArregloData(response.data);
            setError(null);
        } catch (error) {
            console.error('Error al obtener la información de existencia:', error);
            setArregloData(null);
            setError(error.response.data.mensaje);
        }
    };

    const fetchDataVentasPorCategoria = async () => {
        try {
            const response = await axios.get('http://localhost:3161/Consulta/VentasPorCategoria');
            setVentasPorCategoriaData(response.data);
            setError(null);
        } catch (error) {
            console.error(error);
            setVentasPorCategoriaData(null);
            setError(error.response.data.mensaje);
        }
    };

    const handleExistenciaSubmit = async (event) => {
        event.preventDefault();
        await fetchDataExistencia();
    };

    const handleVentasPorCategoriaSubmit = async (event) => {
        event.preventDefault();
        await fetchDataVentasPorCategoria();
    };

    const handleInputChange = (event) => {
        setSkuInput(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleExistenciaSubmit}>
                <label>
                    SKU:
                    <input type="text" value={skuInput} onChange={handleInputChange} />
                </label>
                <button className="boton" type="submit">Verificar Existencia</button>
            </form>

            <button className="boton" onClick={handleVentasPorCategoriaSubmit}>Ver Ventas por Categoría</button>

            {arregloData && (
                <div className="container">
                    <h2 className="title">Información del Arreglo</h2>
                    <div className="form">
                        <p>Categoría: {arregloData.arreglo && arregloData.arreglo.Categoría}</p>
                        <p>Nombre de Arreglo: {arregloData.arreglo && arregloData.arreglo['Nombre de arreglo']}</p>
                        <p>Precio: {arregloData.arreglo && arregloData.arreglo.Precio}</p>
                        <p>Existencia: {arregloData.arreglo && arregloData.arreglo.Existencia}</p>
                        <p>SKU: {arregloData.arreglo && arregloData.arreglo.SKU}</p>
                        <p>ID: {arregloData.arreglo && arregloData.arreglo._id}</p>
                    </div>
                </div>
            )}

            {ventasPorCategoriaData && (
                <div className="container">
                    <h2 className="title">Ventas por Categoría</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Categoría</th>
                                <th>Total Ventas</th>
                                <th>Cantidad Pedidos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ventasPorCategoriaData.map(item => (
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.totalVentas}</td>
                                    <td>{item.cantidadPedidos}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        <Link to="/ver-Arreglos">
            <button className="arrow-button">&#8592;</button>
        </Link>
            {error && <p>{error}</p>}
        </div>
    );
}

export default GetArreglos;
