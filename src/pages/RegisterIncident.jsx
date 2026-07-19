import IncidentForm from '../components/IncidentForm';

const RegisterIncident = () => {
  const handleSubmit = (data) => {
    
    // Aquí se conectará con el backend más adelante / --> conectando la PETICIÓN POST para comunicarse con el servidor
    fetch('http://localhost:8080/incidencias', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // enviamos formato JSON
      },

      body: JSON.stringify(data)
    })
      .then(respuesta => {
        if (respuesta.ok) {
          alert('¡Incidencia Registrada con éxito la base de datos!');

          // aqui recargamos la pagina para limpiar el formulario, tal como lo teniamos
          window.location.reload();
        }
      })
      .catch(error => {
        console.error('Error al guardar en el backend:', error);
        alert('Hubo un error al registrar la incidencia.');
      });
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
