
import { useEffect, useState } from 'react'
import { getContactos } from '../../API/Contactos'
import { CardContact , Modal } from '../../Components'

import './Crud.css'

export function Crud() {
  const [contactos, setContactos] = useState([])



  useEffect(() => {
    getContactos().then((data) => {
      console.log(data)
      setContactos(data)

    })
  }, [])




  return (
    <>

       <Modal/>

      <div className='container'>
        {contactos.map((contacto) => (
          <CardContact
            key={contacto.id}
            nombre={contacto.nombre}
            apellido={contacto.apellido}
            correo={contacto.correo}
            telefono={contacto.telefono}
            celular={contacto.celular}
            direccion={contacto.direccion}
            id={contacto.id}







          />

          
        ))}
      </div>


    </>
  )
}
