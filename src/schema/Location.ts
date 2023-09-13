import { z } from "zod";

export const LocationId = z.number().brand("LocationId");
export type LocationId = z.infer<typeof LocationId>;

export const Location = z.object({
  id: LocationId.optional(),
  name: z.string(),
  
}).brand("Location");
export type Location = z.infer<typeof Location>;