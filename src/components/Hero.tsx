import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Code, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import shreyaProfile from '@/assets/shreya-profile.jpg';

const Hero = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative bg-gradient-hero overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-6 h-6 bg-secondary/30 rounded-full"
          animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-3 h-3 bg-accent/25 rounded-full"
          animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div 
            className="space-y-8 lg:space-y-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-foreground">Available for new projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold font-space-grotesk leading-tight"
                whileHover={{ scale: 1.02 }}
              >
                <span className="block text-foreground">Hey! I Am</span>
                <span className="block text-gradient">Shreya Dev</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Product designer and digital creative director working in design 
                field for <span className="text-primary font-semibold">7 years</span> so far. 
                Specialize user interface design.
              </motion.p>
            </motion.div>

            {/* Services Cards */}
            <motion.div 
              className="grid grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.div 
                className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-4 hover-lift"
                whileHover={{ scale: 1.02 }}
              >
                <Code className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold text-foreground">Development</h3>
                <p className="text-sm text-muted-foreground">Modern web applications</p>
              </motion.div>
              <motion.div 
                className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-4 hover-lift"
                whileHover={{ scale: 1.02 }}
              >
                <Palette className="h-8 w-8 text-secondary mb-2" />
                <h3 className="font-semibold text-foreground">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground">Beautiful user experiences</p>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift font-semibold text-lg px-8 py-6 rounded-2xl shadow-glow"
                onClick={() => scrollToSection('portfolio')}
              >
                Hire Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#contact", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.div key={label} whileHover={{ y: -2 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover-lift transition-all duration-300 rounded-full"
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
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Floating Badge */}
            <motion.div 
              className="absolute top-10 right-10 bg-card border border-border rounded-2xl p-4 shadow-hover z-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, type: "spring" }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Best Design Awards</span>
              </div>
            </motion.div>

            <motion.div 
              className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-[3rem] overflow-hidden elegant-card hover-lift shadow-glow"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-vibrant opacity-10 rounded-[3rem]"></div>
              <img 
                src={shreyaProfile} 
                alt="Shreya - Web Developer" 
                className="w-full h-full object-cover relative z-10"
              />
            </motion.div>

            {/* Floating Stats */}
            <motion.div 
              className="absolute bottom-10 left-10 bg-card border border-border rounded-2xl p-4 shadow-hover z-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, type: "spring" }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">256.12k</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover-lift transition-all duration-300"
          onClick={() => scrollToSection('about')}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;