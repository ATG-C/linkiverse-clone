
import { Image, Video, Link } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function CreatePost() {
  return (
    <Card>
      <CardContent className="pt-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop" alt="Sarah Chen" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Input placeholder="Share something with your network..." className="flex-1" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t px-6 py-3">
        <Button variant="ghost" size="sm" className="gap-1">
          <Image className="h-4 w-4" />
          <span>Photo</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-1">
          <Video className="h-4 w-4" />
          <span>Video</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-1">
          <Link className="h-4 w-4" />
          <span>Link</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
