import React from 'react';
import { Link } from 'react-router-dom';

function VerArreglos() {
    return (
        <div className="arrow-container">
            <Link to="/clientes">
                <button className="arrow-button">&#8592;</button>
                <iframe title="Pedidos1" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=3dd36b90-ed07-4d42-9f95-8b45341c59dd&autoAuth=true&ctid=73c3e337-a317-4624-bb03-047663c4d9ed" frameborder="0" allowFullScreen="true"></iframe>
            </Link>
            <Link to="/update-Clientes">
                <button className="arrow-button">&#8594;</button>
            </Link>
            <Link to="/get-clientes">
                <button className="arrow-button">Ver datos crudos</button>
            </Link>
        </div>
    );
}

export default VerArreglos;
