const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Datos en memoria (simulación de base de datos)
let pacientes = [];

// Obtener todos los pacientes
app.get('/pacientes', (req, res) => {
  res.json(pacientes);
});

// Agregar un nuevo paciente
app.post('/pacientes', (req, res) => {
  const nuevoPaciente = req.body;
  pacientes.push(nuevoPaciente);
  res.json(nuevoPaciente);
});

// Servidor en puerto 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend ejecutándose en http://localhost:${PORT}`);
});
