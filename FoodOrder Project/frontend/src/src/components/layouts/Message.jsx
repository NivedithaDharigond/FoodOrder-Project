import React from 'react'

export default function Message({variant , children}) {
  return (
    <div className={`alert alert-$i{variant}`} >{children}</div>

  )
  
}