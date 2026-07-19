const DashboardStats = ({ incidencias }) => {
  const total = incidencias.length;
  const pendientes = incidencias.filter(i => i.estado === 'Pendiente').length;
  const enProceso = incidencias.filter(i => i.estado === 'En proceso').length;
  const resueltas = incidencias.filter(i => i.estado === 'Resuelta').length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <p className="text-sm text-gray-500">Total Incidencias</p>
        <p className="text-4xl font-bold text-gray-900 mt-2">{total}</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border-l-4 border-yellow-400">
        <p className="text-sm text-gray-500">Pendientes</p>
        <p className="text-4xl font-bold text-yellow-600 mt-2">{pendientes}</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border-l-4 border-blue-400">
        <p className="text-sm text-gray-500">En Proceso</p>
        <p className="text-4xl font-bold text-blue-600 mt-2">{enProceso}</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border-l-4 border-emerald-400">
        <p className="text-sm text-gray-500">Resueltas</p>
        <p className="text-4xl font-bold text-emerald-600 mt-2">{resueltas}</p>
      </div>
    </div>
  );
};

export default DashboardStats;