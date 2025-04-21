
import z from 'zod';

export const userSignupSchema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().min(6).email(),
    password: z.string().min(6),
});
  
export const userSigninSchema = z.object({
    email: z.string().min(6).email(),
    password: z.string().min(6),
})