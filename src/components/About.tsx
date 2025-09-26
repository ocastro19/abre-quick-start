import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Eye, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compromisso",
      description: "Dedicação total ao bem-estar da nossa comunidade e ao cumprimento de nossas promessas."
    },
    {
      icon: Eye,
      title: "Transparência",
      description: "Abertura total em nossas ações, processos e utilização de recursos públicos."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Busca constante por soluções criativas e eficientes para os desafios modernos."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Padrão superior de qualidade em todos os serviços e projetos que desenvolvemos."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-primary">Eagle</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma instituição comprometida com a excelência, transparência e o desenvolvimento sustentável da nossa sociedade.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Nossa Missão
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A Eagle nasceu com o propósito de voar alto e levar nossa comunidade a novos patamares de desenvolvimento. 
                Com mais de duas décadas de experiência, consolidamos nossa posição como uma instituição de referência 
                em gestão pública e projetos sociais.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nosso trabalho se fundamenta em pilares sólidos: transparência nas ações, inovação nas soluções, 
                compromisso com resultados e excelência no atendimento às necessidades da população.
              </p>
              <div className="bg-gradient-card p-6 rounded-lg border border-border shadow-card">
                <blockquote className="text-lg font-medium text-foreground italic">
                  "Como a águia que voa alto e enxerga longe, nossa visão é construir um futuro próspero 
                  para as gerações presentes e futuras."
                </blockquote>
                <cite className="text-primary font-semibold mt-4 block">Liderança Eagle</cite>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative animate-fade-in">
              <div className="bg-gradient-primary rounded-2xl p-8 shadow-hero">
                <div className="text-center text-primary-foreground">
                  <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-gold" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Reconhecimento</h4>
                  <p className="text-primary-foreground/90 mb-6">
                    Premiada como Instituição do Ano por três anos consecutivos
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-gold">98%</div>
                      <div className="text-sm text-primary-foreground/80">Aprovação</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gold">A+</div>
                      <div className="text-sm text-primary-foreground/80">Classificação</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-elegant group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;