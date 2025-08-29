import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Users, Calendar, Filter } from "lucide-react";

const Games = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Action", "Adventure", "Puzzle", "Platformer", "Strategy"];
  
  const games = [
    {
      id: 1,
      title: "Pixel Adventure",
      description: "A retro-style platformer with modern mechanics and lovable characters",
      longDescription: "Embark on an epic journey through vibrant pixel worlds filled with challenging obstacles, hidden secrets, and adorable characters. This game combines the nostalgia of classic platformers with innovative gameplay mechanics.",
      image: "/placeholder.svg",
      genre: "Platformer",
      category: "Platformer",
      rating: 4.8,
      players: "1.2K",
      releaseDate: "2023",
      status: "Live",
      features: ["Single Player", "Controller Support", "Achievements"],
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Space Explorer",
      description: "Explore vast galaxies in this epic space adventure",
      longDescription: "Navigate through the cosmos in your customizable spaceship, discover alien civilizations, and uncover the mysteries of the universe. Every planet holds new surprises and challenges.",
      image: "/placeholder.svg",
      genre: "Adventure",
      category: "Adventure",
      rating: 4.9,
      players: "2.5K",
      releaseDate: "2023",
      status: "Live",
      features: ["Multiplayer", "Open World", "Crafting"],
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Puzzle Master",
      description: "Mind-bending puzzles that challenge your creativity",
      longDescription: "Test your problem-solving skills with increasingly complex puzzles. Each level introduces new mechanics and challenges that will keep you thinking for hours.",
      image: "/placeholder.svg",
      genre: "Puzzle",
      category: "Puzzle",
      rating: 4.7,
      players: "800",
      releaseDate: "2022",
      status: "Live",
      features: ["Brain Training", "Progressive Difficulty", "Hint System"],
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "Battle Arena",
      description: "Fast-paced action combat with strategic depth",
      longDescription: "Master different fighting styles and weapons in intense arena battles. Compete against AI or challenge your friends in this action-packed combat game.",
      image: "/placeholder.svg",
      genre: "Action",
      category: "Action",
      rating: 4.6,
      players: "3.1K",
      releaseDate: "2024",
      status: "Live",
      features: ["PvP", "Tournament Mode", "Character Customization"],
      downloadUrl: "#"
    },
    {
      id: 5,
      title: "Kingdom Builder",
      description: "Build and manage your own medieval kingdom",
      longDescription: "Start with a small village and grow it into a mighty kingdom. Make strategic decisions, manage resources, and lead your people to prosperity.",
      image: "/placeholder.svg",
      genre: "Strategy",
      category: "Strategy",
      rating: 4.5,
      players: "1.8K",
      releaseDate: "2024",
      status: "Early Access",
      features: ["City Building", "Resource Management", "Diplomacy"],
      downloadUrl: "#"
    },
    {
      id: 6,
      title: "Mystic Quest",
      description: "Epic RPG adventure in a magical fantasy world",
      longDescription: "Embark on a quest to save the magical realm from an ancient evil. Level up your character, learn powerful spells, and forge legendary weapons.",
      image: "/placeholder.svg",
      genre: "RPG",
      category: "Adventure",
      rating: 4.9,
      players: "5.2K",
      releaseDate: "Coming 2024",
      status: "Coming Soon",
      features: ["Epic Story", "Character Progression", "Magic System"],
      downloadUrl: "#"
    }
  ];

  const filteredGames = selectedCategory === "All" 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-success text-success-foreground";
      case "Early Access": return "bg-warning text-warning-foreground";
      case "Coming Soon": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center space-y-6 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient-gaming">
            Game Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my collection of lovable games, each crafted with passion and designed to bring joy to players of all ages.
          </p>
        </section>

        {/* Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center text-muted-foreground mr-4">
              <Filter className="w-4 h-4 mr-2" />
              <span className="font-medium">Filter by category:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "gaming" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="gaming-hover"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Games Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game) => (
              <Card key={game.id} className="group overflow-hidden gaming-hover">
                <div className="aspect-video bg-gradient-gaming-primary relative overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  
                  {/* Status Badge */}
                  <Badge 
                    className={`absolute top-4 left-4 ${getStatusColor(game.status)}`}
                  >
                    {game.status}
                  </Badge>
                  
                  {/* Play Button */}
                  <Button 
                    variant="gaming" 
                    size="sm" 
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    disabled={game.status === "Coming Soon"}
                  >
                    <Play className="w-4 h-4 mr-1" />
                    {game.status === "Coming Soon" ? "Soon" : "Play"}
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
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {game.title}
                  </CardTitle>
                  <CardDescription>{game.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Game Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{game.players} players</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{game.releaseDate}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {game.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      variant={game.status === "Coming Soon" ? "outline" : "default"} 
                      size="sm" 
                      className="flex-1"
                      disabled={game.status === "Coming Soon"}
                    >
                      {game.status === "Coming Soon" ? "Wishlist" : "Play Now"}
                    </Button>
                    <Button variant="ghost" size="sm">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-gaming-hero">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                More Games Coming Soon!
              </h2>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                I'm constantly working on new and exciting projects. Stay tuned for updates 
                and be the first to know when new games are released!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/10">
                  Subscribe for Updates
                </Button>
                <Button variant="ghost" size="lg" className="text-foreground hover:bg-foreground/10">
                  Follow Development Blog
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Games;