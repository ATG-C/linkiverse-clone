
import { Bell, Home, MessageSquare, Search, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="ml-2 text-xl font-bold">ProConnect</span>
          </Link>
          <div className="hidden md:block relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8" />
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="flex flex-col items-center text-muted-foreground hover:text-foreground">
              <Home className="h-5 w-5" />
              <span className="text-xs">Home</span>
            </Link>
            <Link to="/network" className="flex flex-col items-center text-muted-foreground hover:text-foreground">
              <Users className="h-5 w-5" />
              <span className="text-xs">Network</span>
            </Link>
            <Link to="/messages" className="flex flex-col items-center text-muted-foreground hover:text-foreground">
              <MessageSquare className="h-5 w-5" />
              <span className="text-xs">Messages</span>
            </Link>
            <Link to="/notifications" className="flex flex-col items-center text-muted-foreground hover:text-foreground">
              <Bell className="h-5 w-5" />
              <span className="text-xs">Notifications</span>
            </Link>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>

          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop" alt="Profile" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Sarah Chen</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    sarah.chen@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/profile" className="flex w-full">View profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
