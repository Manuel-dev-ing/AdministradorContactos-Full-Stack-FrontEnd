import React, { useEffect } from 'react'
import { useContactoStore } from '../store'

export default function ListadoGruposPage() {
  const obtenerlistadoGrupos = useContactoStore((state) => state.obtenerlistadoGrupos)
  const gruposConContactos = useContactoStore((state) => state.gruposConContactos)


  useEffect(() => {

    obtenerlistadoGrupos()

  }, [])


  return (
    <>
      <h1 className='mt-5'>{gruposConContactos.nombre} ({gruposConContactos.contactos.length} persona(s))</h1>
      <section className="section-grupos">
        {gruposConContactos.contactos.map(grupo => (
          <div key={grupo.id} className="contenedor-grupos mt-3" id="grupos">
              <div className="card">
                  
                  <p className="card_titulo">Nombre: {grupo.nombre}</p>
                  <p className="card_titulo">Email: {grupo.email}</p>
                  <p className="card_titulo">Telefono: {grupo.telefono}</p>
              </div>

          </div>
        ))}
      </section>
    </>
  )
}
