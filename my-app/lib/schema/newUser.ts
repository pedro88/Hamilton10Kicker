import { z } from "zod";

export const newUserSchema = z.object({
    username: z.string().min(3, "Username need min 3 character").nonempty(),
    email: z.string().min(4, "email adress is require").nonempty(),
    password: z.string().min(8, "need 8 min char for your password").nonempty(),
    country: z.string().min(2, "Country in invalid")
});

export const loginSchema = z.object({
    email: z.string().min(3).nonempty(),
    password: z.string().min(8).nonempty()
});

export type NewUser = z.infer<typeof newUserSchema>;
export type LoginType = z.infer<typeof loginSchema>;
