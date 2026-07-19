import { useState } from 'react';

const IncidentForm = ({ onSubmit, initialData = null, isEditing = false }) => {
  const [formData, setFormData] = useState(initialData || {
    codigo: '',
    titulo: '',
    descripcion: '',
    area: '',
    prioridad: 'Media',
    estado: 'Pendiente'
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.codigo.trim()) newErrors.codigo = "El código es obligatorio";
    if (!formData.titulo.trim() || formData.titulo.length < 5) newErrors.titulo = "Título mínimo 5 caracteres";
    if (!formData.descripcion.trim() || formData.descripcion.length < 10) newErrors.descripcion = "Descripción mínimo 10 caracteres";
    if (!formData.area) newErrors.area = "Selecciona un área";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        {isEditing ? 'Editar Incidencia' : 'Registrar Nueva Incidencia'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Código de Incidencia</label>
            <input
              type="text"
              name="codigo"
              value={formData.codigo}
              onChange={handleChange}
              className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              placeholder="INC-2026-045"
            />
            {errors.codigo && <p className="text-red-500 text-sm mt-1">{errors.codigo}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Área Solicitante</label>
            <select
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
            >
              <option value="">Selecciona un área</option>
              <option value="TI">Tecnología de la Información</option>
              <option value="Contabilidad">Contabilidad</option>
              <option value="RRHH">Recursos Humanos</option>
              <option value="Ventas">Ventas</option>
              <option value="Marketing">Marketing</option>
            </select>
            {errors.area && <p className="text-red-500 text-sm mt-1">{errors.area}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Título de la Incidencia</label>
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
            placeholder="Error en login de sistema ERP"
          />
          {errors.titulo && <p className="text-red-500 text-sm mt-1">{errors.titulo}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Descripción Detallada</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            rows="5"
            className="w-full px-5 py-4 border border-gray-300 rounded-3xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
            placeholder="Explica el problema con el mayor detalle posible..."
          />
          {errors.descripcion && <p className="text-red-500 text-sm mt-1">{errors.descripcion}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Prioridad</label>
            <select name="prioridad" value={formData.prioridad} onChange={handleChange}
              className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-indigo-500">
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
              <option value="Crítica">Crítica</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Estado Inicial</label>
            <select name="estado" value={formData.estado} onChange={handleChange}
              className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-indigo-500">
              <option value="Pendiente">Pendiente</option>
              <option value="En proceso">En proceso</option>
              <option value="Resuelta">Resuelta</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 transition-all text-white py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl"
        >
          {isEditing ? 'Guardar Cambios' : 'Registrar Incidencia'}
        </button>
      </form>
    </div>
  );
};

export default IncidentForm;