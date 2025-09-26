import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default Index;
