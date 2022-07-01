import React from 'react'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div style={{display: 'flex', height: '70vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <p>Sorry !! Page Not Found</p>
      <Link to={`/`}>Home</Link>
    </div>
  )
}
