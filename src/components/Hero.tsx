import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ChevronDown, Code, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import shreyaProfile from '@/assets/shreya-profile.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hi, I'm Shreya 👩‍💻 | I Code | I Create | I Slay 🚀";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Terminal Style Intro */}
            <motion.div 
              className="bg-card/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-muted-foreground ml-2">terminal</span>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">$ whoami</p>
                <p className="text-primary">shreya@portfolio:~$ fresher_web_developer</p>
                <p className="text-muted-foreground">$ echo "Hello World! 🌍"</p>
                <div className="flex items-center">
                  <span className="text-accent mr-2">&gt;</span>
                  <span className="typing-animation font-space-grotesk text-gradient font-bold">
                    {displayText}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="space-y-2">
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold font-space-grotesk"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-gradient">Fresher</span>
                  <br />
                  <span className="text-foreground">Web Developer</span>
                </motion.h1>
                <motion.div 
                  className="flex items-center gap-3 text-xl md:text-2xl text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <Code className="text-primary" />
                  <span>&lt;Building amazing experiences /&gt;</span>
                  <Sparkles className="text-secondary" />
                </motion.div>
              </div>

              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Ready to turn ideas into reality with modern web technologies. 
                Let's create something <span className="text-gradient font-semibold">extraordinary</span> together! ✨
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-neon transition-all duration-300 transform hover:scale-105 font-semibold text-lg px-8 py-6"
                onClick={() => scrollToSection('portfolio')}
              >
                <Zap className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 font-semibold text-lg px-8 py-6 glass-card"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#contact", label: "Email" }
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.div key={label} whileHover={{ y: -5, scale: 1.1 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="glass-card hover:shadow-glow transition-all duration-300"
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
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute -inset-2 bg-gradient-neon rounded-full opacity-30 blur-lg"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Profile Image */}
              <motion.div 
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden glass-card p-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={shreyaProfile} 
                  alt="Shreya - Web Developer" 
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>

              {/* Floating Badges */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full font-bold shadow-neon"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔥 Fresh
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-gradient-card text-foreground px-4 py-2 rounded-full font-bold shadow-glow"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                ⚡ Ready
              </motion.div>
            </div>
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
          className="rounded-full glass-card hover:shadow-glow transition-all duration-300"
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