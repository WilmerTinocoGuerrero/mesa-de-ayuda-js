import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import RegisterIncident from './pages/RegisterIncident';
import IncidentsList from './pages/IncidentsList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/registrar" element={<RegisterIncident />} />
            <Route path="/incidencias" element={<IncidentsList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;