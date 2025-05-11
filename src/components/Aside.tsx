import { NavLink } from "react-router-dom";

export default function Aside() {
  return (
    <aside className="aside">

      <ul className="aside_listado">

          <NavLink to="/" className="list-item">
              Contactos
          </NavLink>
        
          <NavLink to="/contactos" className="list-item">
              Nuevo Contacto
          </NavLink>
          
          <NavLink to="/grupos" className="list-item">
              Grupos
          </NavLink>
          
      </ul>
    </aside>
  )
}
