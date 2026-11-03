
import { Routes, Route, Navigate } from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'

import Inicio from './pages/Inicio.jsx'
import Acceso from './pages/Acceso.jsx'
import Lugar from './pages/Lugar.jsx'
import Propietario from './pages/Propietario.jsx'
import Cliente from './pages/Cliente.jsx'
import Administrador from './pages/Administrador.jsx'

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acceso" element={<Acceso />} />
        <Route path="/lugar/:id" element={<Lugar />} />
        <Route path="/propietario" element={<Propietario />} />
        <Route path="/cliente" element={<Cliente />} />

        {/* Apartado de administrador */}
        <Route
          path="/administrador"
          element={<Administrador />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
      <Toast />
    </>
  )
}
