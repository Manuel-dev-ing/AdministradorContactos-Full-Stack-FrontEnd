import { useEffect } from "react"
import { useContactoStore } from "../store"
import { Link } from "react-router-dom"
import Spinner from "../components/Spinner"

export default function IndexPage() {
    const obtenerContactos = useContactoStore((state) => state.obtenerContactos)
    const eliminarContacto = useContactoStore((state) => state.eliminarContacto)
    const obtenerElementoPorId = useContactoStore((state) => state.obtenerElementoPorId)
    const contactos = useContactoStore((state) => state.contactos)
    const spinner = useContactoStore((state) => state.spinner)
    
    
    useEffect(() => {
        
        obtenerContactos()
        
    }, [])

    console.log(contactos);
    
    
  return (
    <>

        {spinner ? 
            (
                <Spinner />
            ): ( 
                <section className="section-dataTable mt-5">

                    <div className="buttons-header mb-1">
                        <input type="text" className="input-form" placeholder="Filtrar contactos..."/>
                    </div>

                    <table className="table" id="datatable">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Telefono</th>
                                <th>Grupo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="listado-contactos">
                            {contactos.map(item => (
                                <tr key={item.id}>
                                    <td>{item.nombre}</td>
                                    <td>{item.email}</td>
                                    <td>{item.telefono}</td>
                                    <td>
                                        <span className="grupo">{item.grupo}</span>
                                    </td>
                                    <td className="td-acciones">
                                        
                                        <Link to="/contactos" className="accion editar" onClick={() => obtenerElementoPorId(item.id)} title="Editar">
                                            <img src="/public/edit_square.svg" alt="Editar Contacto" />
                                        </Link>
                                    
                                    
                                        <a className="accion eliminar" title="Eliminar" onClick={() => eliminarContacto(item.id)}>
                                            <img src="/public/delete.svg" alt="Eliminar Contacto" />
                                    </a>
                                        
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </section>
            )
        }

    </>
   
  )
}
