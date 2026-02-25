import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import { ClientProvider } from './context/ClientContext.tsx';
import { ServiceProvider } from './context/ServiceContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClientProvider>
      <ServiceProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ServiceProvider>
    </ClientProvider>

  </StrictMode>,
)
