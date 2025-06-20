'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Star, Zap, Shield, Users, Check, Menu, X } from 'lucide-react';

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Built with Next.js 14 and optimized for maximum performance"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team in real-time"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "This platform transformed our workflow completely. The performance is incredible!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Developer, InnovateCorp",
      content: "Best development experience I've ever had. The component library is amazing.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Product Manager, StartupXYZ",
      content: "Intuitive, powerful, and beautifully designed. Our team productivity increased by 300%.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      features: ["Up to 5 projects", "Basic analytics", "Email support", "2GB storage"],
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      features: ["Unlimited projects", "Advanced analytics", "Priority support", "50GB storage", "Team collaboration"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      features: ["Everything in Pro", "Custom integrations", "Dedicated support", "Unlimited storage", "Advanced security"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              NextLand
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#testimonials" className="hover:text-purple-400 transition-colors">Reviews</a>
              <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a href="#features" className="block hover:text-purple-400 transition-colors">Features</a>
              <a href="#testimonials" className="block hover:text-purple-400 transition-colors">Reviews</a>
              <a href="#pricing" className="block hover:text-purple-400 transition-colors">Pricing</a>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              {" "}Amazing{" "}
            </span>
            Apps Faster
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            The most powerful Next.js platform for building modern web applications.
            Start your journey with lightning-fast performance and beautiful components.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400/10 transition-all">
              Watch Demo
            </button>
          </div>

          <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                ))}
              </div>
              <span>10,000+ developers</span>
            </div>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2">4.9/5 rating</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Modern Development
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale your applications with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            What Our
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Customers Say
            </span>
          </h2>

          <div className="relative h-64 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentTestimonial 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xl mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-purple-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-purple-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300">Choose the perfect plan for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-lg p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-400/50 ring-2 ring-purple-400/20' 
                    : 'border-white/10 hover:border-purple-400/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                    : 'border border-purple-400 hover:bg-purple-400/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Amazing?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers who are already building the future with our platform.
          </p>
          <button className="group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
            Start Your Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                NextLand
              </div>
              <p className="text-gray-400">
                Building the future of web development, one component at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NextLand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;