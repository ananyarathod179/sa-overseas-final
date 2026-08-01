import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Globe, Truck, Award, Users, Phone, Mail, MapPin } from 'lucide-react';

/**
 * Home Page - SA Overseas
 * Professional B2B marine feed ingredients exporter website
 * Responsive design with hero, products, features, and contact sections
 */
export default function Home() {
  const products = [
    {
      name: 'Fish Meal',
      description: 'High-protein marine ingredient used in aquaculture and animal feed.',
      image: '/manus-storage/fish-meal-product_1ec8d19c.png',
    },
    {
      name: 'Fish Oil',
      description: 'Rich in Omega fatty acids for aquaculture, livestock and pet nutrition.',
      image: '/manus-storage/fish-oil-product_c1767a2b.png',
    },
    {
      name: 'Shrimp Meal',
      description: 'Nutritious shrimp-based ingredient with excellent protein content.',
      image: '/manus-storage/shrimp-meal-product_a7701d19.png',
    },
    {
      name: 'Poultry Meal',
      description: 'Premium poultry protein suitable for animal feed production.',
      image: '/manus-storage/fish-meal-product_1ec8d19c.png',
    },
    {
      name: 'Dry Fish',
      description: 'Carefully processed dry fish for export markets worldwide.',
      image: '/manus-storage/dry-fish-product_7cd0d8ea.png',
    },
  ];

  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Every shipment is sourced and processed to meet international quality standards.',
    },
    {
      icon: Globe,
      title: 'Bangladesh Focus',
      description: 'Dedicated to serving Bangladesh aquaculture and animal feed industries with premium products.',
    },
    {
      icon: Truck,
      title: 'Reliable Logistics',
      description: 'Efficient shipping, documentation and on-time delivery for every order.',
    },
    {
      icon: Users,
      title: 'Trusted Business',
      description: 'Committed to transparency, consistency and long-term customer relationships.',
    },
  ];

  const stats = [
    { number: '5+', label: 'Premium Products' },
    { number: '100%', label: 'Quality Commitment' },
    { number: 'Bangladesh', label: 'Primary Market' },
    { number: '24/7', label: 'Customer Support' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-b from-primary/10 to-background">
          <img
            src="/manus-storage/hero-fish-ocean_ceed8422.png"
            alt="Ocean with fish"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-transparent"></div>
          
          <div className="container relative h-full flex flex-col justify-center pb-12 md:pb-0">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Premium Marine Feed Ingredients For Bangladesh
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                SA Overseas is a trusted exporter of premium Fish Meal, Fish Oil, Shrimp Meal, Poultry Meal and Dry Fish, delivering quality products with dependable logistics for international buyers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="#products" className="w-full sm:w-auto">
                  <Button className="w-full bg-white text-primary hover:bg-white/90 text-base font-semibold px-8 py-6">
                    Explore Products
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="#contact" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white/10 text-base font-semibold px-8 py-6">
                    Request Quote
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Section */}
        <section className="py-16 md:py-24 bg-background border-b border-border">
          <div className="container text-center">
            <div className="mb-4">
              <img 
                src="/manus-storage/deb72751-5e4d-40cf-97f8-889e5a76e2d1_7c902f2d.jpeg" 
                alt="SA Overseas Logo" 
                className="w-20 h-20 mx-auto mb-6"
              />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              SA Overseas
            </h2>
            <p className="text-2xl md:text-3xl text-primary font-semibold">
              Global Connections. Reliable Solutions.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Your Trusted Export Partner
                </h2>
                <p className="text-lg text-foreground/80 mb-4">
                  SA Overseas specializes in supplying premium Fish Meal, Fish Oil, Shrimp Meal, Poultry Meal and Dry Fish to customers in Bangladesh with a commitment to quality, reliability and customer satisfaction.
                </p>
                <p className="text-lg text-foreground/80 mb-8">
                  We combine premium products, dependable logistics and excellent customer service to build lasting partnerships in Bangladesh.
                </p>
                <a href="#contact">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Premium Quality', desc: 'International standards' },
                  { title: 'Bangladesh Focus', desc: 'Primary market expertise' },
                  { title: 'Reliable Logistics', desc: 'On-time delivery' },
                  { title: 'Trusted Partnership', desc: 'Long-term relationships' },
                ].map((item, idx) => (
                  <Card key={idx} className="p-6 border-border hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-sm text-foreground/60">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Products
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Premium marine feed ingredients and dry fish carefully sourced and processed to meet international quality standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-48 bg-muted overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-foreground/70 mb-4">
                      {product.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Choose SA Overseas
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                We combine premium products, dependable logistics and excellent customer service to build lasting partnerships in Bangladesh.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-8 border-border hover:shadow-lg transition-shadow duration-300">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70">
                      {feature.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Markets Section */}
        <section id="markets" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Primary Export Market
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Delivering premium marine feed ingredients to Bangladesh with reliable logistics and complete export support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-primary mb-2">Bangladesh</h3>
                  <p className="text-foreground/70 mb-4">
                    Our primary export destination, supplying premium marine feed ingredients with reliable logistics and complete export support.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-primary">5+</div>
                      <div className="text-sm text-foreground/60">Product Categories</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">100%</div>
                      <div className="text-sm text-foreground/60">Quality Commitment</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Global Expansion
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Expanding to serve customers across Asia, the Middle East and Africa with the same commitment to quality and reliability.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-6">Market Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">Consistent Quality</div>
                      <div className="text-sm text-foreground/60">Products meet international standards</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">Competitive Pricing</div>
                      <div className="text-sm text-foreground/60">Best value for premium products</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">Reliable Shipping</div>
                      <div className="text-sm text-foreground/60">Efficient logistics and documentation</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">Expert Support</div>
                      <div className="text-sm text-foreground/60">Dedicated customer service team</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Source Premium Marine Feed Ingredients?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Partner with SA Overseas for premium Fish Meal, Fish Oil, Shrimp Meal, Poultry Meal and Dry Fish. We deliver consistent quality, competitive pricing and dependable export solutions tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button className="bg-white text-primary hover:bg-white/90 text-base font-semibold px-8 py-6">
                  Request a Quote
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base font-semibold px-8 py-6">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Get in Touch
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Have questions? Our team is ready to help you find the right marine feed ingredients for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 border-border text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-3">Phone</h3>
                <div className="space-y-2 text-foreground/70">
                  <p>+91 9173029197</p>
                  <p>+91 7779007779</p>
                </div>
              </Card>

              <Card className="p-8 border-border text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-3">Email</h3>
                <a href="mailto:contact@sa-overseas.co.in" className="text-primary hover:text-primary/80 transition-colors">
                  contact@sa-overseas.co.in
                </a>
              </Card>

              <Card className="p-8 border-border text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-3">Location</h3>
                <p className="text-foreground/70">Gujarat, India</p>
              </Card>
            </div>

            <div className="mt-12 bg-muted/50 rounded-lg p-8 border border-border text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-2">Quick Quote Request</h3>
              <p className="text-foreground/70 mb-4">
                Contact us today to discuss your requirements and get a competitive quote for our premium marine feed ingredients.
              </p>
              <Button 
                onClick={() => window.location.href = 'mailto:contact@sa-overseas.co.in'}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Send Email
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
