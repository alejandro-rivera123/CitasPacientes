import React, { useState } from 'react';

function FormPaciente({ agregarPaciente }) {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    tratamiento: '',
    observaciones: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono || !form.tratamiento) return;
    agregarPaciente(form);
    setForm({ nombre: '', telefono: '', tratamiento: '', observaciones: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        name="nombre"
        placeholder="Nombre completo"
        value={form.nombre}
        onChange={handleChange}
        required
      />
      <input
        name="telefono"
        placeholder="Teléfono de contacto"
        value={form.telefono}
        onChange={handleChange}
        required
      />
      <input
        name="tratamiento"
        placeholder="Tratamiento requerido"
        value={form.tratamiento}
        onChange={handleChange}
        required
      />
      <input
        name="observaciones"
        placeholder="Observaciones adicionales"
        value={form.observaciones}
        onChange={handleChange}
      />
      <button type="submit">Registrar Paciente</button>
    </form>
  );
}

export default FormPaciente;
