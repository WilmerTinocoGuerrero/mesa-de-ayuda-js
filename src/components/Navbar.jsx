import { Link, useLocation } from 'react-router-dom';
import { Wrench } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-md">
  <Wrench size={28} />
</div>
          <div>
            <h1 className="text-2xl font-bold text-red-700">Mesa de Ayuda</h1>
            <p className="text-xs text-gray-500 -mt-1">Universidad Tecnológica del Perú</p>
          </div>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium">
          <Link to="/" className={`transition-colors ${isActive('/') ? 'text-red-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}>
            Dashboard
          </Link>
          <Link to="/registrar" className={`transition-colors ${isActive('/registrar') ? 'text-red-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}>
            + Nueva Incidencia
          </Link>
          <Link to="/incidencias" className={`transition-colors ${isActive('/incidencias') ? 'text-red-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}>
            Todas las Incidencias
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;