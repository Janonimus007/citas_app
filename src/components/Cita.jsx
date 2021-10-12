import React from 'react'

const Cita = ({cita,eliminarCita}) => {
  return (
    <div className="cita">
      <p>Nombre mascota: {cita.mascota}</p>
      <p>Nombre dueño: {cita.propietario}</p>
      <p>fecha: {cita.fecha}</p>
      <p>hora: {cita.hora}</p>
      <p>sintomas: {cita.sintomas}</p>
      <button 
      className="button eliminar u-full-width"
      onClick={()=>eliminarCita(cita.id)}>Eliminar</button>

    </div>
  )
}
export default Cita