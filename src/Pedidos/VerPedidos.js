import React from 'react';
import { Link } from 'react-router-dom';

function VerPedidos() {
    return (
        <div className="arrow-container">
            <iframe title="Pedidos" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=3e6674c7-9f5c-42fb-bc13-3ce1e66895dc&autoAuth=true&ctid=73c3e337-a317-4624-bb03-047663c4d9ed" frameborder="0" allowFullScreen="true"></iframe>
            <Link to="/Pedidos">
                <button className="arrow-button">&#8592;</button>
            </Link>
            <Link to="/update-Pedidos">
                <button className="arrow-button">&#8594;</button>
            </Link>
            <Link to="/get-pedidos">
                <button className="arrow-button">Ver datos crudos</button>
            </Link>
        </div>
    );
}

export default VerPedidos;
