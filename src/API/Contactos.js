import axios from 'axios';

const API_URL = "https://node-practicas.onrender.com"

export const getContactos = async () => {
    return await axios.get(`${API_URL}/contactos`).then(
        (response) => {
            console.log(response.data);
            return response.data;
        }

    )
   
}

export const deleteContacto = async (id) => {
    
   //despues de eliminar volver a obtener los contactos
    return await axios.delete(`${API_URL}/contactos/${id}`).then(
         (response) => {
              console.log(response.data);
             
              return response.data;
         }
    )
   
}

export const postContacto = async (contacto) => {
    return await axios.post(`${API_URL}/contactos`, contacto).then(
        (response) => {
            console.log(response.data);
            return response.data;
        }
    )
   
}

export const putContacto = async (contacto) => {
    return await axios.put(`${API_URL}/contactos/${contacto.id}`, contacto).then(
        (response) => {
            console.log(response.data);
            return response.data;
        }
    )
   
}