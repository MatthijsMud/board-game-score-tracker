import { z } from "zod";
import { ExpansionId } from "./Expansion";

export const GameId = z.number().brand("GameId");
export type GameId = z.infer<typeof GameId>;

export const Game = z.object({
  id: GameId.optional(),
  name: z.string(),
  expansions: z.array(ExpansionId),
}).brand("Game");
export type Game = z.infer<typeof Game>;