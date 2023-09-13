import { z } from "zod";
import { PlayerId } from "./Player";
import { GameId } from "./Game";
import { LocationId } from "./Location";

export const SessionId = z.number().brand("SessionId");
export type SessionId = z.infer<typeof SessionId>;

export const Session = z.object({
  id: SessionId.optional(),
  gameId: GameId,
  playerIds: z.array(PlayerId),
  locationId: LocationId.optional(),

}).brand("Session");
export type Session = z.infer<typeof Session>;