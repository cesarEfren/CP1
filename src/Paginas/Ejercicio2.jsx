import React from 'react';

export default function Ejercicio2() {
  const carros = [
    'carro1.jpg', 
    'carro2.jpg', 
    'carro3.jpg'
  ];

  const [carroSeleccionado, setCarroSeleccionado] = React.useState(0);

  function carroSiguiente() {
    if (carroSeleccionado < carros.length - 1) {
      setCarroSeleccionado(carroSeleccionado + 1);
    }
  }

  function carroPrevio() {
    if (carroSeleccionado > 0) {
      setCarroSeleccionado(carroSeleccionado - 1);
    }
  }

  return (
    <div>
      <h1>Carros</h1>
      <p>
        <img 
          src={`/imagenes/${carros[carroSeleccionado]}`} 
          alt="carro" 
        />
      </p>
      <p>
        <input type="button" value="<" onClick={carroPrevio} />
        <input type="button" value=">" onClick={carroSiguiente} />
        {carros[carroSeleccionado]}
      </p>
    </div>
  );
}
