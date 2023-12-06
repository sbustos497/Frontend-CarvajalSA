

import 'bootstrap/dist/css/bootstrap.min.css';
import './CardContact.css';
import { deleteContacto, getContactos, putContacto } from '../../API/Contactos';


    
  import { useState } from 'react';

  export const CardContact = (contacto={contacto}) => {
        const [modalData, setModalData] = useState(contacto);

    const onDelete = () => {
      deleteContacto(contacto.id).then(() => {
        getContactos().then((data) => {
          console.log(data);
          window.location.reload();
        });
      });
    };
  

    const handleEdit = () => {
      console.log(modalData);
      // Aquí puedes hacer la petición PUT
      putContacto(modalData).then(() => {
        getContactos().then((data) => {
          console.log(data);
          window.location.reload();
        });
      });

    };

    return (
      <>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">
              {contacto.nombre} {contacto.apellido}
            </h3>

            <p className="card-text">Correo electrónico: {contacto.correo}</p>
            <p className="card-text">Teléfono: {contacto.telefono}</p>
            <p className="card-text">Celular: {contacto.celular}</p>
            <p className="card-text">Dirección: {contacto.direccion}</p>
          </div>

          <div className="buttons">
            <button
              className="btn btn-primary "
              data-bs-toggle="modal"
              data-bs-target={`#exampleModa2-${contacto.id}`}
              onClick={() => setModalData(contacto)}
            >
              Editar
            </button>
            <button className="btn btn-danger" onClick={onDelete}>
              Eliminar
            </button>
          </div>
        </div>

        {/* Aquí va tu modal */}
        <div className="modal fade" id= {`exampleModa2-${contacto.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Editar Contacto</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* Aquí puedes mostrar los datos en el modal */}
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" value={modalData.nombre} onChange={(e) => setModalData({ ...modalData, nombre: e.target.value })} />
                  <label htmlFor="apellido" className="form-label">Apellido</label>
                  <input type="text" className='form-control' id="apellido" aria-describedby="emailHelp" value={modalData.apellido} onChange={(e) => setModalData({ ...modalData, apellido: e.target.value })} />
                  <label htmlFor="correo" className="form-label">Correo</label>
                  <input type="text" className='form-control' id="correo" aria-describedby="emailHelp" value={modalData.correo} onChange={(e) => setModalData({ ...modalData, correo: e.target.value })} />
                  <label htmlFor="telefono" className="form-label">Telefono</label>
                  <input type="text" className='form-control' id="telefono" aria-describedby="emailHelp" value={modalData.telefono} onChange={(e) => setModalData({ ...modalData, telefono: e.target.value })} />
                  <label htmlFor="celular" className="form-label">Celular</label>
                  <input type="text" className='form-control' id="celular" aria-describedby="emailHelp" value={modalData.celular} onChange={(e) => setModalData({ ...modalData, celular: e.target.value })} />
                  <label htmlFor="direccion" className="form-label">Direccion</label>
                  <input type="text" className='form-control' id="direccion" aria-describedby="emailHelp" value={modalData.direccion} onChange={(e) => setModalData({ ...modalData, direccion: e.target.value })} />

                   
                </div>
                
                {/* Agrega los demás campos aquí */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-primary" onClick={handleEdit}>Guardar cambios</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
