import { number, string, z } from "zod";

export const GrupoAPIResponseSchema = z.array(
    z.object({
        id: number(),
        nombre: string()
    })
)

export const ContactosAPIResponseSchema = z.array(
    z.object({
        id: z.number(),
        grupo: z.string(),
        nombre: z.string(),
        email: z.string(),
        telefono: z.string()
    })
)


export const ContactosAPIResponsePostSchema = z.object({
    idGrupo: z.number(),
    nombre: z.string(),
    email: z.string(),
    telefono: z.string()
})

export const ContactosAPIResponseGetByIdtSchema = z.object({
    id: z.number(),
    idGrupo: z.number(),
    nombre: z.string(),
    email: z.string(),
    telefono: z.string()
})


export const ContactosAgrupadosAPIResponseSchema = z.array(
    z.object({
        id: z.number(),
        grupo: z.string(),
        cantidad: z.number(),
        contactos: z.array(
            z.object({
                id: z.number(),
                grupo: z.string(),
                nombre: z.string(),
                email: z.string(),
                telefono: z.string()
            })
        )
    })
)

export const gruposConContactosAPIResponseSchema = z.object({
    id: z.number(),
    nombre: z.string(),
    contactos: z.array(
        z.object({
            id: z.number(),
            idGrupo: z.number(),
            nombre: z.string(),
            telefono: z.string(),
            email: z.string()
        })
    )

})
