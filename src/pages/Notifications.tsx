
import { useState } from "react";
import { Layout } from "@/components/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Settings, ThumbsUp, MessageSquare, Users, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Sample data
const notifications = [
  {
    id: 1,
    type: "like",
    user: {
      name: "Alex Morgan",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=256&h=256&auto=format&fit=crop",
      role: "Software Engineer at Tech Inc.",
    },
    content: "liked your post about 'The future of frontend development'",
    time: "2h ago",
    read: false,
  },
  {
    id: 2,
    type: "comment",
    user: {
      name: "Emma Lee",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop",
      role: "Product Manager at Growth Inc.",
    },
    content: "commented on your post: 'This is such a great insight! I've been thinking about this too.'",
    time: "5h ago",
    read: true,
  },
  {
    id: 3,
    type: "connection",
    user: {
      name: "Michael Patel",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
      role: "Data Scientist at Analytics Co.",
    },
    content: "accepted your connection request",
    time: "1d ago",
    read: true,
  },
  {
    id: 4,
    type: "job",
    user: {
      name: "Tech Innovations",
      avatar: "https://images.unsplash.com/photo-1549921860-31f1ce56660b?q=80&w=256&h=256&auto=format&fit=crop",
      role: "Company",
    },
    content: "New jobs matching your profile: 'Senior Frontend Developer'",
    time: "2d ago",
    read: false,
  },
  {
    id: 5,
    type: "like",
    user: {
      name: "Jordan Smith",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=256&h=256&auto=format&fit=crop",
      role: "Frontend Developer at WebCo.",
    },
    content: "liked your comment on Lisa Johnson's post",
    time: "3d ago",
    read: true,
  },
  {
    id: 6,
    type: "connection",
    user: {
      name: "Maria Rodriguez",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
      role: "Marketing Director at GrowthCo",
    },
    content: "wants to connect with you",
    time: "4d ago",
    read: true,
    actionable: true,
  },
];

// Helper function to get icon based on notification type
const getNotificationIcon = (type: string) => {
  switch (type) {
    case "like":
      return <ThumbsUp className="h-4 w-4 text-blue-500" />;
    case "comment":
      return <MessageSquare className="h-4 w-4 text-green-500" />;
    case "connection":
      return <Users className="h-4 w-4 text-purple-500" />;
    case "job":
      return <Briefcase className="h-4 w-4 text-orange-500" />;
    default:
      return <Bell className="h-4 w-4 text-muted-foreground" />;
  }
};

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Filter notifications based on active tab
  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === "all") return true;
    if (activeTab === "unread") return !notification.read;
    if (activeTab === "connections") return notification.type === "connection";
    if (activeTab === "jobs") return notification.type === "job";
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <Layout>
      <div className="container py-6">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader className="pb-3 flex flex-row items-center justify-between">
              <div className="flex items-center">
                <h2 className="text-xl font-semibold">Notifications</h2>
                {unreadCount > 0 && (
                  <Badge className="ml-2" variant="secondary">
                    {unreadCount} new
                  </Badge>
                )}
              </div>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </CardHeader>
            <Tabs defaultValue="all" onValueChange={setActiveTab}>
              <div className="px-6">
                <TabsList className="w-full mb-2">
                  <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                  <TabsTrigger value="unread" className="flex-1">Unread</TabsTrigger>
                  <TabsTrigger value="connections" className="flex-1">Connections</TabsTrigger>
                  <TabsTrigger value="jobs" className="flex-1">Jobs</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value={activeTab} className="m-0">
                <CardContent className="p-0">
                  {filteredNotifications.length > 0 ? (
                    filteredNotifications.map((notification) => (
                      <div key={notification.id}>
                        <div 
                          className={`px-6 py-4 flex gap-3 ${
                            !notification.read ? "bg-accent/20" : ""
                          }`}
                        >
                          <div className="mt-1">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
                              <AvatarFallback>{notification.user.name[0]}</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start">
                              <div className="flex-1">
                                <div className="flex items-center gap-1">
                                  <span className="font-medium mr-1">{notification.user.name}</span>
                                  <span className="text-sm">{notification.content}</span>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                                  <span className="flex items-center text-xs text-muted-foreground">
                                    {getNotificationIcon(notification.type)}
                                    <span className="ml-1 capitalize">{notification.type}</span>
                                  </span>
                                </div>
                                {notification.actionable && (
                                  <div className="mt-2 flex gap-2">
                                    <Button size="sm" variant="outline">Ignore</Button>
                                    <Button size="sm">Accept</Button>
                                  </div>
                                )}
                              </div>
                              {!notification.read && (
                                <div className="ml-2">
                                  <Badge className="h-2 w-2 rounded-full p-0 bg-primary" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <Separator />
                      </div>
                    ))
                  ) : (
                    <div className="py-8 text-center text-muted-foreground">
                      <Bell className="h-12 w-12 mx-auto mb-2 opacity-20" />
                      <p>No notifications to display</p>
                    </div>
                  )}
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
