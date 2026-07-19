const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 animate-fade-in">
      <div className="w-14 h-14 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>

      <p className="mt-4 text-gray-500 font-medium animate-pulse">
        Cargando información...
      </p>
    </div>
  );
};

export default LoadingSpinner;
