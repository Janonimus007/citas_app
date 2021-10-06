import React,{useState} from 'react'
import InputForm from './InputForm'
const Formulario = () => {
      const [cita, actualizarCita] = useState({
          mascota:"",
          propietario:"",
          fecha:"",
          hora:"",
          sintomas:""
      })
      const [error, actualizarError] = useState(false)
    const actualizarState = e => {
        actualizarCita({
          ...cita,
          [e.target.name]:e.target.value
        })
    }
    const{mascota,propietario,fecha,hora,sintomas}=cita
    const submitCita=e=>{
      e.preventDefault()
      //validar que todos los campos fueron rellenados
      if(mascota.trim()==="" || propietario.trim()===""||fecha.trim() ===""
      || hora.trim()===""||sintomas.trim()===""){
        actualizarError(true)
        return;
      }

    }
  return ( 
    <>
    {/* classname u-full-width 
    callname button  u-full-width  y button-primary */}
    <h2>Agendar cita</h2>
    {error?<p className="alerta-error">Todos los campos son obligatorios</p>:null}
    <form
      onSubmit={submitCita}
    >
    <InputForm
    label="mascota"
    type="text"
    className="u-full-width"
    name="mascota"
    placeholder="ingresa el nombre de tu mascota"
    onChange={actualizarState}
    value={mascota}
    />
       
    
      <label>Nombre Dueño</label>
      <input
        placeholder="ingresar nombre de dueño"
        className="u-full-width"
        type="text"
        name="propietario"
        onChange={actualizarState}
        value={propietario}
      />
     <label>Fecha</label>
      <input
        name="fecha"
        className="u-full-width"
        type="date"
        onChange={actualizarState}
        value={fecha}
      />
     <label>Hora</label>
      <input
        name="hora"
        className="u-full-width"
        type="time"
        onChange={actualizarState}
        value={hora}      />
      <label>Sintomas</label>
      <textarea
      name="sintomas"
      className="u-full-width"
      placeholder="ingresar sintomas de la mascota"
      onChange={actualizarState}
      value={sintomas}
      ></textarea>
      <button className="u-full-width button-primary"
      value="submit"
      >Agregar Cita</button>
    </form>
    </>
   );
}
 
export default Formulario;