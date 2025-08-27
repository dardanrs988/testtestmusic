import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Circle, Database, GitBranch, MoreVertical } from "lucide-react";
import { KubernetesIcon } from "@/components/icons";

const clusters = [
  { name: "prod-us-east-1", status: "Running", version: "1.28.2", nodes: 50 },
  { name: "prod-eu-west-1", status: "Running", version: "1.28.2", nodes: 45 },
  { name: "staging-us-east-1", status: "Running", version: "1.27.5", nodes: 10 },
  { name: "dev-us-west-2", status: "Degraded", version: "1.29.0", nodes: 5 },
];

const pipelines = [
  { name: "frontend-deploy", status: "Success", lastRun: "2m ago" },
  { name: "backend-ci", status: "Success", lastRun: "15m ago" },
  { name: "infra-tf-apply", status: "Failed", lastRun: "1h ago" },
  { name: "docker-build-api", status: "In Progress", lastRun: "5m ago" },
];

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Welcome, Developer"
        description="Here's a quick overview of your infrastructure and pipelines."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <KubernetesIcon className="h-5 w-5" />
              <CardTitle>Kubernetes Clusters</CardTitle>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">More options</span>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Version</TableHead>
                  <TableHead className="text-right">Nodes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clusters.map((cluster) => (
                  <TableRow key={cluster.name}>
                    <TableCell className="font-medium">{cluster.name}</TableCell>
                    <TableCell>
                      <Badge variant={cluster.status === 'Running' ? 'secondary' : 'destructive'} className="capitalize flex items-center gap-2 w-fit">
                          <Circle className={`h-2 w-2 ${cluster.status === 'Running' ? 'fill-green-500' : 'fill-yellow-500'}`} />
                          {cluster.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{cluster.version}</TableCell>
                    <TableCell className="text-right">{cluster.nodes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
             <div className="flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              <CardTitle>Pipeline Status</CardTitle>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">More options</span>
            </Button>
          </CardHeader>
          <CardContent>
             <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Run</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pipelines.map((pipeline) => (
                  <TableRow key={pipeline.name}>
                    <TableCell className="font-medium">{pipeline.name}</TableCell>
                    <TableCell>
                      <Badge variant={
                          pipeline.status === 'Success' ? 'secondary' :
                          pipeline.status === 'In Progress' ? 'default' :
                          'destructive'
                        } className="capitalize">
                          {pipeline.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{pipeline.lastRun}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
            <CardHeader className="flex flex-row items-center justify-between">
                 <div className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    <CardTitle>Database Services</CardTitle>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                </Button>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    Database monitoring coming soon.
                </p>
            </CardContent>
        </Card>
      </div>
    </>
  );
}
