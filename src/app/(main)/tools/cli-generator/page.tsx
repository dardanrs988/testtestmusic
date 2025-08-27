import { PageHeader } from "@/components/page-header";
import { CliGeneratorForm } from "./_components/cli-generator-form";

export default function CliGeneratorPage() {
  return (
    <>
      <PageHeader
        title="CLI Command Generator"
        description="Translate natural language into ready-to-use CLI commands for kubectl, Docker, and more."
      />
      <CliGeneratorForm />
    </>
  );
}
