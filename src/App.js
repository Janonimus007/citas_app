import Formulario from "./components/Formulario"
import React,{useState,useEffect} from 'react'
import Cita from "./components/Cita"
function App() {
  //citas en local storage
  let citasIniciales=JSON.parse(localStorage.getItem("citas"))
  if(!citasIniciales){
    citasIniciales=[]
  }
  //Arreglo de citas{}
  const [citas, guardarCitas] = useState([])
  //useEfect para realizar cambios cuando se toque a citas
  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem("citas",JSON.stringify(citas))
    }else{
      localStorage.setItem("citas",JSON.stringify([]))
    }
  }, [citas])

  //Funcion que tome las citas anuales y agreguen una nueva
  const crearCita = cita =>{
    guardarCitas([
      ...citas,
      cita
    ])
  }
  //Funcion que elimina una cita por su 
  const eliminarCita=id=>{
    const nuevasCitas =citas.filter(cita=>cita.id!==id)
    guardarCitas(nuevasCitas)
  }
  return (
    <>
    <h1>administrador de pacientes</h1>
    <div className = "container">
      <div className="row">
        <div className="one-half column" >
            <Formulario
             crearCita={crearCita}
             
            />
        </div>
        <div className="one-half column" >
          {citas.length >0 ? <h2>administrar citas</h2>:<h2>no hay citas </h2>}
            {citas.map(cita =>(
             <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
             /> 
            ))}
        </div>

      </div>

    </div>
    </>
  );
}

export default App;
