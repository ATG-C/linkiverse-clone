
import { useState } from "react";
import { Heart, MessageSquare, Share2, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

interface PostCardProps {
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  timePosted: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

export function PostCard({ author, timePosted, content, image, likes: initialLikes, comments }: PostCardProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <Card className="hover-card">
      <CardHeader className="flex flex-row items-start space-y-0 gap-3 pb-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="space-y-1 flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-semibold">{author.name}</h4>
              <p className="text-xs text-muted-foreground">{author.role}</p>
              <p className="text-xs text-muted-foreground">{timePosted}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Save post</DropdownMenuItem>
                <DropdownMenuItem>Hide post</DropdownMenuItem>
                <DropdownMenuItem>Report</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm">{content}</p>
        {image && (
          <div className="mt-3 rounded-md overflow-hidden">
            <img src={image} alt="Post content" className="w-full h-auto" />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col pt-0">
        <div className="w-full flex justify-between text-xs text-muted-foreground pb-2">
          <span>{likes} likes</span>
          <span>{comments} comments</span>
        </div>
        <Separator />
        <div className="w-full flex justify-between pt-2">
          <Button variant="ghost" size="sm" onClick={handleLike} className={liked ? "text-primary" : ""}>
            <Heart className={`mr-1 h-4 w-4 ${liked ? "fill-primary" : ""}`} />
            Like
          </Button>
          <Button variant="ghost" size="sm">
            <MessageSquare className="mr-1 h-4 w-4" />
            Comment
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="mr-1 h-4 w-4" />
            Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
