import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // ayuda principalmente a indentificar componentes que tienen problemas
  <React.StrictMode>  
    <GifExpertApp />
  </React.StrictMode>,
);



