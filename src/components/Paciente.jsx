const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {   
    const {nombre} = paciente
    const {email} = paciente
    const {propietario} =paciente
    const {alta} = paciente
    const {sintoma} =paciente
    const {id} =paciente

    const handleEliminar=()=>{
      const respuesta=confirm('Deseas elimnar esta macosta?')
      if(respuesta) eliminarPaciente(id)
    }
    
  return (
    <div className="m-3 bg-white shodow-md px-5 py-10 rounded-xl" >
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
          <span className="font-normal normal-case">
            {nombre}
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
          <span className="font-normal normal-case">
          {propietario}
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
          <span className="font-normal normal-case">
          {email}
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {' '}
          <span className="font-normal normal-case">
          {alta}
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
          <span className="font-normal normal-case">
            {sintoma}
          </span>
        </p>

        <div className="flex justify-between mt-10">
            <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" 
                type="button"
                onClick={()=>{setPaciente(paciente)}}
                >
                Editar            
            </button>
            <button  className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" 
              type="button"
              onClick={handleEliminar}
              >
                Eliminar
            </button>
        </div>
      </div>
  )
}

export default Paciente
