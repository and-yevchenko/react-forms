import { z } from "zod";


export const formSchema = z.object({
    email: z.string().email('Invalid email!'),
    name: z.string().min(1, 'Too short name!'),
    password: z.string().min(1, 'Too short password!'),
    confirm_password: z.string().min(1, 'Too short password!'),
})
.refine((data) => (data.confirm_password === data.password), {
    path: ['confirm_password'],
    message: 'Mismatched password!'
})