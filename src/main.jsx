import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import AppT from './components/AppT'
import './styles/index.css'

const root = document.getElementById('root')

createRoot(root).render(
  <React.StrictMode>
    <AppT />
  </React.StrictMode>
)
