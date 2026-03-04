import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import { TurnoProvider } from './context/turno.context.tsx';
import { ServiceProvider } from './context/service.context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TurnoProvider>
      <ServiceProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ServiceProvider>
    </TurnoProvider>

  </StrictMode>,
)
