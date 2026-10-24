import { Routes, Route } from 'react-router'

import Inicio from './pages/Inicio.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes.jsx'
import logoHuellitas from './assets/images/logo-huellitas-de-shiro.png'

import MenuNavegacion from './components/MenuNavegacion.jsx'

import './App.css'

function App() {
  return (
    <div className="app">

      {/* Encabezado principal */}

      <header>
        <h1 className="marca-titulo">
          <img
            src={logoHuellitas}
            alt="Huellitas de Shiro - Tienda de mascotas"
            className="marca-logo"
          />
        </h1>

        <p>
          Todo para quienes dejan huellas en tu corazón.
        </p>
      </header>

      {/* Contenido principal */}

      <main>
        <Routes>
          <Route
            path="/"
            element={<Inicio />}
          />

          <Route
            path="/quienes-somos"
            element={<QuienesSomos />}
          />

          <Route
            path="/preguntas-frecuentes"
            element={<PreguntasFrecuentes />}
          />
        </Routes>
      </main>

      {/* Menú inferior */}

      <footer>
        <MenuNavegacion />
      </footer>

    </div>
  )
}

export default App