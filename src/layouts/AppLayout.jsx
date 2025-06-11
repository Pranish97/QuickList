import React from 'react'
import Navigation from '../components/Navigation'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='app-layout'>
        <Navigation /> 
        <Outlet/>
    </div>
  )
}

export default AppLayout