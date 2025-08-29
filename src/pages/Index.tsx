import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Code, Heart, Star, Users, Trophy } from "lucide-react";
import heroBackground from "@/assets/hero-gaming-bg.jpg";
import gamingMascot from "@/assets/gaming-mascot.png";

const Index = () => {
  const featuredGames = [
    {
      title: "Pixel Adventure",
      description: "A retro-style platformer with modern mechanics",
      image: "/placeholder.svg",
      genre: "Platformer",
      rating: 4.8,
      players: "1.2K",
    },
    {
      title: "Space Explorer",
      description: "Explore vast galaxies in this epic space adventure",
      image: "/placeholder.svg",
      genre: "Adventure",
      rating: 4.9,
      players: "2.5K",
    },
    {
      title: "Puzzle Master",
      description: "Mind-bending puzzles that challenge your creativity",
      image: "/placeholder.svg",
      genre: "Puzzle",
      rating: 4.7,
      players: "800",
    },
  ];

  const stats = [
    { icon: Trophy, label: "Games Created", value: "15+" },
    { icon: Users, label: "Happy Players", value: "10K+" },
    { icon: Star, label: "Average Rating", value: "4.8" },
    { icon: Heart, label: "Years Experience", value: "5+" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center space-y-8">
            <div className="w-32 h-32 animate-gaming-float">
              <img 
                src={gamingMascot} 
                alt="Gaming Mascot" 
                className="w-full h-full object-contain gaming-glow"
              />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                <span className="text-gradient-gaming">Ashish Chaudhary</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
                Crafting Fun, One Game at a Time
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate game developer creating immersive, lovable experiences that bring joy to players worldwide. 
                Ready to embark on your next gaming adventure?
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gaming" size="lg" asChild>
                <Link to="/games">
                  <Play className="w-5 h-5 mr-2" />
                  Play My Games
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  <Code className="w-5 h-5 mr-2" />
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gaming-primary rounded-full gaming-glow animate-gaming-pulse">
                  <stat.icon className="w-8 h-8 text-foreground" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-gradient-gaming">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient-gaming">
              Featured Games
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover some of my most loved creations that have captured the hearts of players everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map((game, index) => (
              <Card key={index} className="group gaming-hover overflow-hidden">
                <div className="aspect-video bg-gradient-gaming-primary relative overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <Button 
                    variant="gaming" 
                    size="sm" 
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Play className="w-4 h-4 mr-1" />
                    Play
                  </Button>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{game.genre}</Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <span>{game.rating}</span>
                    </div>
                  </div>
                  <CardTitle>{game.title}</CardTitle>
                  <CardDescription>{game.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{game.players} players</span>
                    <Button variant="ghost" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/games">
                View All Games
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-gaming-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('/api/placeholder/100/100')] bg-repeat animate-gaming-rotate" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Ready to Play Something Amazing?
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Join thousands of players who have fallen in love with my games. 
              Your next favorite gaming experience is just a click away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/10">
                <Play className="w-5 h-5 mr-2" />
                Start Playing Now
              </Button>
              <Button variant="ghost" size="lg" className="text-foreground hover:bg-foreground/10" asChild>
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;