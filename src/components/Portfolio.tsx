import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react';

const Portfolio = () => {
  // Placeholder projects - these would be replaced with real projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration, inventory management, and user accounts.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full-Stack",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Business Website",
      description: "Modern, responsive business website with CMS integration and SEO optimization.",
      image: "/placeholder.svg",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      category: "Frontend",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Creative portfolio website with smooth animations and modern design.",
      image: "/placeholder.svg",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Learning Management System",
      description: "Educational platform with course management, user progress tracking, and certificates.",
      image: "/placeholder.svg",
      technologies: ["Laravel", "Vue.js", "MySQL"],
      category: "Full-Stack",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Restaurant Website",
      description: "Restaurant website with online ordering system and table reservation functionality.",
      image: "/placeholder.svg",
      technologies: ["React", "Firebase", "Stripe API"],
      category: "Full-Stack",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Non-Profit Organization",
      description: "Clean, accessible website for a non-profit with donation integration and volunteer management.",
      image: "/placeholder.svg",
      technologies: ["WordPress", "Custom PHP", "PayPal API"],
      category: "CMS",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Full-Stack", "Frontend", "CMS"];

  return (
    <section id="portfolio" className="py-12 lg:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest work and creative solutions
          </p>
        </div>

        {/* Portfolio Note */}
        <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Card className="inline-block p-6 bg-gradient-primary text-white shadow-glow">
            <div className="flex items-center justify-center space-x-3">
              <ImageIcon className="w-6 h-6" />
              <p className="text-lg font-medium">
                Portfolio projects coming soon! Currently building amazing new work to showcase.
              </p>
            </div>
          </Card>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {categories.map((category, index) => (
            <Button 
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="overflow-hidden bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-muted-foreground/50" />
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="glass">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="glass">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex space-x-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-semibold mb-4">Like What You See?</h3>
          <p className="text-muted-foreground mb-6">
            Let's discuss your project and bring your ideas to life
          </p>
          <Button variant="cta" size="lg">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;