import { z } from "zod";

export const PlayerId = z.number().brand("PlayerId");
export type PlayerId = z.infer<typeof PlayerId>;

export const Player = z.object({
  id: PlayerId.optional(),
  name: z.string().nonempty(),
  image: z.string().url().optional(),
  
}).describe("").brand("Player");
export type Player = z.infer<typeof Player>;