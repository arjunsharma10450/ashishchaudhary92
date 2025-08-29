import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Gamepad2, Heart, Lightbulb, Trophy, Users } from "lucide-react";

const About = () => {
  const skills = [
    "Unity", "Unreal Engine", "C#", "JavaScript", "Python", "React", 
    "Node.js", "Game Design", "3D Modeling", "UI/UX Design"
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Indie Game Festival Winner",
      description: "Best Mobile Game 2023",
      year: "2023"
    },
    {
      icon: Users,
      title: "10K+ Happy Players",
      description: "Across all platforms",
      year: "2024"
    },
    {
      icon: Heart,
      title: "Community Choice Award",
      description: "Most Loved Indie Developer",
      year: "2023"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Started Game Development Journey",
      description: "Created my first game using Unity and fell in love with the process"
    },
    {
      year: "2020",
      title: "First Published Game",
      description: "Released 'Pixel Adventure' which gained 1000+ downloads in the first month"
    },
    {
      year: "2021",
      title: "Full-Time Indie Developer",
      description: "Made the leap to pursue game development as a full-time career"
    },
    {
      year: "2022",
      title: "Studio Formation",
      description: "Founded my indie game studio focusing on lovable, accessible games"
    },
    {
      year: "2023",
      title: "Recognition & Awards",
      description: "Won multiple indie game awards and reached 10K+ players milestone"
    },
    {
      year: "2024",
      title: "Expanding Horizons",
      description: "Currently working on my biggest project yet - a multiplayer adventure game"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gradient-gaming">
              About Ashish
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hi there! I'm Ashish Chaudhary, a passionate game developer who believes that 
              games have the power to bring joy, create connections, and inspire creativity. 
              My mission is to craft lovable gaming experiences that leave players with a smile.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <Card className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gradient-gaming flex items-center">
                  <Heart className="w-8 h-8 mr-3 text-primary animate-gaming-pulse" />
                  My Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    My journey into game development started when I was just 12 years old, 
                    playing my first video game. I was fascinated by how these digital worlds 
                    could evoke such strong emotions and create memorable experiences.
                  </p>
                  <p>
                    After years of learning programming and game design, I decided to turn my 
                    passion into a career. I believe that the best games are those that make 
                    players feel something - whether it's excitement, wonder, or pure joy.
                  </p>
                  <p>
                    Today, I focus on creating games that are not just fun to play, but also 
                    meaningful and accessible to everyone. Every game I create is infused with 
                    love, attention to detail, and a desire to make the world a little brighter.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-gaming-hero rounded-lg p-8 flex items-center justify-center">
                  <Gamepad2 className="w-32 h-32 text-foreground animate-gaming-float" />
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold text-gradient-gaming flex items-center justify-center">
              <Code className="w-8 h-8 mr-3 text-primary" />
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground">
              The tools and technologies I use to bring my gaming visions to life
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm gaming-hover"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold text-gradient-gaming">
              Achievements & Recognition
            </h2>
            <p className="text-muted-foreground">
              Milestones that mark my journey as a game developer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center gaming-hover">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-gaming-primary rounded-full flex items-center justify-center gaming-glow">
                    <achievement.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <CardTitle>{achievement.title}</CardTitle>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{achievement.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gradient-gaming flex items-center justify-center">
              <Lightbulb className="w-8 h-8 mr-3 text-primary animate-gaming-pulse" />
              My Journey
            </h2>
            <p className="text-muted-foreground">
              The path that led me to become the game developer I am today
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-gaming-hero rounded-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="gaming-hover">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">{item.year}</Badge>
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full gaming-glow"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-gaming-hero">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Let's Create Something Amazing Together!
              </h2>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                Whether you're looking to collaborate on a project, have a game idea, 
                or just want to chat about game development, I'd love to hear from you.
              </p>
              <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/10">
                Get in Touch
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;