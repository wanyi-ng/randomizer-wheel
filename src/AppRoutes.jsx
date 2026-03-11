import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import CreateWheel from './pages/CreateWheel'
import Error404 from './pages/Error404'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/create' element={<CreateWheel />} />

      <Route path='*' element={<Error404/>} />
    </Routes>
  )
}
