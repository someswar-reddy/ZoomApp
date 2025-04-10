
import React from 'react'

const navbar = () => {
  return (
    <div style={{display:'flex', 
        justifyContent:'space-between',
        backgroundColor:'red',
        color:'white',
        paddingRight:'10px',
        paddingLeft:'10px'
    }}>
      <div>
      <h1>Somu App</h1>
      </div>
      <div>
      <h1>Login</h1>
      </div>
    </div>
  )
}

export default navbar