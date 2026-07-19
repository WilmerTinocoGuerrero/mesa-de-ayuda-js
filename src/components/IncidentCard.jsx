const IncidentCard = ({ incidencia, onEdit, onDelete }) => {
  const prioridadColor = {
    Crítica: 'bg-red-100 text-red-700 border-red-200',
    Alta: 'bg-orange-100 text-orange-700 border-orange-200',
    Media: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    Baja: 'bg-green-100 text-green-700 border-green-200'
  };

  const estadoColor = {
    Pendiente: 'bg-gray-100 text-gray-700',
    'En proceso': 'bg-blue-100 text-blue-700',
    Resuelta: 'bg-emerald-100 text-emerald-700'
  };

  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 overflow-hidden border border-gray-100 group animate-card">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-mono text-gray-500">{incidencia.id}</span>
            <h3 className="font-semibold text-lg text-gray-900 mt-1 line-clamp-2">
              {incidencia.titulo}
            </h3>
          </div>
          <span className={`px-4 py-1.5 text-xs font-semibold rounded-full border ${prioridadColor[incidencia.prioridad] || 'bg-gray-100'}`}>
            {incidencia.prioridad}
          </span>
        </div>

        <p className="text-gray-600 text-sm line-clamp-3 mb-5">
          {incidencia.descripcion}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
              {incidencia.area}
            </span>
            <span className={`text-xs px-3 py-1 rounded-full font-medium ${estadoColor[incidencia.estado]}`}>
              {incidencia.estado}
            </span>
          </div>

          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit(incidencia)}
              className="px-4 py-2 text-sm bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-2xl transition"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(incidencia)}
              className="px-4 py-2 text-sm bg-red-50 hover:bg-red-100 text-red-600 rounded-2xl transition"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentCard;