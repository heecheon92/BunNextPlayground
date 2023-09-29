import z from "zod"

export const authTokenSchema = z.object({
    accessToken: z.string(),
    refreshToken: z.string()
})

export type AuthToken = z.infer<typeof authTokenSchema>;