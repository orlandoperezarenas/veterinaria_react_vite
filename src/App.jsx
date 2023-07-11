import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
const [pacientes, setPacientes] = useState([]) // for add part
const [paciente, setPaciente] = useState([]) //for edition part

useEffect(()=>{
   console.log('First effects') 
   const obtenerLocalStorage=()=>{
    const pacientesLocalStorage= JSON.parse(localStorage.getItem('pacientes'))??[]
    setPacientes(pacientesLocalStorage)

    console.log(pacientesLocalStorage, 'sssss')
   }
   obtenerLocalStorage()
},[])

useEffect(()=>{
  localStorage.setItem('pacientes', JSON.stringify(pacientes))
    console.log('cambio pacientes')
},[pacientes])

const eliminarPaciente =(id)=>{
  const pacientesAct = pacientes.filter((paciente)=>{
    return paciente.id != id
  })

  setPacientes(pacientesAct)
  // console.log(pacientesAct, 'pacientesAct')
}

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
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      
    </div> 
  )
}

export default App