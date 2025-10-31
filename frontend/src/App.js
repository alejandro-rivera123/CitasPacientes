import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormPaciente from './FormPaciente';
import ListaPacientes from './ListaPacientes';

function App() {
  const [pacientes, setPacientes] = useState([]);

  // Obtener pacientes al iniciar
  useEffect(() => {
    axios.get('http://localhost:5000/pacientes')
      .then(res => setPacientes(res.data))
      .catch(err => console.error(err));
  }, []);

  // Agregar nuevo paciente
  const agregarPaciente = (nuevo) => {
    axios.post('http://localhost:5000/pacientes', nuevo)
      .then(res => setPacientes([...pacientes, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: '30px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Gestión de Pacientes - Consultorio "Sonrisa Perfecta"</h1>
      <FormPaciente agregarPaciente={agregarPaciente} />
      <ListaPacientes pacientes={pacientes} />
    </div>
  );
}

export default App;
