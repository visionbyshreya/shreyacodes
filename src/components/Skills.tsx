import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Palette, 
  Wrench, 
  Globe,
  Monitor,
  Server,
  Figma,
  Chrome
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "TypeScript"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: ["PHP", "Python", "Java", "Node.js", "Express", "RESTful APIs"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
      color: "from-blue-700 to-blue-800"
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      skills: ["Figma", "Canva", "Adobe XD", "Responsive Design", "User Experience"],
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Frameworks",
      icon: Code,
      skills: ["Laravel", "Django", "Ruby on Rails", "Bootstrap", "Tailwind CSS"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: ["Git", "VS Code", "Sublime Text", "Docker", "AWS", "Vercel"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const certifications = [
    "Full Stack Web Development Diploma",
    "React Certified Developer",
    "Google Analytics Certified",
    "SEO Fundamentals"
  ];

  return (
    <section id="skills" className="py-12 lg:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-semibold mb-8">Certifications & Education</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {certifications.map((cert, index) => (
              <Card key={index} className="px-6 py-3 bg-gradient-primary text-white shadow-glow hover:shadow-hover transition-all duration-300">
                <span className="font-medium">{cert}</span>
              </Card>
            ))}
          </div>
        </div>

        {/* Skill Proficiency */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-semibold text-center mb-8">Core Competencies</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-4 text-primary">Technical Skills</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full-Stack Web Development</li>
                  <li>• Responsive Design & Mobile-First Approach</li>
                  <li>• Database Design & Management</li>
                  <li>• API Development & Integration</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4 text-primary">Business Skills</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• SEO & Digital Marketing</li>
                  <li>• Client Communication & Project Management</li>
                  <li>• Problem-Solving & Analytical Thinking</li>
                  <li>• Continuous Learning & Adaptation</li>
                  <li>• Quality Assurance & Testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;