import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import shreyaProfile from '@/assets/shreya-profile.jpg';

const Hero = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative bg-gradient-hero">
      <div className="container mx-auto px-4 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div 
            className="space-y-8 lg:space-y-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Heading */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-light font-space-grotesk leading-tight"
                whileHover={{ scale: 1.02 }}
              >
                <span className="block text-foreground">LIFE IS A</span>
                <span className="block text-foreground font-bold">PARTY</span>
              </motion.h1>
              
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-light text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                DO IT IN<br />
                <span className="font-bold text-foreground">STYLE</span>
              </motion.h2>
            </motion.div>

            <motion.div 
              className="flex items-center justify-between text-sm font-medium text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <span>WEB DEVELOPER</span>
              <span>BASED IN INDIA</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift font-medium text-base px-8 py-4"
                onClick={() => scrollToSection('portfolio')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-muted hover-lift font-medium text-base px-8 py-4"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
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
                    className="hover-lift transition-all duration-300"
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
            <motion.div 
              className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden elegant-card hover-lift"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={shreyaProfile} 
                alt="Shreya - Web Developer" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
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