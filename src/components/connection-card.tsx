
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ConnectionCardProps {
  connection: {
    name: string;
    role: string;
    avatar: string;
    mutualConnections: number;
  };
}

export function ConnectionCard({ connection }: ConnectionCardProps) {
  return (
    <Card className="hover-card">
      <CardContent className="p-4">
        <div className="flex flex-col items-center text-center gap-2">
          <Avatar className="h-16 w-16">
            <AvatarImage src={connection.avatar} alt={connection.name} />
            <AvatarFallback>{connection.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium">{connection.name}</h4>
            <p className="text-sm text-muted-foreground">{connection.role}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {connection.mutualConnections} mutual connections
            </p>
          </div>
          <Button className="w-full mt-2" size="sm">Connect</Button>
        </div>
      </CardContent>
    </Card>
  );
}
