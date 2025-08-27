import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
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
import { KeyRound, MoreVertical, PlusCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const credentials = [
  { name: 'prod-db-password', type: 'Database', source: 'HashiCorp Vault', lastUpdated: '2 months ago' },
  { name: 'aws-access-key', type: 'Cloud Provider', source: 'AWS Secrets Manager', lastUpdated: '3 weeks ago' },
  { name: 'docker-hub-token', type: 'Registry', source: 'HashiCorp Vault', lastUpdated: '1 year ago' },
  { name: 'gcp-service-account', type: 'Cloud Provider', source: 'GCP Secret Manager', lastUpdated: '5 days ago' },
];

export default function CredentialsPage() {
  return (
    <>
      <PageHeader
        title="Credential Management"
        description="Securely manage and rotate secrets and credentials."
      >
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Credential
        </Button>
      </PageHeader>
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead><span className="sr-only">Actions</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {credentials.map((cred) => (
                <TableRow key={cred.name}>
                  <TableCell className="font-medium flex items-center gap-2">
                    <KeyRound className="h-4 w-4 text-muted-foreground" />
                    <span>{cred.name}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{cred.type}</Badge>
                  </TableCell>
                  <TableCell>{cred.source}</TableCell>
                  <TableCell>{cred.lastUpdated}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                         <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Rotate Secret</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
