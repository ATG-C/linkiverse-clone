
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProfileCard } from "@/components/profile-card";
import { PostCard } from "@/components/post-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const currentUser = {
  name: "Sarah Chen",
  role: "Product Designer at Design Co.",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
  background: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?q=80&w=2070&auto=format&fit=crop",
  location: "San Francisco, CA",
  company: "Design Co.",
  connections: 1283,
};

const posts = [
  {
    id: 1,
    author: {
      name: "Sarah Chen",
      role: "Product Designer at Design Co.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
    },
    timePosted: "1w ago",
    content: "Just completed a new design project! Check out my latest case study on redesigning the user experience for a fintech app.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    likes: 128,
    comments: 18,
  },
  {
    id: 2,
    author: {
      name: "Sarah Chen",
      role: "Product Designer at Design Co.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
    },
    timePosted: "3w ago",
    content: "Excited to share that I'll be speaking at the UX Design Conference next month! The topic will be 'Creating Inclusive Design Systems'. Who else is attending?",
    likes: 95,
    comments: 26,
  },
];

const experiences = [
  {
    id: 1,
    company: "Design Co.",
    role: "Product Designer",
    period: "2020 - Present",
    description: "Lead design projects for various clients across fintech, healthcare, and e-commerce sectors. Collaborate with cross-functional teams to deliver user-centered design solutions.",
  },
  {
    id: 2,
    company: "Creative Solutions Inc.",
    role: "UI/UX Designer",
    period: "2018 - 2020",
    description: "Designed user interfaces for web and mobile applications. Conducted user research and usability testing to improve product experiences.",
  },
  {
    id: 3,
    company: "Tech Innovations",
    role: "Junior Designer",
    period: "2017 - 2018",
    description: "Assisted senior designers with creating wireframes, mockups, and prototypes. Participated in design sprints and user testing sessions.",
  },
];

const education = [
  {
    id: 1,
    institution: "San Francisco University",
    degree: "Master of Design",
    field: "User Experience Design",
    period: "2015 - 2017",
  },
  {
    id: 2,
    institution: "California Art Institute",
    degree: "Bachelor of Arts",
    field: "Graphic Design",
    period: "2011 - 2015",
  },
];

const Profile = () => {
  return (
    <Layout>
      <div className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-20">
              <ProfileCard user={currentUser} />
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-3">About</h3>
                  <p className="text-sm text-muted-foreground">
                    Product designer with 5+ years of experience creating user-centered digital experiences. Passionate about solving complex problems through intuitive design.
                  </p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>San Francisco, California</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span>Product Designer at Design Co.</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span>Master of Design, San Francisco University</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="mt-6 space-y-6">
                {posts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </TabsContent>

              <TabsContent value="experience" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-4">Work Experience</h3>
                    <div className="space-y-6">
                      {experiences.map((exp) => (
                        <div key={exp.id} className="pb-4 border-b last:border-0">
                          <h4 className="font-medium">{exp.role}</h4>
                          <div className="text-sm text-muted-foreground">{exp.company} • {exp.period}</div>
                          <p className="mt-2 text-sm">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-4">Education</h3>
                    <div className="space-y-6">
                      {education.map((edu) => (
                        <div key={edu.id} className="pb-4 border-b last:border-0">
                          <h4 className="font-medium">{edu.institution}</h4>
                          <div className="text-sm text-muted-foreground">{edu.degree}, {edu.field} • {edu.period}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
