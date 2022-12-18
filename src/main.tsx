import React from 'react'
import ReactDOM from 'react-dom/client'
import Global from './assets/global'
import { Home } from './pages/Home/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global/>
    <Home />
  </React.StrictMode>
)
