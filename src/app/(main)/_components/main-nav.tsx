"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GitBranch,
  KeyRound,
  LayoutDashboard,
  FileText,
  Wrench,
  Docker,
  FileCode,
} from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { KubernetesIcon, TerraformIcon } from "@/components/icons";

export function MainNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          isActive={isActive("/")}
          tooltip="Dashboard"
        >
          <Link href="/">
            <LayoutDashboard />
            <span>Dashboard</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          isActive={isActive("/pipelines")}
          tooltip="Pipelines"
        >
          <Link href="/pipelines">
            <GitBranch />
            <span>Pipelines</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          isActive={isActive("/logs")}
          tooltip="Logs"
        >
          <Link href="/logs">
            <FileText />
            <span>Log Viewer</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarGroup>
        <SidebarGroupLabel>
          <Wrench />
          <span>Tools</span>
        </SidebarGroupLabel>
        <SidebarMenuItem>
           <SidebarMenuButton
            asChild
            isActive={isActive("/tools/cli-generator")}
            tooltip="CLI Generator"
          >
            <Link href="/tools/cli-generator">
              <KubernetesIcon className="h-4 w-4" />
              <span>CLI Generator</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
           <SidebarMenuButton
            asChild
            isActive={isActive("/tools/config-generator")}
            tooltip="Config Generator"
          >
            <Link href="/tools/config-generator">
              <FileCode />
              <span>Config Generator</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarGroup>

      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          isActive={isActive("/credentials")}
          tooltip="Credentials"
        >
          <Link href="/credentials">
            <KeyRound />
            <span>Credentials</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
