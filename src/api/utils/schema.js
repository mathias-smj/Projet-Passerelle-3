import { z } from 'zod';

const emailSchema = z.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
const passwordSchema = z.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);

const usernameSchema = z.object({
  username: z.string().min(3),
})

export { usernameSchema, passwordSchema, emailSchema };