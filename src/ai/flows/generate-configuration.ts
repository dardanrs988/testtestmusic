// The use server directive is needed as this module is called from React.
'use server';

/**
 * @fileOverview A configuration generator AI agent.
 *
 * - generateConfiguration - A function that handles the generation of infrastructure configuration snippets.
 * - GenerateConfigurationInput - The input type for the generateConfiguration function.
 * - GenerateConfigurationOutput - The return type for the generateConfiguration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateConfigurationInputSchema = z.object({
  description: z.string().describe('The description of the infrastructure to create.'),
  format: z.enum(['kubernetes_yaml', 'terraform']).describe('The desired format for the configuration snippet.'),
});

export type GenerateConfigurationInput = z.infer<typeof GenerateConfigurationInputSchema>;

const GenerateConfigurationOutputSchema = z.object({
  configurationSnippet: z.string().describe('The generated configuration snippet.'),
});

export type GenerateConfigurationOutput = z.infer<typeof GenerateConfigurationOutputSchema>;

export async function generateConfiguration(
  input: GenerateConfigurationInput
): Promise<GenerateConfigurationOutput> {
  return generateConfigurationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateConfigurationPrompt',
  input: {schema: GenerateConfigurationInputSchema},
  output: {schema: GenerateConfigurationOutputSchema},
  prompt: `You are a DevOps engineer who specializes in generating configuration snippets.

You will receive a description of the infrastructure to create and a desired format.

Generate a configuration snippet in the specified format that creates the described infrastructure.

Description: {{{description}}}
Format: {{{format}}}

`,
});

const generateConfigurationFlow = ai.defineFlow(
  {
    name: 'generateConfigurationFlow',
    inputSchema: GenerateConfigurationInputSchema,
    outputSchema: GenerateConfigurationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
