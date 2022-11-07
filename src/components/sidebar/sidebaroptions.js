import React from 'react'
import './sidebaroptions.css'

const SidebarOptions = ({ id, setId, active, Icons, text, curId }) => {
  return (
    <div className="sidebaroptions" onClick={() => setId(id)}>
      <Icons className={`svg ${curId == id && 'active-sidebar'}`} />
      <p className={`${curId === id ? 'active-p' : null}`}>{text}</p>
    </div>
  )
}

export default SidebarOptions
