import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Sustainability from '@/components/Sustainability';
import Menu from '@/components/Menu';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Sustainability />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
