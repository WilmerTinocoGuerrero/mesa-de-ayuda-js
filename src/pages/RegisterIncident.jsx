import IncidentForm from '../components/IncidentForm';

const RegisterIncident = () => {
  const handleSubmit = (data) => {
    // Aquí se conectará con el backend más adelante
    console.log('Incidencia registrada:', data);
    alert('¡Incidencia registrada con éxito!');
    
    // Limpiar formulario (opcional)
    window.location.reload();
  };

return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Registrar Incidencia</h1>
        <p className="text-gray-600">Completa los datos de la nueva incidencia técnica</p>
      </div>

      <IncidentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegisterIncident;
