import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Calendar } from './pages/Calendar';
import { Services } from './pages/Services';
import { Stats } from './pages/Stats';
import { Config } from './pages/Config';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendario" element={<Calendar />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/estadisticas" element={<Stats />} />
      <Route path="/configuracion" element={<Config />} />
    </Routes>
  )
}

export default App
