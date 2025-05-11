import { z } from "zod"
import { ContactosAgrupadosAPIResponseSchema, ContactosAPIResponseGetByIdtSchema, ContactosAPIResponsePostSchema, ContactosAPIResponseSchema, GrupoAPIResponseSchema, gruposConContactosAPIResponseSchema } from "../utils/contacto-shema"

export type Grupos = z.infer<typeof GrupoAPIResponseSchema>

export type Contacto = {
    Nombre: string,
    Email: string,
    Telefono: string,
    IdGrupo: number | string
}

export type Contactos = z.infer<typeof ContactosAPIResponseSchema>

export type ContactoPostResponse = z.infer<typeof ContactosAPIResponsePostSchema>

export type ContactoGet = z.infer<typeof ContactosAPIResponseGetByIdtSchema>

export type ContactosAgrupados = z.infer<typeof ContactosAgrupadosAPIResponseSchema>

export type GruposConContactos = z.infer<typeof gruposConContactosAPIResponseSchema>