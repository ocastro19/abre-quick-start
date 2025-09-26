import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Target, Users } from "lucide-react";
import eagleHero from "@/assets/eagle-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${eagleHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Voando Alto com
            <span className="block text-gold">Excelência</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Construindo um futuro próspero através de liderança, integridade e compromisso com nossa comunidade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Button variant="hero" size="xl" className="group">
              Conheça Nossos Programas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Saiba Mais
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-in-left">
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 shadow-card hover:shadow-elegant transition-elegant">
              <div className="flex items-center justify-center w-12 h-12 bg-gold/20 rounded-lg mx-auto mb-4">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-2">25+</h3>
              <p className="text-primary-foreground/80">Anos de Experiência</p>
            </div>

            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 shadow-card hover:shadow-elegant transition-elegant">
              <div className="flex items-center justify-center w-12 h-12 bg-gold/20 rounded-lg mx-auto mb-4">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-2">10K+</h3>
              <p className="text-primary-foreground/80">Pessoas Atendidas</p>
            </div>

            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 shadow-card hover:shadow-elegant transition-elegant">
              <div className="flex items-center justify-center w-12 h-12 bg-gold/20 rounded-lg mx-auto mb-4">
                <Target className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-2">100+</h3>
              <p className="text-primary-foreground/80">Projetos Realizados</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;