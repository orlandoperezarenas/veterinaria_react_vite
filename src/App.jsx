import { useState, useEffect } from 'react'
import Header from './components/header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
const [pacientes, setPacientes] = useState([]) // for add part
const [paciente, setPaciente] = useState([]) //for edition part

  return (
    <div className="container mx-auto mt-20">
      <Header
      />
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>
      
    </div> 
  )
}

export default App
