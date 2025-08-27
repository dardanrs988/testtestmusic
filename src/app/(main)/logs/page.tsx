import { PageHeader } from "@/components/page-header";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const logLines = `
[2024-05-21T10:00:00Z] [INFO] [prod-api-7ffc8f5f8b-wz8h5]: User authentication successful for user: admin
[2024-05-21T10:00:01Z] [DEBUG] [prod-db-postgres-0]: Connection established from prod-api-7ffc8f5f8b-wz8h5
[2024-05-21T10:00:02Z] [INFO] [prod-api-7ffc8f5f8b-wz8h5]: GET /api/v1/users/me - 200 OK
[2024-05-21T10:01:15Z] [WARN] [staging-worker-a4fde4a12a-n3k2p]: High memory usage detected: 92%
[2024-05-21T10:01:20Z] [INFO] [frontend-deploy-pipeline]: Starting deployment to production...
[2024-05-21T10:01:45Z] [INFO] [docker-daemon]: Building image 'my-app:latest' from Dockerfile
[2024-05-21T10:02:30Z] [ERROR] [prod-api-8abcd1234e-y6g4q]: Failed to connect to Redis cache: Connection refused
[2024-05-21T10:02:31Z] [FATAL] [prod-api-8abcd1234e-y6g4q]: Unhandled exception, restarting container...
[2024-05-21T10:03:00Z] [INFO] [terraform-apply]: Plan: 3 to add, 1 to change, 0 to destroy.
[2024-05-21T10:03:05Z] [INFO] [prod-api-restarted-b2c3d4e5f6-a1b2c]: Service started successfully.
`.trim();

export default function LogsPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-100px)]">
      <PageHeader
        title="Unified Log Viewer"
        description="Consolidate and search logs from all your services in one place."
      />
      <div className="flex gap-4 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search logs..." className="pl-10" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Services</SelectItem>
            <SelectItem value="prod-api">prod-api</SelectItem>
            <SelectItem value="prod-db">prod-db</SelectItem>
            <SelectItem value="staging-worker">staging-worker</SelectItem>
          </SelectContent>
        </Select>
         <Select defaultValue="1h">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="15m">Last 15 minutes</SelectItem>
            <SelectItem value="1h">Last 1 hour</SelectItem>
            <SelectItem value="24h">Last 24 hours</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card className="flex-1">
        <pre className="font-code text-sm p-4 overflow-auto h-full">
          {logLines.split('\n').map((line, index) => {
            const isError = line.includes('[ERROR]') || line.includes('[FATAL]');
            const isWarning = line.includes('[WARN]');
            const isInfo = line.includes('[INFO]');
            return (
              <div key={index} className="flex">
                  <span className="w-8 text-right text-muted-foreground/50 mr-4 select-none">{index + 1}</span>
                  <span
                    className={
                        isError ? 'text-red-400' : 
                        isWarning ? 'text-yellow-400' :
                        isInfo ? 'text-blue-400' :
                        'text-foreground'
                    }
                    >
                    {line}
                    </span>
              </div>
            );
          })}
        </pre>
      </Card>
    </div>
  );
}
