
const Pasiente = ({paciente, setPasiente, eliminadoPaciente}) => {

  const {nombre, propietario, email, fecha, sintoma, id} = paciente

  const handleEliminar = () => {
    const repuesta = confirm('deseas eliminar este paciente')
    if (repuesta){
      eliminadoPaciente(id)
    }
  }

  return (
    <div className="mx-5 bg-white px-5 py-10 rounded-lg mb-10">
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
            <samp className="font-normal normal-case">{nombre}</samp>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
            <samp className="font-normal normal-case">{propietario}</samp>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {''}
            <samp className="font-normal normal-case">{email}</samp>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha Alta: {''} 
            <samp className="font-normal normal-case">{fecha}</samp>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Síntomas: {''}
            <samp className="font-normal normal-case">{sintoma}</samp>
          </p>
          <div className="flex justify-between mt-10">
            <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase rounded-lg" onClick={ () => setPasiente(paciente) }>
              Editar
            </button>
            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase rounded-lg" onClick={handleEliminar}>
              Eliminar
            </button>
          </div>
    </div>
  )
}

export default Pasiente