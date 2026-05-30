import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hola Mundo</h1>
    <p>Esto es un párrado</p>
  </StrictMode>,
);
