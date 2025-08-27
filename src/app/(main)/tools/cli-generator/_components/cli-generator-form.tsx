"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { CliCommandSchema } from "@/lib/schemas";
import { generateCliCommandAction } from "@/lib/actions";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

type CliCommandFormValues = z.infer<typeof CliCommandSchema>;

export function CliGeneratorForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<CliCommandFormValues>({
    resolver: zodResolver(CliCommandSchema),
    defaultValues: {
      description: "",
    },
  });

  const onSubmit = (values: CliCommandFormValues) => {
    setError(null);
    setResult(null);
    startTransition(async () => {
      const response = await generateCliCommandAction(values);
      if (response.error) {
        setError(response.error);
      } else if (response.success) {
        setResult(response.success.cliCommand);
      }
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Describe the command you need</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., list all running pods in the 'default' namespace"
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Be as specific as possible for the best results.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="commandType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Command Type (Optional)</FormLabel>
                 <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Auto-detect" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="kubectl">Kubectl</SelectItem>
                    <SelectItem value="docker">Docker</SelectItem>
                    <SelectItem value="terraform">Terraform</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Help the AI by specifying the tool you're using.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generate Command
          </Button>
        </form>
      </Form>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Generated Command</h3>
        <div className="min-h-[268px]">
          {isPending ? (
             <Card className="flex items-center justify-center h-full min-h-[268px] bg-card/50">
                <div className="text-center text-muted-foreground">
                    <Loader2 className="mx-auto h-8 w-8 animate-spin mb-2" />
                    <p>Generating command...</p>
                </div>
            </Card>
          ) : result ? (
            <CodeBlock code={result} />
          ) : error ? (
            <Card className="flex items-center justify-center h-full min-h-[268px] border-destructive">
                <p className="text-destructive">{error}</p>
            </Card>
          ) : (
             <Card className="flex items-center justify-center h-full min-h-[268px] bg-card/50">
                <p className="text-muted-foreground">Your command will appear here.</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
