import { useState, useEffect } from 'react';
import DashboardStats from '../components/DashboardStats';
import IncidentCard from '../components/IncidentCard';
import DeleteModal from '../components/DeleteModal';
import LoadingSpinner from '../components/LoadingSpinner';
import EditModal from '../components/EditModal';

const Dashboard = () => {
  const [incidencias, setIncidencias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState(null);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [incidentToEdit, setIncidentToEdit] = useState(null);

  // Datos de ejemplo (puedes reemplazar con llamada a backend)  / OKEY : aqui pongo el consumo de la API REST simulada
  // petición real
  useEffect(() => {
    fetch('http://localhost:8080/incidencias')
       .then(respuesta => respuesta.json())
       .then(datos => {
          setIncidencias(datos);
          setLoading(false);
       })
       .catch(error => {
        console.error("Error al cargar las incidencias", error);
        setLoading(false);
       });
  }, []);


  // ----------- LÓGICA DE ELIMINAR --------------
  const handleDelete = (incidencia) => {
    setSelectedIncident(incidencia);
    setModalOpen(true);
  };

 // eliminación real 
  const confirmDelete = () => {

    // aqui tomamos el id de la incidencia que el modal tiene seleccionada
    const id = selectedIncident.id;

    // ejecutamos la peticion (DELETE) hacia nuestra url
    fetch(`http://localhost:8080/incidencias/${id}`, {
      method: 'DELETE',
    })
      .then(respuesta => {
        if (respuesta.ok) {
          // si el servidor confirmaa que se borró el dato, actualizamos la pantalla
          setIncidencias(incidencias.filter(i => i.id !== id));
          setModalOpen(false);  // <--- cerramos el modal
          alert('Incidencia eliminada correctamente de la base de datos');
        } else {
          alert('Hubo un problema al intentar eliminar la incidencia en el servidor.');
        }
      })
      .catch(error => {
        console.error("Error al eliminar:", error);
        alert('Error de conexión con el backend.');
      });
  };


// ----------- LÓGICA DE EDITAR ---------------
  const handleEdit = (incidencia) => {
    setIncidentToEdit(incidencia);
    setEditModalOpen(true);
  };

  const confirmEdit = (incidenciaActualizada) => {
    // usamos el PUT y enviamos el JSON con los datos nuevos
    fetch(`http://localhost:8080/incidencias/${incidenciaActualizada.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(incidenciaActualizada),
    })
      .then(respuesta => {
        if (respuesta.ok) {
          // actualizamos la incidencia modificada en la pantalla
          setIncidencias(incidencias.map(inc => 
            inc.id === incidenciaActualizada.id ? incidenciaActualizada : inc
          ));
          setEditModalOpen(false); // Cerramos el modal
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
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <DashboardStats incidencias={incidencias} />

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Incidencias Recientes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {incidencias.map(inc => (
            <IncidentCard 
              key={inc.id} 
              incidencia={inc} 
              onEdit={() => handleEdit(inc)}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      {/*Modal de Eliminar*/}
      <DeleteModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onConfirm={confirmDelete} 
        incidencia={selectedIncident} 
      />

      {/*Moda de Editar*/}
      <EditModal 
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={confirmEdit}
        incidencia={incidentToEdit}
       />
    </div>
  );
};

export default Dashboard;
