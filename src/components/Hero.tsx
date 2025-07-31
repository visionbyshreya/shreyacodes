import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Code, Palette, Download, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import shreyaProfile from '@/assets/shreya-profile.jpg';

const Hero = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative bg-gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-[10%] w-20 h-20 bg-primary/10 rounded-full blur-xl"
          animate={{ 
            y: [0, -30, 0], 
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-[15%] w-32 h-32 bg-accent/15 rounded-full blur-2xl"
          animate={{ 
            y: [0, 25, 0], 
            x: [0, -25, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-[20%] w-16 h-16 bg-secondary/20 rounded-full blur-lg"
          animate={{ 
            y: [0, -40, 0], 
            x: [0, 30, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="container mx-auto px-6 h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Professional Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full text-sm font-medium backdrop-blur-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Star className="h-5 w-5 text-primary" />
              <span className="text-foreground font-semibold">Full-Stack Developer | Available for Projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="block text-foreground mb-2">Hello, I'm</span>
                <span className="block text-blue-600">Shreya Sharma</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <span className="font-semibold text-black">Full-Stack Web Developer</span>
              </motion.p>
              
              <motion.div
                className="text-lg text-muted-foreground italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                "Good design is silent. Great design speaks — and I help it speak clearly."
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Button 
                variant="outline"
                size="lg" 
                className="font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#contact", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.div 
                  key={label} 
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 rounded-full w-12 h-12"
                    asChild
                  >
                    <a href={href} aria-label={label}>
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Floating Achievement Badge */}
            <motion.div 
              className="absolute -top-4 -right-4 glass-effect rounded-2xl p-4 shadow-glow z-20 backdrop-blur-lg"
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-foreground">Available for Projects</span>
              </div>
            </motion.div>

            {/* Main Profile Image */}
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-glow group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-secondary/20 rounded-full group-hover:opacity-30 transition-opacity duration-500"></div>
              <img 
                src={shreyaProfile} 
                alt="Shreya Sharma - Full-Stack Developer" 
                className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-full"></div>
            </motion.div>


            {/* Floating Tech Stack */}
            <motion.div 
              className="absolute top-1/2 -left-8 glass-effect rounded-xl p-3 shadow-glow z-20 backdrop-blur-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium text-foreground">React</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.8 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-primary/10 transition-all duration-300 w-12 h-12"
          onClick={() => scrollToSection('about')}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-primary" />
          </motion.div>
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;