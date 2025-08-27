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
import { Waves, Settings, LogOut, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MusicPlayer } from "./_components/music-player";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-3">
             <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                <Waves className="h-6 w-6" />
             </div>
            <div className="flex flex-col">
              <span className="font-headline text-lg tracking-tight text-foreground">
                Aura Music
              </span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <MainNav />
        </SidebarContent>
         <SidebarFooter>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start gap-3 px-3 h-12">
                   <Avatar className="h-8 w-8">
                      <AvatarImage src="https://picsum.photos/100" alt="User Avatar" data-ai-hint="user avatar" />
                      <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col text-sm items-start">
                      <span className="font-medium text-foreground">Aura User</span>
                      <span className="text-muted-foreground">user@aura.com</span>
                  </div>
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right" align="start">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
         <div className="flex flex-col h-full">
            <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 shrink-0 lg:h-[60px] lg:px-6">
                <SidebarTrigger className="md:hidden" />
                <div className="flex-1" />
            </header>
            <main className="flex-1 overflow-y-auto p-4 md:p-8">
                {children}
            </main>
            <footer className="sticky bottom-0 z-10 border-t bg-background/95 backdrop-blur-sm">
              <MusicPlayer />
            </footer>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
