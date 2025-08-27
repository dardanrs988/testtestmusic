"use client";

import { z } from "zod";

export const CliCommandSchema = z.object({
  description: z.string().min(10, {
    message: "Please provide a more detailed description (at least 10 characters).",
  }),
  commandType: z.enum(['kubectl', 'docker', 'terraform']).optional(),
});

export const ConfigGeneratorSchema = z.object({
  description: z.string().min(10, {
    message: "Please provide a more detailed description (at least 10 characters).",
  }),
  format: z.enum(['kubernetes_yaml', 'terraform']),
});
