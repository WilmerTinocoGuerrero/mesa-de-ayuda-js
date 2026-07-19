import { useState, useEffect } from 'react';
import IncidentCard from '../components/IncidentCard';
import DeleteModal from '../components/DeleteModal';
// 1. IMPORTAMOS EL MODAL DE EDICIÓN
import EditModal from '../components/EditModal'; 

const IncidentsList = () => {
  const [incidencias, setIncidencias] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Estados para Eliminar
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState(null);

  // 2. CREAMOS LOS ESTADOS PARA EL MODAL DE EDICIÓN (Igual que en Dashboard)
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [incidentToEdit, setIncidentToEdit] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/incidencias')
      .then(respuesta => respuesta.json())
      .then(data =>  {
        setIncidencias(data);
      })
      .catch(error => {
        console.error('Error al obtener las incidencias', error);
      });
  }, []);

  const filteredIncidencias = incidencias.filter(inc => 
    inc.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inc.codigo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- Lógica de Eliminar ---
  const handleDelete = (incidencia) => {
    setSelectedIncident(incidencia);
    setModalOpen(true);
  };

  const confirmDelete = () => {
    fetch(`http://localhost:8080/incidencias/${selectedIncident.id}`, {
      method: 'DELETE',
    })
      .then(respuesta => {
        if (respuesta.ok) {
        setIncidencias(incidencias.filter(i => i.id !== selectedIncident.id));
        setModalOpen(false);
        alert('Incidencia eliminada exitosamente de la base de datos');
       } else {
        alert('Hubo un problema al tratar de eliminar la incidencia.');
       }
    })
    .catch(error => {
      console.error('Error al eliminar', error);
    });
  };

  // 3. AGREGAMOS LA LÓGICA DE EDITAR (Igual que en Dashboard)
  const handleEdit = (incidencia) => {
    setIncidentToEdit(incidencia);
    setEditModalOpen(true);
  };

  const confirmEdit = (incidenciaActualizada) => {
    fetch(`http://localhost:8080/incidencias/${incidenciaActualizada.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(incidenciaActualizada),
    })
      .then(respuesta => {
        if (respuesta.ok) {
          setIncidencias(incidencias.map(inc => 
            inc.id === incidenciaActualizada.id ? incidenciaActualizada : inc
          ));
          setEditModalOpen(false);
          alert('Incidencia actualizada correctamente');
        } else {
          alert('Error al actualizar en el servidor');
        }
      })
      .catch(error => {
        console.error("Error al editar:", error);
        alert('Error de conexión con el backend.');
      });
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
            // 4. CAMBIAMOS EL ALERT POR LA FUNCIÓN HANDLE-EDIT
            onEdit={() => handleEdit(inc)} 
            onDelete={handleDelete}
          />
        ))}
      </div>

      {filteredIncidencias.length === 0 && (
        <p className="text-center text-gray-500 py-12">No se encontraron incidencias</p>
      )}

      {/* Modal de Eliminar */}
      <DeleteModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onConfirm={confirmDelete} 
        incidencia={selectedIncident} 
      />

      {/* 5. AGREGAMOS EL MODAL DE EDITAR AL FINAL */}
      <EditModal 
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={confirmEdit}
        incidencia={incidentToEdit}
       />
    </div>
  );
};

export default IncidentsList;