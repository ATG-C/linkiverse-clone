
import { Layout } from "@/components/layout";
import { CreatePost } from "@/components/create-post";
import { PostCard } from "@/components/post-card";
import { ProfileCard } from "@/components/profile-card";
import { ConnectionCard } from "@/components/connection-card";

const currentUser = {
  name: "Sarah Chen",
  role: "Product Designer at Design Co.",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
  location: "San Francisco, CA",
  company: "Design Co.",
  connections: 1283,
};

const posts = [
  {
    id: 1,
    author: {
      name: "Alex Morgan",
      role: "Software Engineer at Tech Inc.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&auto=format&fit=crop",
    },
    timePosted: "2h ago",
    content: "Just launched our new product! It's been a great journey and I'm so proud of our team for all the hard work.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    likes: 87,
    comments: 12,
  },
  {
    id: 2,
    author: {
      name: "Maria Rodriguez",
      role: "Marketing Director at GrowthCo",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&auto=format&fit=crop",
    },
    timePosted: "5h ago",
    content: "Excited to announce that we've reached 1 million users! Thanks to everyone who has supported us along the way. #milestone #growth",
    likes: 243,
    comments: 32,
  },
  {
    id: 3,
    author: {
      name: "David Chen",
      role: "UX Designer at CreativeLab",
      avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&h=256&auto=format&fit=crop",
    },
    timePosted: "1d ago",
    content: "Working on a new design system that will change how we approach user interfaces. Stay tuned for more updates!",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop",
    likes: 156,
    comments: 24,
  },
];

const connections = [
  {
    id: 1,
    name: "Jordan Smith",
    role: "Frontend Developer",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=256&h=256&auto=format&fit=crop",
    mutualConnections: 12,
  },
  {
    id: 2,
    name: "Emma Lee",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop",
    mutualConnections: 8,
  },
  {
    id: 3,
    name: "Michael Patel",
    role: "Data Scientist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
    mutualConnections: 5,
  },
];

const Index = () => {
  return (
    <Layout>
      <div className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-20">
              <ProfileCard user={currentUser} minimal />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <CreatePost />
            
            <div className="space-y-6">
              {posts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-20">
              <div className="bg-accent/20 rounded-lg p-4">
                <h3 className="font-medium mb-4">People you may know</h3>
                <div className="space-y-4">
                  {connections.map((connection) => (
                    <ConnectionCard key={connection.id} connection={connection} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
