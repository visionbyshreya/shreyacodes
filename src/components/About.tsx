import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Coffee, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: "Fast & Responsive", value: "⚡" },
    { icon: Users, label: "Secure & Scalable", value: "🔒" },
    { icon: Coffee, label: "Collaborative & Clear", value: "💬" },
    { icon: Star, label: "Cups of Coffee", value: "∞" },
  ];

  const highlights = [
    "Diploma in Full Stack Web Development",
    "Commerce Background with Tech Passion",
    "Modern & Responsive Design Expert",
    "SEO & Digital Marketing Specialist",
    "Continuous Learning Advocate"
  ];

  return (
    <section id="about" className="py-12 lg:py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a creative edge and sharp technical mind
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          {/* Bio Content */}
          <div className="animate-slide-in-left">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Hi, I'm <strong className="text-primary">Shreya Sharma</strong>, a passionate and driven full-stack web developer with a creative edge and a sharp technical mind. I specialize in designing and building modern, responsive websites and web applications that not only look great but also function flawlessly.
              </p>
              
              <p className="text-lg leading-relaxed">
                My journey into tech began with a background in commerce, but my passion for building and problem-solving led me to the world of web development. I hold a diploma in Full Stack Web Development, and while my academic path may be unconventional, my knowledge and skill set in web development are precise, up-to-date, and fully aligned with the demands of today's fast-paced tech world.
              </p>
              
              <p className="text-lg leading-relaxed">
                I have a deep understanding of both frontend and backend technologies — from crafting pixel-perfect UIs with HTML, CSS, JavaScript, React, and Angular, to building powerful backend systems using PHP, Python, Node.js, and more. My toolkit also includes experience in UI/UX design using Figma and Canva, database management (MySQL, MongoDB), and SEO/Digital Marketing strategies that boost client visibility and growth.
              </p>
              
              <p className="text-lg leading-relaxed">
                I'm passionate about creating tailored digital solutions that meet unique client goals. Whether it's a sleek business website, an engaging portfolio, or a robust e-commerce platform, I take pride in delivering high-quality, scalable work.
              </p>
              
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring design inspiration, upgrading my skills, or helping others elevate their online presence.
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                "Good design is silent. Great design speaks — and I help it speak clearly."
              </blockquote>
              <p className="text-center text-white/80 text-sm mt-2">- My Design Philosophy</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;