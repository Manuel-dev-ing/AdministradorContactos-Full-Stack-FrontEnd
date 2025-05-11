import { useEffect, useState } from "react";
import { gruposDeContactos } from "../data";
import Alert from "../components/Alert";
import { Contacto } from "../types";
import { useContactoStore } from "../store";
import { useNavigate } from "react-router-dom";

const initialState = {
  Nombre: "",
  Email: "",
  Telefono: "",
  IdGrupo: 0
}


export default function ContactosPage() {
  const [form, SetForm] = useState<Contacto>(initialState)
  const [alert, SetAlert] = useState('')
  const [isVisible, SetisVisible] = useState(false)
  const navigate = useNavigate();

  const guardarContacto = useContactoStore((state) => state.guardarContacto)
  const obtenerGrupos = useContactoStore((state) => state.obtenerGrupos)
  const grupos = useContactoStore((state) => state.grupos)
  const isOK = useContactoStore((state) => state.isOK)
  const activeId = useContactoStore((state) => state.activeId)
  const contacto = useContactoStore((state) => state.contacto)
  const actualizarContacto = useContactoStore((state) => state.actualizarContacto)

  

  useEffect(() => {
    
    obtenerGrupos()

    if (activeId === contacto.id) {
      SetForm({
        Nombre: contacto.nombre,
        Email: contacto.email,
        Telefono: contacto.telefono,
        IdGrupo: contacto.idGrupo
      })

      return
    }
  }, [activeId])

  useEffect(()=>{

    if (isOK) {
      navigate("/")
      return
    }

  }, [isOK])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {

    SetForm({
      ...form,
      [e.target.id]: e.target.value

    })

  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (Object.values(form).includes('')) {
      SetAlert('Todos los campos son requeridos')
      SetisVisible(true)
      return
    }    
    if (activeId) {
      console.log("actualizar");

      actualizarContacto(contacto.id, form)
      return
    }
    guardarContacto(form)
    

  }

  return (
        <section className="formulario mt-5">
            <form className="formulario-contacto form" onSubmit={handleSubmit}>
            {isVisible && <Alert>{alert}</Alert>}
                <h2 className="mb-2">Agregar Contacto</h2>
                <div className="form-field form-field-nombre">
                    <label className="mb-1" htmlFor="Nombre">Nombre</label>
                    <input className="input-form" name="Nombre" type="text" id="Nombre" onChange={handleChange} value={form.Nombre}/>
                </div>
                <div className="form-field">
                    <label className="mb-1" htmlFor="Email">Email</label>
                    <input className="input-form" name="Email" type="email" id="Email" onChange={handleChange} value={form.Email}/>
                </div>
                <div className="form-field">
                    <label className="mb-1" htmlFor="Telefono">Telefono</label>
                    <input className="input-form" name="Telefono" type="tel" id="Telefono" onChange={handleChange} value={form.Telefono} />
                </div>
                <div className="form-field">
                    <label className="mb-1" htmlFor="IdGrupo">Grupo</label>
                    {/* <input className="input-form" name="grupo" type="text" id="grupo" /> */}
                    <select className="input-form" name="IdGrupo" id="IdGrupo" onChange={handleChange} value={form.IdGrupo} >
                      <option value="">--Seleccione--</option>
                      {grupos.map(grupo => (
                        <option key={grupo.id} value={grupo.id}>{grupo.nombre}</option>
                      ))}
                    </select>

                </div>

                <button className="btn-dark flex" type="submit"> <img src="/public/add_icon.svg" /> Agregar Contacto</button>
            </form>

        </section>
  )
}
