import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Coffee, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
    { icon: Coffee, label: "Cups of Coffee", value: "∞" },
    { icon: Star, label: "Years Experience", value: "3+" },
  ];

  const highlights = [
    "Diploma in Full Stack Web Development",
    "Commerce Background with Tech Passion",
    "Modern & Responsive Design Expert",
    "SEO & Digital Marketing Specialist",
    "Continuous Learning Advocate"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a creative edge and sharp technical mind
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Bio Content */}
          <div className="animate-slide-in-left">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Hi, I'm <strong>Shreya Sharma</strong>, a passionate and driven full-stack web developer with a creative edge and a sharp technical mind. I specialize in designing and building modern, responsive websites and web applications that not only look great but also function flawlessly.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                My journey into tech began with a background in commerce, but my passion for building and problem-solving led me to the world of web development. I hold a diploma in Full Stack Web Development, and while my academic path may be unconventional, my knowledge and skill set in web development are precise, up-to-date, and fully aligned with the demands of today's fast-paced tech world.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                I have a deep understanding of both frontend and backend technologies — from crafting pixel-perfect UIs with HTML, CSS, JavaScript, React, and Angular, to building powerful backend systems using PHP, Python, Node.js, and more. My toolkit also includes experience in UI/UX design using Figma and Canva, database management (MySQL, MongoDB), and SEO/Digital Marketing strategies that boost client visibility and growth.
              </p>
              
              <p className="text-lg leading-relaxed">
                I believe in continuous learning and self-improvement. I work hard to ensure that every project is better than the last and that there's no room for compromise when it comes to quality.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Key Highlights</h3>
              <div className="flex flex-wrap gap-2">
                {highlights.map((highlight, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
            
            {/* Personal Quote */}
            <Card className="mt-6 p-6 bg-gradient-primary text-white shadow-glow">
              <blockquote className="text-lg italic text-center">
                "I'm passionate about creating tailored digital solutions that meet unique client goals. Whether it's a sleek business website, an engaging portfolio, or a robust e-commerce platform, I take pride in delivering high-quality, scalable work."
              </blockquote>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;