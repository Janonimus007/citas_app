import React,{useState} from 'react'
import uuid from 'uuid/dist/v4'
const Formulario = ({crearCita}) => {
    //Crear State de Citas
    const [cita, actualizarCita]= useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })
    const [error , actualizarerror] = useState(false)
    //Funcion que se ejecuta cada que el usuario escribe en un input
   const actualizarState = e =>{
       actualizarCita({
           ...cita,
           [e.target.name]:e.target.value
       })
   }

   // Extrar los valores
   const {mascota,propietario,fecha,hora,sintomas} = cita;
   
   //cuando el usuario presiona agregar cita
   const submitCita = e => {
       e.preventDefault();
       //validar
       if(mascota.trim() === '' || propietario.trim() === ''|| fecha.trim() === ''|| hora.trim() === '' || sintomas.trim() === ''){
         actualizarerror(true);
         return;
       }
       //Eliminar el mensaje previo
       actualizarerror(false)
       //asignar un ID
       cita.id= uuid();
       //Crear la cita
       crearCita(cita);
       //Reiniciar el form
       actualizarCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
       })
   }
    return (
        <>
        <h2>Crear Cita</h2>
        {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> :null}
        <form onSubmit={submitCita}>
            <label>Nombre Mascota</label>
            <input
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre Mascota"
            onChange={actualizarState}
            value={mascota}/>
            <label>Nombre Dueño</label>
            <input
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre Dueño de la Mascota"
            onChange={actualizarState}
            value={propietario}/>
            <label>Fecha</label>
            <input
            type="date"
            name="fecha"
            className="u-full-width"
            onChange={actualizarState}
            value={fecha}/>
            <label>Hora</label>
            <input
            type="time"
            name="hora"
            className="u-full-width"
            onChange={actualizarState}
            value={hora}/>
             <label>Sintomas</label>
            <textarea
            name="sintomas"
            className="u-full-width"
            onChange={actualizarState}
            value={sintomas}/>
            <button 
            type="submit"
            className="u-full-width button-primary">Agregar cita</button>
        </form>
        </>
    )
}

export default Formulario