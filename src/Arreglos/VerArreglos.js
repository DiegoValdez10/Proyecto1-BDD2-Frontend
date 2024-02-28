import React from 'react';
import { Link } from 'react-router-dom';
import './VerArreglos.css';
function VerArreglos() {
    return (
        <div className="arrowv-container">
            <h1 className="arreglos-title">Ver arreglo</h1>
            <iframe title="Proyecto1BDD2" width="1140" height="600.25" src="https://app.powerbi.com/reportEmbed?reportId=4f307cc3-9dda-41a0-9d0a-859b70872e33&autoAuth=true&ctid=73c3e337-a317-4624-bb03-047663c4d9ed" frameborder="0" allowFullScreen="true"></iframe>
            <iframe style={{ background: '#FFFFFF', border: 'none', borderRadius: '2px', boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)' }} width="640" height="480" src="https://charts.mongodb.com/charts-project-0-rfluh/embed/charts?id=65dd179f-7bcc-472a-86be-40cf264b3431&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
            <iframe style={{ background: '#FFFFFF', border: 'none', borderRadius: '2px', boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)' }} width="640" height="480" src="https://charts.mongodb.com/charts-project-0-rfluh/embed/charts?id=65dd1806-7bcc-457b-8d61-40cf2652a87f&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
            <iframe style={{ background: '#FFFFFF', border: 'none', borderRadius: '2px', boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)' }} width="640" height="480" src="https://charts.mongodb.com/charts-project-0-rfluh/embed/charts?id=65dd1832-edc6-40c1-83b6-7401552c07bc&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
            <div>
            <Link to="/arreglos">
                <button className="arrow-button">&#8592;</button>
            </Link>
            <Link to="/update-arreglos">
                <button className="arrow-button">&#8594;</button>
            </Link>
            <Link to="/get-arreglos">
                <button className="arrow-button">Ver datos crudos</button>
            </Link>
            </div>
        </div>
    );
}

export default VerArreglos;
