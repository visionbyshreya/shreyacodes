import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Smartphone, 
  ShoppingCart, 
  Wrench, 
  Search, 
  TrendingUp,
  Palette,
  Globe,
  Zap,
  Shield,
  BarChart,
  Mail
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Tailored web solutions built from scratch to meet your unique business needs and goals.",
      features: ["Custom Functionality", "Scalable Architecture", "Clean Code", "Modern Technologies"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Responsive Web Design",
      description: "Seamless experience across all devices with mobile-first, responsive design approach.",
      features: ["Mobile-First Design", "Cross-Browser Compatible", "Touch-Friendly", "Fast Loading"],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "User-friendly online stores with secure payment integration and inventory management.",
      features: ["Payment Gateway", "Inventory System", "User Accounts", "Admin Dashboard"],
      gradient: "from-blue-700 to-blue-800"
    },
    {
      icon: Wrench,
      title: "Web Maintenance & Support",
      description: "Keep your website secure, updated, and running smoothly with ongoing maintenance.",
      features: ["Security Updates", "Bug Fixes", "Performance Optimization", "24/7 Support"],
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const websiteTypes = [
    { name: "Business", icon: Globe },
    { name: "Blog", icon: Mail },
    { name: "Portfolio", icon: Palette },
    { name: "Education", icon: BarChart },
    { name: "Non-Profit", icon: Shield },
    { name: "Event", icon: Zap },
    { name: "Community", icon: TrendingUp }
  ];

  const seoServices = [
    "Keyword Research",
    "On-page Optimization", 
    "Link Building",
    "Technical SEO",
    "SEO Audits"
  ];

  const digitalMarketingServices = [
    "SEO",
    "PPC Advertising",
    "Social Media Marketing",
    "Content Marketing",
    "Email Marketing"
  ];

  const graphicDesignServices = [
    "Logo Design",
    "Branding",
    "Brochures",
    "Infographics",
    "Icon Design"
  ];

  return (
    <section id="services" className="py-12 lg:py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            My Awesome <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your online presence
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {mainServices.map((service, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Website Types */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl font-semibold text-center mb-8">Website Types I Build</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {websiteTypes.map((type, index) => (
              <Card key={index} className="px-6 py-4 flex items-center space-x-3 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 cursor-pointer">
                <type.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{type.name}</span>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {/* SEO Services */}
          <Card className="p-8 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">SEO Services</h3>
              <p className="text-muted-foreground text-sm">Boost your search engine visibility</p>
            </div>
            <ul className="space-y-2 mb-6">
              {seoServices.map((service, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
            <div className="text-sm text-muted-foreground">
              <strong>Benefits:</strong> More leads, higher visibility, long-term traffic growth
            </div>
          </Card>

          {/* Digital Marketing */}
          <Card className="p-8 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-muted-foreground text-sm">Comprehensive marketing solutions</p>
            </div>
            <ul className="space-y-2 mb-6">
              {digitalMarketingServices.map((service, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
            <div className="text-sm text-muted-foreground">
              <strong>Benefits:</strong> Increased reach, better ROI, targeted audience engagement
            </div>
          </Card>

          {/* Graphic Design */}
          <Card className="p-8 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Graphic Design</h3>
              <p className="text-muted-foreground text-sm">Visual identity and branding</p>
            </div>
            <ul className="space-y-2 mb-6">
              {graphicDesignServices.map((service, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
            <div className="text-sm text-muted-foreground">
              <strong>Benefits:</strong> Brand identity, engagement, credibility
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Card className="inline-block p-8 bg-gradient-primary text-white shadow-glow">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
            <p className="mb-6 text-white/90">Let's discuss how I can help bring your vision to life</p>
            <Button variant="glass" size="lg">
              Get a Free Quote
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;