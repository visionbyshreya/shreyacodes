import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import shreyaImage from '@/assets/shreya-headshot.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-primary-glow opacity-10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="text-foreground">Hi! I Am</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Shreya Sharma
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-2">
                Full-Stack Web Developer
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                UI/UX Designer | SEO & Digital Marketing Specialist
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                "Good design is silent. Great design speaks — and I help it speak clearly."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="animate-scale-in"
                style={{ animationDelay: '0.2s' }}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="animate-scale-in"
                style={{ animationDelay: '0.4s' }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-glow-pulse"></div>
              <div className="absolute inset-4 bg-gradient-card rounded-full shadow-card"></div>
              
              {/* Profile Image */}
              <img
                src={shreyaImage}
                alt="Shreya Sharma - Full Stack Developer"
                className="absolute inset-8 w-auto h-auto object-cover rounded-full shadow-hover"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow animate-bounce">
                <span className="text-white font-bold">👋</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('about')}
            className="rounded-full"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;