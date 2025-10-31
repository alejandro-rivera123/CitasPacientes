import React from 'react';

function ListaPacientes({ pacientes }) {
  if (pacientes.length === 0) {
    return <p>No hay pacientes registrados aún.</p>;
  }

  return (
    <div>
      <h2>Pacientes Registrados</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {pacientes.map((p, i) => (
          <li key={i} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <strong>{p.nombre}</strong> <br />
             {p.telefono} <br />
             {p.tratamiento} <br />
             {p.observaciones || 'Sin observaciones'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPacientes;
