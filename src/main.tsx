import React from 'react'
import { createRoot } from 'react-dom/client'

// import router from '@/router'
import '@/style'
import App from '@/App'
import { RouterProvider, BrowserRouter } from 'react-router-dom'

createRoot(document.querySelector('#root') as Element)
.render(
  // <RouterProvider router={ router } />
  <BrowserRouter>
    <App />
  </BrowserRouter>
)