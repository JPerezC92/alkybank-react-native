import { z } from "zod";

export const UserCreate = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().min(1, "Required").email(),
  password: z.string().min(8, "Password must contain at least 8 character(s)"),
});

export type UserCreate = z.infer<typeof UserCreate>;
