"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { ConfigGeneratorSchema } from "@/lib/schemas";
import { generateConfigurationAction } from "@/lib/actions";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

type ConfigGeneratorFormValues = z.infer<typeof ConfigGeneratorSchema>;

export function ConfigGeneratorForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ConfigGeneratorFormValues>({
    resolver: zodResolver(ConfigGeneratorSchema),
    defaultValues: {
      description: "",
      format: "kubernetes_yaml",
    },
  });

  const onSubmit = (values: ConfigGeneratorFormValues) => {
    setError(null);
    setResult(null);
    startTransition(async () => {
      const response = await generateConfigurationAction(values);
      if (response.error) {
        setError(response.error);
      } else if (response.success) {
        setResult(response.success.configurationSnippet);
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
                <FormLabel>Describe the infrastructure you need</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., A Kubernetes deployment for a Node.js app with 3 replicas and a service on port 80"
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Include details like resource types, names, and properties.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="format"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Configuration Format</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="kubernetes_yaml" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Kubernetes YAML
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="terraform" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Terraform (HCL)
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generate Configuration
          </Button>
        </form>
      </Form>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Generated Configuration</h3>
        <div className="min-h-[268px]">
          {isPending ? (
             <Card className="flex items-center justify-center h-full min-h-[268px] bg-card/50">
                <div className="text-center text-muted-foreground">
                    <Loader2 className="mx-auto h-8 w-8 animate-spin mb-2" />
                    <p>Generating configuration...</p>
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
                <p className="text-muted-foreground">Your configuration will appear here.</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
