import { z } from "zod";

export const ExpansionId = z.number().brand("ExpansionId");
export type ExpansionId = z.infer<typeof ExpansionId>;

export const Expansion = z.object({
  id: ExpansionId.optional(),
  name: z.string(),

}).brand("Expansion");
export type Expansion = z.infer<typeof Expansion>;