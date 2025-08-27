'use server';

/**
 * @fileOverview A CLI command generation AI agent.
 * 
 * - generateCliCommand - A function that generates CLI commands from a description.
 * - GenerateCliCommandInput - The input type for the generateCliCommand function.
 * - GenerateCliCommandOutput - The return type for the generateCliCommand function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCliCommandInputSchema = z.object({
  description: z.string().describe('The natural language description of the desired CLI command.'),
  commandType: z.enum(['kubectl', 'docker', 'terraform']).optional().describe('The type of CLI command to generate.  If not provided, the agent will attempt to infer it.'),
});
export type GenerateCliCommandInput = z.infer<typeof GenerateCliCommandInputSchema>;

const GenerateCliCommandOutputSchema = z.object({
  cliCommand: z.string().describe('The generated CLI command.'),
  commandType: z.enum(['kubectl', 'docker', 'terraform']).describe('The type of CLI command generated.'),
});
export type GenerateCliCommandOutput = z.infer<typeof GenerateCliCommandOutputSchema>;

export async function generateCliCommand(input: GenerateCliCommandInput): Promise<GenerateCliCommandOutput> {
  return generateCliCommandFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCliCommandPrompt',
  input: {schema: GenerateCliCommandInputSchema},
  output: {schema: GenerateCliCommandOutputSchema},
  prompt: `You are a CLI expert specializing in generating commands for various cloud platforms.

You will generate a CLI command based on the user's description. The user may optionally specify the command type, but if not, you should infer it from the description.

Description: {{{description}}}

{{#if commandType}}
Command Type: {{{commandType}}}
{{/if}}

Please provide the CLI command and the command type in the output.
`,
});

const generateCliCommandFlow = ai.defineFlow(
  {
    name: 'generateCliCommandFlow',
    inputSchema: GenerateCliCommandInputSchema,
    outputSchema: GenerateCliCommandOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
