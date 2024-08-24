import { z } from "zod";

const ingSchema = z.object({
    name: z.string(),
    qty: z.number(),
    unit: z.union([
        z.literal('g'),
        z.literal('ml')
    ])
})

export const ingridientSchema = z.object({
    title: z.string(),
    ingridients: z.array(ingSchema),
})
