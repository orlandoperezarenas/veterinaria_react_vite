import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre]= useState('')
  const [propietario, setPropietario]= useState('')
  const [email, setEmail]= useState('')
  const [alta, setAlta]= useState('')
  const [sintoma, setSintoma]= useState('')

  const [error,setError]=useState(false)  
  useEffect(()=>{
    if(Object.keys(paciente).length>0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintoma(paciente.sintoma)
    }else{
    }
  },[paciente])

  const generarId = ()=>{
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    return random+fecha
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    //validacion del form
    if([nombre, propietario, email, alta, sintoma].includes('')){
      setError(true)
      return
    }
    setError(false)

    const objPaciente ={nombre, propietario, email, alta, sintoma}

    if(paciente.id){
      //siginifica que estmaos editando
      objPaciente.id=paciente.id
      const pacienteAct = pacientes.map((pacienteState)=>{
        return pacienteState.id == paciente.id?objPaciente:pacienteState
      })

      setPacientes(pacienteAct)
      setPaciente({})

    }else{
      //estamos creando
      objPaciente.id= generarId()
      setPacientes([...pacientes, objPaciente])
    }
 

    //reiniciar el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintoma('')
  }
  return (
    <div className="mx-5 md:w-1/2 lg:2/5">
      <h2 className="font-black text-3xl text-center ">Seguimiento Pacientes</h2>
      <p className=" text-lg mt-5 text-center mb-10">Añade pacientes y {' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" action="">
          
          {error && <Error><p>Todos los campos son obligatorios</p></Error>}
      
        <div className="mb-5">
          <label htmlFor="nombremascota_input" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input value={nombre} onChange={(e)=>{setNombre(e.target.value)}} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" name="" id="nombremascota_input" placeholder="Nombre de la mascota"/>
        </div>
        <div className="mb-5">
          <label htmlFor="nombrepropietario_input" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input value={propietario} onChange={(e)=>{setPropietario(e.target.value)}} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" name="" id="nombrepropietario_input" placeholder="Nombre del propietario"/>
        </div>
        <div className="mb-5">
          <label htmlFor="emailpropietario_input" className="block text-gray-700 uppercase font-bold">Email Propietario</label>
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" name="" id="emailpropietario_input" placeholder="Email del propietario"/>
        </div>
        <div className="mb-5">
          <label htmlFor="alta_input" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input value={alta} onChange={(e)=>{setAlta(e.target.value)}}  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" name="" id="alta_input"/>
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas_input" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea  value={sintoma} onChange={(e)=>{setSintoma(e.target.value)}} name="" id="sintomas_input" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas"></textarea>
        </div>
        <input type="submit" name="" id=""  
        className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all" 
        value={!paciente.id?'Registrar mascota':'Editar mascota'}/>
      </form>
    </div>
  )
}

export default Formulario
