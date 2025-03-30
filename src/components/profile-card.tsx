
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin } from "lucide-react";

interface ProfileCardProps {
  user: {
    name: string;
    role: string;
    avatar: string;
    background?: string;
    location: string;
    company: string;
    connections: number;
  };
  minimal?: boolean;
}

export function ProfileCard({ user, minimal = false }: ProfileCardProps) {
  return (
    <Card className="overflow-hidden">
      {!minimal && (
        <div 
          className="h-24 bg-gradient-to-r from-primary/80 to-primary"
          style={user.background ? { backgroundImage: `url(${user.background})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
        />
      )}
      <CardHeader className={`${minimal ? 'pt-4' : '-mt-10'} flex items-center pb-2`}>
        <Avatar className={`${minimal ? 'h-14 w-14' : 'h-20 w-20'} border-4 border-background`}>
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="mt-3 text-center w-full">
          <h3 className="font-semibold text-lg">{user.name}</h3>
          <p className="text-sm text-muted-foreground">{user.role}</p>
        </div>
      </CardHeader>
      <CardContent className="text-sm space-y-3">
        {!minimal && (
          <>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{user.location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Briefcase className="h-4 w-4" />
              <span>{user.company}</span>
            </div>
          </>
        )}
        <div className="pt-2">
          <div className="text-sm mb-2">
            <span className="font-medium">{user.connections}</span>
            <span className="text-muted-foreground"> connections</span>
          </div>
          <div className="space-y-2">
            {minimal ? (
              <Link to="/profile">
                <Button variant="outline" className="w-full">View Profile</Button>
              </Link>
            ) : (
              <>
                <Button className="w-full">Edit Profile</Button>
                <Button variant="outline" className="w-full">Share Profile</Button>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
