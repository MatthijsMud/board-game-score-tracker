import { z } from "zod";

export const Player = z.object({
  name: z.string().nonempty(),
  
}).describe("").brand("Player");
export type Player = z.infer<typeof Player>;