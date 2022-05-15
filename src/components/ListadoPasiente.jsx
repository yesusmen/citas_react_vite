
import Pasiente from "./Pasiente"

function ListadoPasiente({pasientes, setPasiente, eliminadoPaciente}) {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pasientes && pasientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pasiente</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pasientes.map( (paciente) => (
            <Pasiente
              key={paciente.id} 
              paciente={paciente}
              setPasiente={setPasiente}
              eliminadoPaciente={eliminadoPaciente}
            />
          ))}
        </>
      ) : (

        <>
          <h2 className="font-black text-3xl text-center">No Hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
        </>

      )}
     

      
      
      
    </div>
  )
}

export default ListadoPasiente