
import { useState } from "react";
import { Layout } from "@/components/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ConnectionCard } from "@/components/connection-card";
import { Input } from "@/components/ui/input";
import { UsersRound, UserPlus, Search, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Sample data
const connections = [
  {
    id: 1,
    name: "Jordan Smith",
    role: "Frontend Developer at Tech Co.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=256&h=256&auto=format&fit=crop",
    mutualConnections: 12,
  },
  {
    id: 2,
    name: "Emma Lee",
    role: "Product Manager at Growth Inc.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop",
    mutualConnections: 8,
  },
  {
    id: 3,
    name: "Michael Patel",
    role: "Data Scientist at Analytics Co.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
    mutualConnections: 5,
  },
  {
    id: 4,
    name: "Lisa Johnson",
    role: "Marketing Director at Brand Solutions",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&auto=format&fit=crop",
    mutualConnections: 15,
  },
  {
    id: 5,
    name: "David Kim",
    role: "UX Designer at Creative Labs",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&auto=format&fit=crop",
    mutualConnections: 3,
  },
  {
    id: 6,
    name: "Sophia Chen",
    role: "Software Engineer at Startup Inc.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&auto=format&fit=crop",
    mutualConnections: 7,
  },
];

const invitations = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Software Engineer at Tech Inc.",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=256&h=256&auto=format&fit=crop",
    mutualConnections: 4,
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    role: "Marketing Director at GrowthCo",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
    mutualConnections: 9,
  },
];

const Network = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <Layout>
      <div className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="pb-3">
                <h2 className="text-xl font-semibold">Manage my network</h2>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <UsersRound className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Connections</span>
                  </div>
                  <span className="text-sm">512</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <UserPlus className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>People I Follow</span>
                  </div>
                  <span className="text-sm">48</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Groups</span>
                  </div>
                  <span className="text-sm">6</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <UsersRound className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Events</span>
                  </div>
                  <span className="text-sm">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <UsersRound className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Pages</span>
                  </div>
                  <span className="text-sm">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <UsersRound className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Newsletters</span>
                  </div>
                  <span className="text-sm">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <UsersRound className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Hashtags</span>
                  </div>
                  <span className="text-sm">15</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search by name" 
                      className="pl-8"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="invitations">
              <TabsList className="mb-4 w-full">
                <TabsTrigger value="invitations" className="flex-1">Invitations ({invitations.length})</TabsTrigger>
                <TabsTrigger value="suggestions" className="flex-1">Suggestions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="invitations" className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <h3 className="text-lg font-medium">Invitations</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {invitations.map((invitation) => (
                      <div key={invitation.id} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex gap-3">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={invitation.avatar} alt={invitation.name} />
                            <AvatarFallback>{invitation.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{invitation.name}</h4>
                            <p className="text-sm text-muted-foreground">{invitation.role}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {invitation.mutualConnections} mutual connections
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Ignore</Button>
                          <Button size="sm">Accept</Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="suggestions">
                <h3 className="text-lg font-medium mb-4">People you may know</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                  {connections
                    .filter((connection) => 
                      connection.name.toLowerCase().includes(searchText.toLowerCase()) || 
                      connection.role.toLowerCase().includes(searchText.toLowerCase())
                    )
                    .map((connection) => (
                      <ConnectionCard key={connection.id} connection={connection} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Network;
