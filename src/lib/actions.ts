"use server";

import { z } from "zod";
import { generateCliCommand } from "@/ai/flows/generate-cli-command";
import { generateConfiguration } from "@/ai/flows/generate-configuration";
import { CliCommandSchema, ConfigGeneratorSchema } from "./schemas";

export async function generateCliCommandAction(
  values: z.infer<typeof CliCommandSchema>
) {
  const validatedFields = CliCommandSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid input.",
    };
  }

  try {
    const result = await generateCliCommand(validatedFields.data);
    return { success: result };
  } catch (error) {
    console.error(error);
    return { error: "Failed to generate command. Please try again." };
  }
}

export async function generateConfigurationAction(
  values: z.infer<typeof ConfigGeneratorSchema>
) {
  const validatedFields = ConfigGeneratorSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid input.",
    };
  }

  try {
    const result = await generateConfiguration(validatedFields.data);
    return { success: result };
  } catch (error) {
    console.error(error);
    return { error: "Failed to generate configuration. Please try again." };
  }
}
