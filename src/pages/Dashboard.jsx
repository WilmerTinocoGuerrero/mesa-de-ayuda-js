import { useState, useEffect } from 'react';
import DashboardStats from '../components/DashboardStats';
import IncidentCard from '../components/IncidentCard';
import DeleteModal from '../components/DeleteModal';
import LoadingSpinner from '../components/LoadingSpinner';

const Dashboard = () => {
  const [incidencias, setIncidencias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState(null);

  // Datos de ejemplo (puedes reemplazar con llamada a backend)  / OKEY : aqui pongo el consumo de la API REST simulada
  // petición real
  useEffect(() => {
    fetch('http://localhost:3000/incidencias')
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

  const handleDelete = (incidencia) => {
    setSelectedIncident(incidencia);
    setModalOpen(true);
  };

  const confirmDelete = () => {
    setIncidencias(incidencias.filter(i => i.id !== selectedIncident.id));
    setModalOpen(false);
    alert('Incidencia eliminada correctamente');
  };

  if (loading) return <LoadingSpinner />;

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
              onEdit={() => alert('Editar ' + inc.codigo)}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      <DeleteModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onConfirm={confirmDelete} 
        incidencia={selectedIncident} 
      />
    </div>
  );
};

export default Dashboard;
