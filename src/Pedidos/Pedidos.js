import React, { useState, useEffect} from 'react';
import './Pedidos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Pedidos() {
    const [pedido, setPedido] = useState({
        ID_pedido: '',
        Destinatario: '',
        Comprador: '',
        Fecha: '',
        Arreglo_entregado: {
            arreglo: '',
            cantidad: ''
        },
        Dirección: '',
        Método_de_pago: '',
        Estado: '',
        Método_de_entrega: '',
        Precio_envío: '',
        Subtotal: '',
        Precio_total: ''
    });
    useEffect(() => {
        const total = parseFloat(pedido.Precio_envío) + parseFloat(pedido.Subtotal) * parseFloat(pedido.Arreglo_entregado.cantidad);
        setPedido(prevPedido => ({
            ...prevPedido,
            Precio_total: total.toString()
        }));
    }, [pedido.Precio_envío, pedido.Subtotal,pedido.Arreglo_entregado.cantidad]);
    const crearPedido = async () => {
        try {
            await axios.post('http://localhost:3161/Pedidos', pedido);
            console.log('Pedido creado:', pedido);
            // Aquí podrías redirigir a otra página o hacer cualquier otra acción después de crear el pedido
        } catch (error) {
            console.error('Error al crear el pedido:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPedido(prevPedido => ({
            ...prevPedido,
            [name]: value
        }));
    };

    const handleArregloChange = (event) => {
        const { name, value } = event.target;
        setPedido(prevPedido => ({
            ...prevPedido,
            Arreglo_entregado: {
                ...prevPedido.Arreglo_entregado,
                [name]: value
            }
        }));
    };

    return (
        <div className="pedidos-container">
            <h1 className="pedidos-title">Crear pedido</h1>
            <form className="pedido-form">
                <div>
                    <label htmlFor="ID_pedido">ID del pedido:</label>
                    <input type="text" id="ID_pedido" name="ID_pedido" value={pedido.ID_pedido} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="Destinatario">Destinatario:</label>
                    <input type="text" id="Destinatario" name="Destinatario" value={pedido.Destinatario} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="Comprador">Comprador:</label>
                    <input type="text" id="Comprador" name="Comprador" value={pedido.Comprador} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="Fecha">Fecha:</label>
                    <input type="text" id="Fecha" name="Fecha" value={pedido.Fecha} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="Arreglo_entregado_arreglo">Nombre Arreglo entregado:</label>
                    <input type="text" id="Arreglo_entregado_arreglo" name="arreglo" value={pedido.Arreglo_entregado.arreglo} onChange={handleArregloChange} />
                </div>

                <div>
                    <label htmlFor="Arreglo_entregado_cantidad">Cantidad:</label>
                    <input type="text" id="Arreglo_entregado_cantidad" name="cantidad" value={pedido.Arreglo_entregado.cantidad} onChange={handleArregloChange} />
                </div>

                <div>
                    <label htmlFor="Dirección">Dirección:</label>
                    <input type="text" id="Dirección" name="Dirección" value={pedido.Dirección} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="Método_de_pago">Método de pago:</label>
                    <input type="text" id="Método_de_pago" name="Método_de_pago" value={pedido.Método_de_pago} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="Estado">Estado:</label>
                    <input type="text" id="Estado" name="Estado" value={pedido.Estado} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="Método_de_entrega">Método de entrega:</label>
                    <input type="text" id="Método_de_entrega" name="Método_de_entrega" value={pedido.Método_de_entrega} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="Precio_envío">Precio de envío:</label>
                    <input type="text" id="Precio_envío" name="Precio_envío" value={pedido.Precio_envío} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="Subtotal">Subtotal:</label>
                    <input type="text" id="Subtotal" name="Subtotal" value={pedido.Subtotal} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="Precio_total">Precio total:</label>
                    <input type="text" id="Precio_total" name="Precio_total" value={pedido.Precio_total} onChange={handleChange} />
                </div>
            </form>

            <div className="pedidos-buttons">
                <button onClick={crearPedido}>Crear pedido</button>
            </div>
            <div className="arrow-container">
                <Link to="/ver-Pedidos">
                    <button className="arrow-button">&#8594;</button>
                </Link>
            </div>
        </div>
    );
}

export default Pedidos;
