import React, { useState } from 'react';
import './Arreglos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Arreglos() {
    const [arreglos, setArreglos] = useState([
        {
            Nombre_de_arreglo: '',
            Existencia: '',
            Precio: '',
            Categoría: '',
            SKU: '',
            Elemento: {
                Cantidad_total: '',
                Tipo: {
                    Flores: {
                        Tipo_de_flor: '',
                        Cantidad: ''
                    },
                    Globos: {
                        Cantidad: '',
                        Tipo_de_globo: ''
                    },
                    Snacks: {
                        Cantidad: '',
                        Marca: ''
                    },
                    Botellas: {
                        Cantidad: '',
                        Alcohol: ''
                    }


                }
            }
        }
    ]);


    const agregarArreglo = () => {
        setArreglos([...arreglos, {
            Nombre_de_arreglo: '',
            Existencia: '',
            Precio: '',
            Categoría: '',
            SKU: '',
            Elemento: {
                Cantidad_total: '',
                Tipo: {
                    Flores: {
                        Tipo_de_flor: '',
                        Cantidad: ''
                    },
                    Globos: {
                        Cantidad: '',
                        Tipo_de_globo: ''
                    },
                    Snacks: {
                        Cantidad: '',
                        Marca: ''
                    },
                    Botellas: {
                        Cantidad: '',
                        Alcohol: ''
                    }


                }
            }
        }]);
    };
    const crearArreglo = async () => {
        // Validar que al menos un arreglo tenga los campos requeridos llenos
        if (arreglos.some(arreglo => (
            arreglo.Nombre_de_arreglo &&
            arreglo.Existencia &&
            arreglo.Precio &&
            arreglo.Categoría &&
            arreglo.SKU
        ))) {
            try {
                let endpoint = '/Arreglos';
    
                // Si hay más de un arreglo en el estado, cambia el endpoint
                if (arreglos.length > 1) {
                    endpoint = '/Arreglos/many';
                }
    
                // Si solo hay un arreglo, extraerlo del array
                const dataToSend = arreglos.length === 1 ? arreglos[0] : arreglos;
    
                // Enviar los arreglos al backend
                const response = await axios.post(`http://localhost:3161${endpoint}`, dataToSend);
                console.log(response.data);
            
            } catch (error) {
                if (error.response && error.response.data) {
                    console.error(error.response.data);
                } else {
                    console.error(error);
                }
            }
        } else {
            alert('Por favor llene al menos un arreglo con todos los campos requeridos');
        }
    };
    
    
    
    
    
    
    
    
    
    
    const handleChange = (index, event) => {
        const { name, value } = event.target;
    
        setArreglos(prevArreglos => {
            const newArreglos = [...prevArreglos];
            const currentArreglo = { ...newArreglos[index] };
    
            if (name === 'Cantidad_total' || name === 'Existencia' || name === 'Precio' || name === 'Categoría' || name === 'SKU' || name === 'Nombre_de_arreglo') {
                currentArreglo[name] = value;
            } else if (name === 'Tipo' && value.trim() !== '') {
                const tipoSeleccionado = value;
                currentArreglo.Elemento.Tipo = {
                    ...currentArreglo.Elemento.Tipo,
                    [tipoSeleccionado]: {}
                };
                currentArreglo.Tipo = tipoSeleccionado;
            } else if (name === 'Cantidad' || name === 'Tipo_de_flor' || name === 'Tipo_de_globo' || name === 'Marca' || name === 'Alcohol') {
                // Update relevant fields based on user input
                const tipo = currentArreglo.Tipo;
                if (!currentArreglo.Elemento.Tipo) {
                    currentArreglo.Elemento.Tipo = {};
                }
                if (!currentArreglo.Elemento.Tipo[tipo]) {
                    currentArreglo.Elemento.Tipo[tipo] = {};
                }
                currentArreglo.Elemento.Tipo[tipo][name] = value;
            } else if (name === 'Elemento_Cantidad_total') {
                // Update Elemento Cantidad_total
                currentArreglo.Elemento.Cantidad_total = value;
            }
    
            newArreglos[index] = currentArreglo;
            return newArreglos;
        });
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    








    return (
        <div className="arreglos-container">
            <h1 className="arreglos-title">Crear arreglo</h1>
            {arreglos.map((arreglo, index) => (
                <form key={index} className="arreglo-form">
                    <div>
                        <label htmlFor={`Nombre_de_arreglo-${index}`}>Nombre del arreglo:</label>
                        <input type="text" id={`Nombre_de_arreglo-${index}`} name="Nombre_de_arreglo" value={arreglo.Nombre_de_arreglo} onChange={(event) => handleChange(index, event)} />
                    </div>

                    <div>
                        <label htmlFor={`Elemento_Cantidad_total-${index}`}>Cantidad total:</label>
                        <input type="text" id={`Elemento_Cantidad_total-${index}`} name="Elemento_Cantidad_total" value={arreglo.Elemento.Cantidad_total} onChange={(event) => handleChange(index, event)} />
                    </div>


                    <div>
                        <label htmlFor={`Tipo_Arreglo-${index}`}>Tipo de Arreglo:</label>
                        <input type="text" id={`Tipo_Arreglo-${index}`} name="Tipo" value={arreglo.Elemento.Tipo.Cantidad} onChange={(event) => handleChange(index, event)} />

                    </div>

                    <div>
                        <label htmlFor={`Cantidad-${index}`}>Cantidad de elementos:</label>
                        <input type="text" id={`Cantidad-${index}`} name="Cantidad" value={arreglo.Elemento.Tipo.Cantidad} onChange={(event) => handleChange(index, event)} />
                    </div>

                    <div>
                        <label htmlFor={`Tipo_de_flor-${index}`}>Tipo de elemento:</label>
                        <input type="text" id={`Tipo_de_flor-${index}`} name="Tipo_de_flor" value={arreglo.Elemento.Tipo.Tipo_de_flor} onChange={(event) => handleChange(index, event)} />
                    </div>

                    <div>
                        <label htmlFor={`Existencia-${index}`}>Existencia:</label>
                        <input type="text" id={`Existencia-${index}`} name="Existencia" value={arreglo.Existencia} onChange={(event) => handleChange(index, event)} />
                    </div>

                    <div>
                        <label htmlFor={`Precio-${index}`}>Precio:</label>
                        <input type="text" id={`Precio-${index}`} name="Precio" value={arreglo.Precio} onChange={(event) => handleChange(index, event)} />
                    </div>

                    <div>
                        <label htmlFor={`Categoría-${index}`}>Categoría:</label>
                        <input type="text" id={`Categoría-${index}`} name="Categoría" value={arreglo.Categoría} onChange={(event) => handleChange(index, event)} />
                    </div>

                    <div>
                        <label htmlFor={`SKU-${index}`}>SKU:</label>
                        <input type="text" id={`SKU-${index}`} name="SKU" value={arreglo.SKU} onChange={(event) => handleChange(index, event)} />
                    </div>
                </form>
            ))}
            <div className="arreglos-buttons">
                <button onClick={agregarArreglo}>Agregar más arreglos</button>
                <button onClick={crearArreglo}>Crear arreglo(s)</button>
            </div>
            <div className="arrow-container">
                <Link to="/ver-arreglos">
                    <button className="arrow-button">&#8594;</button>
                </Link>
            </div>
        </div>
    );
}

export default Arreglos;

