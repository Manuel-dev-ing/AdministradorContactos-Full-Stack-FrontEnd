import { useNavigate } from "react-router-dom";
import { Contacto } from "../types";
import { ContactosAgrupadosAPIResponseSchema, ContactosAPIResponseGetByIdtSchema, ContactosAPIResponsePostSchema, ContactosAPIResponseSchema, GrupoAPIResponseSchema, gruposConContactosAPIResponseSchema } from "../utils/contacto-shema";


export async function getGrupos() {
    const url = "https://localhost:7013/api/grupos"
    const data = await fetch(url);
    const resultado = await data.json()

    const result = GrupoAPIResponseSchema.safeParse(resultado)

    if (result.success) {

        return result.data
    }

}

export async function getContactos() {

    try {
        const url = "https://localhost:7013/api/contactos"
        const data = await fetch(url);
        const resultado = await data.json()

        const result = ContactosAPIResponseSchema.safeParse(resultado)
        if (result.success) {

            return result.data
        }

    } catch (error) {
        console.log(error);
        
    }
  

}

export async function getContactById(id : number) {
    try {
        const url = `https://localhost:7013/api/contactos/${id}`
        const data = await fetch(url);
        const resultado = await data.json()
        const result = ContactosAPIResponseGetByIdtSchema.safeParse(resultado);
        if (result.success) {

            return result.data
        }
        

    } catch (error) {
        console.log(error);
        
    }
}


export async function postContacto(contacto : Contacto){
    console.log("desde postContacto...");
    console.log(contacto);

    try {
        const url = "https://localhost:7013/api/contactos"
        
        const respuesta = await fetch(url, {
            method: "POST",
            body: JSON.stringify(contacto),
            headers: {
                'Content-Type': 'application/json'
            }
        })

       

        if (respuesta.ok) {
            console.log("Guardado...");
            
            const resultado = await respuesta.json()
            const result = ContactosAPIResponsePostSchema.safeParse(resultado)
            console.log(result);
            
            if (result.success) {
                return result.data
            }

        }

    } catch (error) {
        alert(error)
    }
    
}

export async function deleteContacto(id : number){

    try {
        const url = `https://localhost:7013/api/contactos/${id}`

        const resultado = await fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            } 
        })

        // const respuesta = await resultado.json();
        console.log(resultado);
        
        return resultado

    } catch (error) {
        alert(error)
    }

}

export async function updateContact(id : number, contacto : Contacto) {
    try {
        
        const url = `https://localhost:7013/api/contactos/${id}`

        const resultado = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(contacto),
            headers: {
                'Content-Type': 'application/json'
            } 
        })

        console.log(resultado);
        return resultado


    } catch (error) {
        console.log(error);
        
    }
}

export async function getGroupedContacts() {
    
    try {

        const url = `https://localhost:7013/api/contactos/agrupar`

        const respuesta = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            } 
        })
        const resultado = await respuesta.json();
        const result = ContactosAgrupadosAPIResponseSchema.safeParse(resultado);
        if (result.success) {
            return result.data
        }
        
    } catch (error) {
        console.log(error);
        
    }

}

export async function getGroupbyId(id : number) {
    
    try {
        
        const url = `https://localhost:7013/api/grupos/${id}`

        const respuesta = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            } 
        })

        const resultado = await respuesta.json();
        const result = gruposConContactosAPIResponseSchema.safeParse(resultado)
        if (result.success) {
            return result.data
        }
        

    } catch (error) {
        alert(error)
    }

}




