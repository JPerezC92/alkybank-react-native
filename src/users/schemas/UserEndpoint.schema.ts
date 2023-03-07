import { z } from "zod";

export const UserEndpoint = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  id: z.string(),
  accountList: z.array(
    z.object({
      id: z.string(),
      money: z.number().min(0),
      userId: z.string(),
      currency: z.string(),
      createdAt: z.string().datetime(),
      updatedAt: z.string().datetime(),
    })
  ),
  updatedAt: z.string().datetime(),
  createdAt: z.string().datetime(),
});
