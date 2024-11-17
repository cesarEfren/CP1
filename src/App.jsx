import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Ejercicio1 from './Paginas/Ejercicio1.jsx';
import Ejercicio2 from './Paginas/Ejercicio2.jsx';

function App() {
    return (
        <Router>
            <div>
                <h1>Parcial CP1</h1>
                
                {/* Menú de Navegación */}
                <nav>
                    <ul>
                        <li><Link to="/ejercicio1">Ejercicio 1</Link></li>
                        <li><Link to="/ejercicio2">Ejercicio 2</Link></li>
                    </ul>
                </nav>

                {/* Definición de Rutas */}
                <Routes>
                    <Route path="/ejercicio1" element={<Ejercicio1 />} />
                    <Route path="/ejercicio2" element={<Ejercicio2 />} />
                    <Route path="/" element={<h2>Bienvenido, selecciona un ejercicio</h2>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
