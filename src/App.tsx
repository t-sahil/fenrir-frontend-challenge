import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import { ScanDetail } from './pages/scans/ScanDetail';
import MainLayout from './components/layout/MainLayout';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scan/:id" element={<ScanDetail />} />
        </Route>

        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;