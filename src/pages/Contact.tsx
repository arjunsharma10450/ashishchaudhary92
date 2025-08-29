import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, Github, Linkedin, Twitter, MapPin, Clock, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully! 🎮",
      description: "Thanks for reaching out! I'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      projectType: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const projectTypes = [
    "Game Development", "Collaboration", "Freelance Work", "Speaking", "Mentoring", "Other"
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "ashish@gamedev.com",
      link: "mailto:ashish@gamedev.com",
      primary: true
    },
    {
      icon: MessageCircle,
      title: "Discord",
      description: "AshishDev#1234",
      link: "#",
      primary: false
    },
    {
      icon: Phone,
      title: "Schedule a Call",
      description: "Book a 30-min chat",
      link: "#",
      primary: false
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-gray-400" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-blue-400" },
  ];

  const faqs = [
    {
      question: "What types of projects do you work on?",
      answer: "I love working on indie games, educational games, mobile games, and web-based gaming experiences. I'm also open to game design consulting and mentoring."
    },
    {
      question: "What's your development timeline?",
      answer: "Project timelines vary based on scope and complexity. Simple games can take 2-4 weeks, while larger projects may take 3-6 months. I'll provide a detailed timeline after discussing your requirements."
    },
    {
      question: "Do you work with teams or solo?",
      answer: "I enjoy both! I can work independently on smaller projects or collaborate with teams for larger endeavors. I'm experienced in remote collaboration and agile development."
    },
    {
      question: "Can you help with game ideas and concept development?",
      answer: "Absolutely! I love the creative process and can help you refine game concepts, create prototypes, and develop full game design documents."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center space-y-6 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient-gaming">
            Let's Create Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a game idea? Want to collaborate? Or just want to chat about game development? 
            I'd love to hear from you! Let's make something amazing together.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl text-gradient-gaming">Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Project Type</Label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <Badge
                          key={type}
                          variant={formData.projectType === type ? "default" : "outline"}
                          className="cursor-pointer gaming-hover"
                          onClick={() => setFormData(prev => ({ ...prev, projectType: type }))}
                        >
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, ideas, or questions..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="gaming" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center space-x-3 gaming-hover p-3 rounded-lg hover:bg-muted/50">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      method.primary ? 'bg-gradient-gaming-primary gaming-glow' : 'bg-muted'
                    }`}>
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">{method.title}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">Remote Worldwide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">Usually responds within 24 hours</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl">Follow My Journey</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="icon"
                      asChild
                      className="gaming-hover"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gradient-gaming">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about working with me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 gaming-hover">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <Card className="p-8 bg-gradient-gaming-hero">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Ready to Start Your Gaming Project?
              </h2>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                Whether you have a fully formed idea or just a spark of inspiration, 
                I'm here to help bring your gaming vision to life. Let's create something amazing together!
              </p>
              <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/10">
                Start Your Project
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;