import { PageHeader } from "@/components/page-header";
import { ConfigGeneratorForm } from "./_components/config-generator-form";

export default function ConfigGeneratorPage() {
  return (
    <>
      <PageHeader
        title="Configuration Generator"
        description="Generate Infrastructure-as-Code templates for Kubernetes and Terraform."
      />
      <ConfigGeneratorForm />
    </>
  );
}
