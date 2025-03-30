
import { useState } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Search, Filter, Bookmark, Bell, Star, MapPin, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample data
const savedJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=256&h=256&auto=format&fit=crop",
    postedAt: "2 days ago",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    salary: "$120K - $150K",
    applied: false,
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "CreativeDesign Co.",
    location: "Remote",
    type: "Contract",
    logo: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=256&h=256&auto=format&fit=crop",
    postedAt: "1 week ago",
    skills: ["Figma", "UX Research", "UI Design"],
    salary: "$85K - $110K",
    applied: true,
  },
];

const recommendedJobs = [
  {
    id: 1,
    title: "Product Manager",
    company: "Growth Startup",
    location: "New York, NY",
    type: "Full-time",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=256&h=256&auto=format&fit=crop",
    postedAt: "3 hours ago",
    skills: ["Product Strategy", "Agile", "User Research"],
    salary: "$130K - $160K",
    applicants: 12,
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Tech Innovations Ltd.",
    location: "Austin, TX",
    type: "Full-time",
    logo: "https://images.unsplash.com/photo-1549921860-31f1ce56660b?q=80&w=256&h=256&auto=format&fit=crop",
    postedAt: "1 day ago",
    skills: ["React", "Node.js", "MongoDB", "Next.js"],
    salary: "$110K - $140K",
    applicants: 24,
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Analytics Corp.",
    location: "Remote",
    type: "Full-time",
    logo: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?q=80&w=256&h=256&auto=format&fit=crop",
    postedAt: "2 days ago",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
    salary: "$125K - $155K",
    applicants: 18,
  },
  {
    id: 4,
    title: "Marketing Manager",
    company: "Brand Solutions",
    location: "Chicago, IL",
    type: "Full-time",
    logo: "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?q=80&w=256&h=256&auto=format&fit=crop",
    postedAt: "3 days ago",
    skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
    salary: "$95K - $120K",
    applicants: 32,
  },
];

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const filteredJobs = recommendedJobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  return (
    <Layout>
      <div className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <Card className="mb-6">
              <CardHeader className="pb-3">
                <h2 className="text-xl font-semibold flex items-center">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Job Search Tools
                </h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Job Alerts</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bookmark className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Saved Jobs</span>
                  </div>
                  <span className="text-sm">{savedJobs.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Applied Jobs</span>
                  </div>
                  <span className="text-sm">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Skills Assessment</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Building className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Company Reviews</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <h2 className="text-lg font-semibold">Recent Job Searches</h2>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium">Frontend Developer</div>
                  <div className="text-muted-foreground">San Francisco, CA</div>
                  <div className="text-xs text-muted-foreground">3 days ago</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">UX Designer</div>
                  <div className="text-muted-foreground">Remote</div>
                  <div className="text-xs text-muted-foreground">1 week ago</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Product Manager</div>
                  <div className="text-muted-foreground">New York, NY</div>
                  <div className="text-xs text-muted-foreground">2 weeks ago</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-4 space-y-3">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search by title, skill, or company" 
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Location" 
                    className="pl-8"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  />
                </div>
                <Button className="w-full">Search Jobs</Button>
              </CardContent>
            </Card>

            <Tabs defaultValue="recommended">
              <TabsList className="mb-4 w-full">
                <TabsTrigger value="recommended" className="flex-1">Recommended</TabsTrigger>
                <TabsTrigger value="saved" className="flex-1">Saved Jobs ({savedJobs.length})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="recommended" className="space-y-4">
                {filteredJobs.map((job) => (
                  <Card key={job.id} className="hover-card">
                    <CardContent className="p-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-16 h-16 rounded overflow-hidden shrink-0">
                          <img src={job.logo} alt={job.company} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{job.title}</h3>
                          <p className="text-muted-foreground">{job.company}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {job.location} • {job.type}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1">
                            {job.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                            ))}
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <div className="text-sm text-muted-foreground">
                              <span className="font-medium text-foreground">{job.salary}</span> • {job.postedAt}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {job.applicants} applicants
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4 pb-3">
                      <Button variant="outline" size="sm">
                        <Bookmark className="mr-1 h-4 w-4" /> Save
                      </Button>
                      <Button size="sm">Apply Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="saved" className="space-y-4">
                {savedJobs.map((job) => (
                  <Card key={job.id} className="hover-card">
                    <CardContent className="p-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-16 h-16 rounded overflow-hidden shrink-0">
                          <img src={job.logo} alt={job.company} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{job.title}</h3>
                          <p className="text-muted-foreground">{job.company}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {job.location} • {job.type}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1">
                            {job.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                            ))}
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <div className="text-sm text-muted-foreground">
                              <span className="font-medium text-foreground">{job.salary}</span> • {job.postedAt}
                            </div>
                            {job.applied && (
                              <Badge variant="outline" className="text-xs">Applied</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4 pb-3">
                      <Button variant="destructive" size="sm">
                        Remove
                      </Button>
                      {!job.applied && <Button size="sm">Apply Now</Button>}
                      {job.applied && <Button variant="outline" size="sm">View Application</Button>}
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Jobs;
