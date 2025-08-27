import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  SidebarFooter
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MainNav } from "./_components/main-nav";
import { Wrench } from "lucide-react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-3">
             <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                <Wrench className="h-6 w-6" />
             </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-tight text-foreground">
                App Starter
              </span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <MainNav />
        </SidebarContent>
         <SidebarFooter>
            <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
                <AvatarImage src="https://picsum.photos/100" alt="User Avatar" data-ai-hint="user avatar" />
                <AvatarFallback>DV</AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-sm">
                <span className="font-medium text-foreground">Dev User</span>
                <span className="text-muted-foreground">dev@example.com</span>
            </div>
            </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 lg:h-[60px] lg:px-6">
            <SidebarTrigger className="md:hidden" />
            <div className="flex-1" />
        </header>
        <main className="flex-1 p-4 md:p-8">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
