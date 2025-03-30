
import { useState } from "react";
import { Layout } from "@/components/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Send, Settings, MoreHorizontal, PenSquare } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// Sample data
const conversations = [
  {
    id: 1,
    user: {
      name: "Alex Morgan",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=256&h=256&auto=format&fit=crop",
      status: "online",
      role: "Software Engineer at Tech Inc.",
    },
    lastMessage: {
      text: "Hi Sarah, I wanted to follow up on our discussion about the new project.",
      time: "10:24 AM",
      unread: true,
    },
  },
  {
    id: 2,
    user: {
      name: "Emma Lee",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop",
      status: "offline",
      role: "Product Manager at Growth Inc.",
    },
    lastMessage: {
      text: "The meeting is scheduled for tomorrow at 2 PM. Do you have time?",
      time: "Yesterday",
      unread: false,
    },
  },
  {
    id: 3,
    user: {
      name: "Michael Patel",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
      status: "offline",
      role: "Data Scientist at Analytics Co.",
    },
    lastMessage: {
      text: "Thanks for sharing those resources!",
      time: "Wednesday",
      unread: false,
    },
  },
  {
    id: 4,
    user: {
      name: "Jordan Smith",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=256&h=256&auto=format&fit=crop",
      status: "online",
      role: "Frontend Developer at WebCo.",
    },
    lastMessage: {
      text: "Can you review my PR when you get a chance?",
      time: "Monday",
      unread: false,
    },
  },
];

const messages = [
  {
    id: 1,
    senderId: 1,
    text: "Hi Sarah, I wanted to follow up on our discussion about the new project.",
    time: "10:24 AM",
  },
  {
    id: 2,
    senderId: "me",
    text: "Hey Alex! Sure, I've been looking at the documents you shared.",
    time: "10:26 AM",
  },
  {
    id: 3,
    senderId: 1,
    text: "Great! What are your thoughts on the project timeline?",
    time: "10:28 AM",
  },
  {
    id: 4,
    senderId: "me",
    text: "I think the timeline is ambitious but doable. I'm concerned about the integration phase though.",
    time: "10:30 AM",
  },
  {
    id: 5,
    senderId: 1,
    text: "That's a good point. Maybe we should schedule a call with the backend team to discuss potential issues.",
    time: "10:32 AM",
  },
  {
    id: 6,
    senderId: "me",
    text: "Definitely. I'm free tomorrow afternoon if that works for everyone?",
    time: "10:33 AM",
  },
  {
    id: 7,
    senderId: 1,
    text: "Sounds good! I'll set up a meeting and send out invites.",
    time: "10:35 AM",
  },
];

const Messaging = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [searchText, setSearchText] = useState("");
  const [messageText, setMessageText] = useState("");

  const filteredConversations = conversations.filter(
    (conversation) => conversation.user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log("Sending message:", messageText);
      // In a real app, you would send the message to the server
      setMessageText("");
    }
  };

  return (
    <Layout>
      <div className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-160px)]">
          {/* Conversation List */}
          <div className="md:col-span-1 flex flex-col h-full">
            <Card className="flex flex-col h-full">
              <CardHeader className="pb-3 flex flex-row items-center justify-between">
                <h2 className="text-xl font-semibold">Messaging</h2>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <PenSquare className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <div className="px-4 pb-3">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search messages" 
                    className="pl-8"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
              </div>
              <CardContent className="flex-1 overflow-y-auto p-0">
                <Tabs defaultValue="focused">
                  <div className="px-4">
                    <TabsList className="w-full mb-2">
                      <TabsTrigger value="focused" className="flex-1">Focused</TabsTrigger>
                      <TabsTrigger value="other" className="flex-1">Other</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="focused" className="m-0">
                    {filteredConversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        className={`px-4 py-3 flex gap-3 hover:bg-accent/50 cursor-pointer ${
                          selectedConversation?.id === conversation.id ? "bg-accent/50" : ""
                        } ${conversation.lastMessage.unread ? "font-medium" : ""}`}
                        onClick={() => setSelectedConversation(conversation)}
                      >
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={conversation.user.avatar} alt={conversation.user.name} />
                            <AvatarFallback>{conversation.user.name[0]}</AvatarFallback>
                          </Avatar>
                          {conversation.user.status === "online" && (
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-background"></span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between">
                            <h4 className="text-sm font-medium truncate">{conversation.user.name}</h4>
                            <span className="text-xs text-muted-foreground">{conversation.lastMessage.time}</span>
                          </div>
                          <p className="text-xs truncate">{conversation.lastMessage.text}</p>
                        </div>
                        {conversation.lastMessage.unread && (
                          <div className="flex items-center">
                            <Badge className="h-2 w-2 rounded-full p-0 bg-primary" />
                          </div>
                        )}
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="other" className="m-0 text-center py-6 text-muted-foreground">
                    No other messages
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Conversation Detail */}
          <div className="md:col-span-2 h-full">
            {selectedConversation ? (
              <Card className="flex flex-col h-full">
                <CardHeader className="pb-3 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={selectedConversation.user.avatar} alt={selectedConversation.user.name} />
                        <AvatarFallback>{selectedConversation.user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{selectedConversation.user.name}</h3>
                        <p className="text-xs text-muted-foreground">{selectedConversation.user.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto py-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.senderId === "me" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-2 rounded-lg ${
                          message.senderId === "me"
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs mt-1 opacity-75 text-right">{message.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Input
                      placeholder="Type a message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={handleSendMessage}
                      disabled={!messageText.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h3 className="font-medium">Select a conversation</h3>
                  <p className="text-sm text-muted-foreground">Choose a conversation from the list</p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Messaging;
