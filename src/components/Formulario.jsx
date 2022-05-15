import { useState, useEffect } from 'react'
import Error from './Error'

function Formulario({ pasientes, setPasientes, pasiente, setPasiente }) {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintoma, setSintoma] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(pasiente).length > 0){
      setNombre(pasiente.nombre)
      setPropietario(pasiente.propietario)
      setEmail(pasiente.email)
      setFecha(pasiente.fecha)
      setSintoma(pasiente.sintoma)
    }
  }, [pasiente])

  
  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //Validación del formulario
    if([nombre, propietario, email, fecha, sintoma].includes(''))
    {
      console.log('Hay al menos un campo vacio')
      setError(true)
      return
    }
    
    setError(false)

    // Object de Pacientes
    const objectPasiente = {
      nombre,
      propietario,
      email,
      fecha,
      sintoma
    }

    if(pasiente.id){
      // Editando registro
      objectPasiente.id = pasiente.id

      const pacientesActualizados = pasientes.map(pasienteState => pasienteState.id === pasiente.id ? objectPasiente : pasienteState)
      setPasientes(pacientesActualizados)
      setPasiente({})
    }else{
      // Nuevo Registro
      objectPasiente.id = generarId()
      setPasientes([...pasientes, objectPasiente])
    }

    //Reiniciar el form
    setNombre('')
    setEmail('')
    setPropietario('')
    setFecha('')
    setSintoma('')

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pasientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Paciente y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>

        {error && <Error><p>Todos los campos son obligatorios</p></Error> }

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="mascota" placeholder="Nombre de la Mascota" value={nombre} onChange={ (e) => setNombre(e.target.value) }/>
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="propietario" placeholder="Nombre del Propietario" value={propietario} onChange={ (e) => setPropietario(e.target.value) } />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input type="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="email" placeholder="Correo Electrónico" value={email} onChange={ (e) => setEmail(e.target.value) }/>
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input type="date" className="border-2 w-full p-2 mt-2 rounded-md" id="alta"  value={fecha} onChange={ (e) => setFecha(e.target.value) }/>
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
          <textarea name="" id="sintomas" cols="30" rows="3" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los Síntomas" value={sintoma} onChange={ (e) => setSintoma(e.target.value) }/>
        </div>
        <input 
          type="submit" 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
          value={pasiente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  )
}

export default Formulario