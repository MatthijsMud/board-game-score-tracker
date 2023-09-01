import { z } from "zod";

export const GameId = z.number().brand("GameId");
export type GameId = z.infer<typeof GameId>;

export const Game = z.object({
  id: GameId.optional(),
  name: z.string(),

}).brand("Game");
export type Game = z.infer<typeof Game>;