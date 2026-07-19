import { useState, useEffect } from 'react';
import IncidentCard from '../components/IncidentCard';
import DeleteModal from '../components/DeleteModal';

const IncidentsList = () => {
  const [incidencias, setIncidencias] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState(null);

  useEffect(() => {
    // Datos de ejemplo
    const datos = [
      { id: 1, codigo: "INC-2026-001", titulo: "Error en login del sistema", descripcion: "No permite acceder", area: "TI", prioridad: "Alta", estado: "Pendiente" },
      { id: 2, codigo: "INC-2026-002", titulo: "Impresora sin conexión", descripcion: "No imprime", area: "Contabilidad", prioridad: "Media", estado: "En proceso" },
      { id: 3, codigo: "INC-2026-003", titulo: "Falla en servidor", descripcion: "Caída intermitente", area: "TI", prioridad: "Crítica", estado: "Pendiente" },
    ];
    setIncidencias(datos);
  }, []);

  const filteredIncidencias = incidencias.filter(inc => 
    inc.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inc.codigo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (incidencia) => {
    setSelectedIncident(incidencia);
    setModalOpen(true);
  };

  const confirmDelete = () => {
    setIncidencias(incidencias.filter(i => i.id !== selectedIncident.id));
    setModalOpen(false);
    alert('Incidencia eliminada');
  };

return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold text-gray-900">Todas las Incidencias</h1>
        
        <input
          type="text"
          placeholder="Buscar por código o título..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-96 px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIncidencias.map(inc => (
          <IncidentCard 
            key={inc.id} 
            incidencia={inc} 
            onEdit={() => alert('Editar: ' + inc.codigo)}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {filteredIncidencias.length === 0 && (
        <p className="text-center text-gray-500 py-12">No se encontraron incidencias</p>
      )}

      <DeleteModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onConfirm={confirmDelete} 
        incidencia={selectedIncident} 
      />
    </div>
  );
};

export default IncidentsList;