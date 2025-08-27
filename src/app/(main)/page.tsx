import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Welcome, Developer"
        description="This is your new application starter."
      />
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              You can start editing this page by modifying{" "}
              <code className="bg-muted px-1 py-0.5 rounded-sm font-code text-sm">
                src/app/(main)/page.tsx
              </code>.
            </p>
             <p className="text-muted-foreground mt-4">
              Your project is now set up with a <code className="bg-muted px-1 py-0.5 rounded-sm font-code text-sm">Dockerfile</code> and a <code className="bg-muted px-1 py-0.5 rounded-sm font-code text-sm">kubernetes.yaml</code> file to help you deploy your application.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
