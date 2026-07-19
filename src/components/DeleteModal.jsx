const DeleteModal = ({ isOpen, onClose, onConfirm, incidencia }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl">
        <h3 className="text-2xl font-bold text-red-600 mb-4">¿Eliminar Incidencia?</h3>
        
        <p className="text-gray-600 mb-6">
          ¿Estás seguro de eliminar la incidencia <strong>{incidencia?.codigo}</strong>?
          <br />
          Esta acción no se puede deshacer.
        </p>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-4 bg-gray-100 hover:bg-gray-200 rounded-2xl font-medium transition"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-medium transition"
          >
            Sí, Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;