import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import DataDetailGPS from '../pages/DataDetailGPS'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='detail' element={<DataDetailGPS />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default router