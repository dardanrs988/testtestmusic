import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wrench } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary text-primary-foreground">
            <Wrench className="h-6 w-6" />
          </div>
          <span className="font-semibold text-xl tracking-tight text-foreground">
            Cloud-Native SuperApp
          </span>
        </div>
      </header>
      <main className="flex-1 p-6">
        <PageHeader
          title="Welcome to the SuperApp"
          description="This is the starting point for your cloud-native application."
        />
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Structure</CardTitle>
              <CardDescription>
                This application is built using a monorepo structure.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="font-mono text-sm bg-muted px-2 py-1 rounded-md">frontend/</div>
                <p className="text-muted-foreground">
                  The Next.js application you are currently viewing.
                </p>
              </div>
               <div className="flex items-start gap-4">
                <div className="font-mono text-sm bg-muted px-2 py-1 rounded-md">backend/</div>
                <p className="text-muted-foreground">
                  A FastAPI service providing the API for this application.
                </p>
              </div>
               <div className="flex items-start gap-4">
                <div className="font-mono text-sm bg-muted px-2 py-1 rounded-md">infra/</div>
                <p className="text-muted-foreground">
                  Terraform code for managing cloud infrastructure.
                </p>
              </div>
                <div className="flex items-start gap-4">
                <div className="font-mono text-sm bg-muted px-2 py-1 rounded-md">k8s/</div>
                <p className="text-muted-foreground">
                  Kubernetes manifests (Helm & Kustomize) for deployment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="border-t py-4 px-6 text-center text-muted-foreground text-sm">
        Powered by a Cloud-Native Architecture
      </footer>
    </div>
  );
}
