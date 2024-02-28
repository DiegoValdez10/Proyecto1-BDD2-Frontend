import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GetPedidos.css';
import { Link } from 'react-router-dom';

function GetP({ titulo, informacion }) {
    if (!informacion) {
        return null; // O cualquier otro manejo de caso null/undefined
    }
    const formatObject = (obj) => {
        return Object.keys(obj).map((key) => (
            <div key={key}>
                <strong>{key}:</strong> {obj[key]}
            </div>
        ));
    };
    return (
        <div className="container">
            <h2 className="title">{titulo}</h2>
            <div className="form">
                {Object.entries(informacion).map(([key, value]) => (
                    <div className="form-group" key={key}>
                        <label>{key}: </label>
                        {typeof value === 'object' ? (
                            
                            <span>{JSON.stringify(value)}</span>
                            
                        ) : (
                            
                            <span>{value}</span>
                        )}
                        
                    </div>
                ))}
            </div>
        </div>
    );
}




function GetPedidos() {
    const [infoCount, setInfoCount] = useState(null);
    const [infoMejoresVentas, setInfoMejoresVentas] = useState(null);
    const [infoVentasPorMes, setInfoVentasPorMes] = useState(null);
    const [infoVentasPorMetodoEntrega, setInfoVentasPorMetodoEntrega] = useState(null);
    const [infoVentasPorMetodoPago, setInfoVentasPorMetodoPago] = useState(null);

useEffect(() => {
    const fetchData = async () => {
        try {
            const responses = await Promise.all([
                axios.get('http://localhost:3161/Consulta/count'),
                axios.get('http://localhost:3161/Consulta/MejoresVentas'),
                axios.get('http://localhost:3161/Consulta/VentasPorMes'),
                axios.get('http://localhost:3161/Consulta/VentasPorMetodoEntrega'),
                axios.get('http://localhost:3161/Consulta/VentasPorMetodoPago')
            ]);
            console.log(responses); // Verifica qué datos estás recibiendo
            setInfoCount(responses[0].data);
            setInfoMejoresVentas(responses[1].data);
            setInfoVentasPorMes(responses[2].data);
            setInfoVentasPorMetodoEntrega(responses[3].data);
            setInfoVentasPorMetodoPago(responses[4].data);
        } catch (error) {
            console.error('Error al obtener la información:', error);
        }
    };

    fetchData();
}, []);


return (
    <div>
        {infoCount && <GetP titulo="Conteo de Pedidos" informacion={infoCount} />}
        {infoMejoresVentas && <GetP titulo="Mejores Ventas" informacion={infoMejoresVentas} />}
        {infoVentasPorMes && <GetP titulo="Ventas por Mes" informacion={infoVentasPorMes} />}
        {infoVentasPorMetodoEntrega && (
            <GetP titulo="Ventas por Método de Entrega" informacion={infoVentasPorMetodoEntrega} />
        )}
        {infoVentasPorMetodoPago && (
            <GetP titulo="Ventas por Método de Pago" informacion={infoVentasPorMetodoPago} />
        )}
        <Link to="/ver-Pedidos">
            <button className="arrow-button">&#8592;</button>
        </Link>
    </div>
);
}

export default GetPedidos;
