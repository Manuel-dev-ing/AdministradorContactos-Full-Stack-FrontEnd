import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { deleteContacto, getContactById, getContactos, getGroupbyId, getGroupedContacts, getGrupos, postContacto, updateContact } from "./services/ContactoService";
import { Contacto, ContactoGet, ContactoPostResponse, Contactos, ContactosAgrupados, Grupos, GruposConContactos } from "./types";


type ContactoStore = {
    contactos: Contactos
    contacto: ContactoGet
    contactosAgrupados: ContactosAgrupados
    gruposConContactos: GruposConContactos
    grupos: Grupos
    isOK: boolean
    spinner: boolean
    activeId: number
    setActiveId: (id: number) => void
    obtenerlistadoGrupos: () => Promise<void>
    obtenerGrupos: () => Promise<void>
    obtenerContactos: () => Promise<void>
    obtenerContactosAgrupados: () => Promise<void>
    guardarContacto: (contacto : Contacto) => Promise<void>
    eliminarContacto: (id: number) => Promise<void>
    obtenerElementoPorId: (id: number) => Promise<void>
    actualizarContacto: (id : number, contacto : Contacto) => Promise<void>

}


export const useContactoStore = create<ContactoStore>()(devtools((set, get) => ({
  contactos: [],
  contacto: {},
  contactosAgrupados: [],
  gruposConContactos: {},
  grupos: [],
  isOK: false,
  spinner: false,
  activeId: 0,
  obtenerGrupos: async () => {
    console.log('obteniendo contactos... ');
    
    const resultado = await getGrupos();

    set(()=>({
      grupos: resultado
      
    }))

  },
  obtenerContactos: async () => {
    console.log('obteniendo contactos... ');

    set(()=>({
      spinner: true
      
    }))
    
    const resultado = await getContactos();
    // console.log(resultado);
    
    if (resultado) {
        set(()=>({  
          contactos: resultado,
          activeId: 0,
          spinner: false
        }))
      console.log('contactos obtenidos... ');

    }
   
  },
  guardarContacto: async (contacto) => {
    
    console.log("guardando...");
    const resultado = await postContacto(contacto)
    if (resultado) {
      set(() => ({
        isOK: true
      }))
  }
    
  },
  eliminarContacto: async (id) => {

    const result = await deleteContacto(id)
    
    if (result!.ok) {
        set((state) => ({
          contactos: state.contactos.filter(item => item.id !== id)
        }))
    }
    
  },
  obtenerElementoPorId: async (id) => {
    
    const result = await getContactById(id);
    
    set(() => ({
      activeId: id,
      contacto: result
    }))

  },
  actualizarContacto: async (id, contacto) => {
    const result = await updateContact(id, contacto)
    
    if (result!.ok) {
        set(() => ({
          isOK: true
        }))
    }
  },
  obtenerContactosAgrupados: async () => {
    set(()=>({
      spinner: true
    }))

    const result = await getGroupedContacts();
    console.log(result);
    if (result) {
      set(() => ({
      
        contactosAgrupados: result,
        spinner: false

      }))
    }

  },
  setActiveId: (id) => {
    if (id) {

      set( () => ({
        activeId: id
      
      }))
    }
  },
  obtenerlistadoGrupos: async () => {

    console.log("Listado de grupos: ");
    console.log(get().activeId);

    const id = get().activeId 

    if (id) {

      console.log("Obteniendo listado de grupos...");
      const result = await getGroupbyId(id)
      
      if (result) {
          
          set(() => ({
            gruposConContactos: result
          }))

      }

    }
    
  }

})))


