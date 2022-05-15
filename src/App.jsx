import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPasiente from "./components/ListadoPasiente"
import './index.css'

function App() {
  const [pasientes, setPasientes] = useState([])
  const [pasiente, setPasiente] = useState({})


  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPasientes(pacientesLS);
    }

    obtenerLS()

  }, [])


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pasientes ))
  }, [pasientes])


  const eliminadoPaciente = (id) => {
    const pacientesActualizados = pasientes.filter(paciente => paciente.id !== id)
    setPasientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pasientes={pasientes}
          setPasientes={setPasientes}
          pasiente={pasiente}
          setPasiente={setPasiente}
        />
        <ListadoPasiente
          pasientes={pasientes}
          setPasiente = {setPasiente}
          eliminadoPaciente={eliminadoPaciente}
        />
      </div>
    </div>
  )
}

export default App
