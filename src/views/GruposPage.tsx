import { useEffect } from "react"
import { useContactoStore } from "../store"
import Spinner from "../components/Spinner"
import { Link } from "react-router-dom"

export default function GruposPage() {
    const obtenerContactosAgrupados = useContactoStore((state) => state.obtenerContactosAgrupados)
    const contactosAgrupados = useContactoStore((state) => state.contactosAgrupados)
    const spinner = useContactoStore((state) => state.spinner)
    const setActiveId = useContactoStore((state) => state.setActiveId)


    useEffect(()=>{

        obtenerContactosAgrupados()

    }, [])

    const handleClick = (id : number) => {
        setActiveId(id)
    }

    return (
        <>
            <h1 className="mt-5">Grupos</h1>
            
            {spinner ? (
                <Spinner/>
            ) : (
                <section className="section-grupos">
                    
                    {contactosAgrupados.map(item => (
                        <div key={item.id} className="contenedor-grupos mt-3" id="grupos">
                            <div className="card">
                                <Link className="card_titulo" onClick={() => handleClick(item.id)} to="/listadoGrupos">{item.grupo}</Link>
                                <p className="card_cantidad">{item.cantidad} contacto(s)</p>
                                <div className="card_lista" id="lista">
                                    <ul className="listado">
                                        {item.contactos.map(contacto => (
                                            <li key={contacto.id}>{contacto.nombre}</li>
                                        ))}
                                        
                                    </ul>
                                </div>
            
                            </div>
            
                        </div>
                    ))}
    
                </section>
            )}
           
        </>
   
  )
}
