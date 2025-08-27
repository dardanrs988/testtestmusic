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
import { MoreVertical, Play, GitCommit, Clock } from "lucide-react";

const allPipelines = [
  { name: 'frontend-deploy', status: 'Success', trigger: 'Push to main', lastRun: '2m ago', duration: '1m 32s' },
  { name: 'backend-ci', status: 'Success', trigger: 'PR #122', lastRun: '15m ago', duration: '3m 10s' },
  { name: 'infra-tf-apply', status: 'Failed', trigger: 'Manual', lastRun: '1h ago', duration: '45s' },
  { name: 'docker-build-api', status: 'In Progress', trigger: 'Push to feature/new-auth', lastRun: '5m ago', duration: '...' },
  { name: 'e2e-tests', status: 'Success', trigger: 'Nightly', lastRun: '8h ago', duration: '12m 5s' },
  { name: 'security-scan', status: 'Queued', trigger: 'Weekly', lastRun: '2d ago', duration: '-' },
  { name: 'docs-publish', status: 'Success', trigger: 'Push to docs', lastRun: '3h ago', duration: '30s' },
];

export default function PipelinesPage() {
  return (
    <>
      <PageHeader
        title="Pipelines"
        description="Monitor and manage all your CI/CD pipelines."
      >
        <Button>
            <Play className="mr-2 h-4 w-4" />
            Run New Pipeline
        </Button>
      </PageHeader>
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pipeline</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Trigger</TableHead>
                <TableHead>Last Run</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead><span className="sr-only">Actions</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allPipelines.map((pipeline) => (
                <TableRow key={pipeline.name}>
                  <TableCell className="font-medium">{pipeline.name}</TableCell>
                  <TableCell>
                    <Badge variant={
                      pipeline.status === 'Success' ? 'secondary' :
                      pipeline.status === 'In Progress' ? 'default' :
                      pipeline.status === 'Queued' ? 'outline' :
                      'destructive'
                    } className="capitalize">
                      {pipeline.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="flex items-center gap-2 text-muted-foreground">
                    <GitCommit className="h-4 w-4" />
                    <span>{pipeline.trigger}</span>
                  </TableCell>
                  <TableCell className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{pipeline.lastRun}</span>
                  </TableCell>
                  <TableCell>{pipeline.duration}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
