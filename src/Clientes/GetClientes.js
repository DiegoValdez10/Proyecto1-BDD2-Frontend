import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GetClientes.css';
import { Link } from 'react-router-dom';

function InformacionBonita({ titulo, informacion }) {
    return (
        <div className="container">
            <h2 className="title">{titulo}</h2>
            <div className="form">
                {Object.entries(informacion).map(([key, value]) => (
                    <div className="form-group" key={key}>
                        <label>{key}: </label>
                        <span>{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function GetClientes() {
    const [infoConMasPedidos, setInfoConMasPedidos] = useState(null);
    const [infoClienteMasGastador, setInfoClienteMasGastador] = useState(null);

    useEffect(() => {
        // Lógica para obtener la información de ConMasPedidos
        const fetchDataConMasPedidos = async () => {
            try {
                const response = await axios.get('http://localhost:3161/Consulta/ConMasPedidos');
                setInfoConMasPedidos(response.data);
            } catch (error) {
                console.error('Error al obtener la información de ConMasPedidos:', error);
            }
        };

        // Lógica para obtener la información de ClienteMasGastador
        const fetchDataClienteMasGastador = async () => {
            try {
                const response = await axios.get('http://localhost:3161/Consulta/ClienteMasGastador');
                setInfoClienteMasGastador(response.data);
            } catch (error) {
                console.error('Error al obtener la información de ClienteMasGastador:', error);
            }
        };

        fetchDataConMasPedidos();
        fetchDataClienteMasGastador();
    }, []);

    return (
        <div>
            {infoConMasPedidos && (
                <InformacionBonita titulo="Cliente con más pedidos" informacion={infoConMasPedidos} />
            )}
            {infoClienteMasGastador && (
                <InformacionBonita titulo="Cliente más gastador" informacion={infoClienteMasGastador} />
            )}
            <Link to="/ver-Clientes">
                <button className="arrow-button">&#8592;</button>
            </Link>
        </div>
    );
}

export default GetClientes;
