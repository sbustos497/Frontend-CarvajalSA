import "bootstrap/dist/css/bootstrap.min.css"
import {postContacto } from '../../API/Contactos'
export function Modal() {

        const handleSave = () => {
                const nombre = document.getElementById('nombre').value;
                const apellido = document.getElementById('apellido').value;
                const correo = document.getElementById('correo').value;
                const telefono = document.getElementById('telefono').value;
                const celular = document.getElementById('celular').value;
                const direccion = document.getElementById('direccion').value;

                const contacto = {
                        nombre,
                        apellido,
                        correo,
                        telefono,
                        celular,
                        direccion
                };

                postContacto(contacto).then(() => {
                         console.log('contacto guardado')
                         console.log(contacto)
                        window.location.reload();
                })
        }


        
        
        return (
                <>
                 
                 <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Agregar Contacto
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Agregar Contacto</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="nombre" className="form-label">Nombre</label>
                                        <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="apellido" className="form-label">Apellido</label>
                                        <input type="text" className="form-control" id="apellido" aria-describedby="emailHelp" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="correo" className="form-label">Correo</label>
                                        <input type="email" className="form-control" id="correo" aria-describedby="emailHelp" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="telefono" className="form-label">Telefono</label>
                                        <input type="text" className="form-control" id="telefono" aria-describedby="emailHelp" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="celular" className="form-label">Celular</label>
                                        <input type="text" className="form-control" id="celular" aria-describedby="emailHelp" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="direccion" className="form-label">Direccion</label>
                                        <input type="text" className="form-control" id="direccion" aria-describedby="emailHelp" />
                                    </div>
                                </form>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-primary" onClick={handleSave}>Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </>



        )
}

export default Modal

