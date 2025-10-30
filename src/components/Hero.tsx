import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-cafe.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="gradient-hero absolute inset-0 opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl animate-fade-in-slow px-4 text-center">
        {/* Logo/Brand Name */}
        <div className="mb-8">
          <h1 className="mb-2 text-6xl font-bold text-primary md:text-7xl lg:text-8xl">
            MindBrew Light
          </h1>
          <p className="text-lg font-medium tracking-wider text-accent md:text-xl">
            The Light Therapy Café
          </p>
        </div>

        {/* Headline */}
        <h2 className="mb-6 text-balance text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
          Bringing Wellness to Dublin
        </h2>

        {/* Subtext */}
        <p className="mx-auto mb-12 max-w-2xl text-balance text-xl text-muted-foreground md:text-2xl">
          A café where sunlight meets coffee — relax, recharge, and feel good.
        </p>

        {/* CTAs */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="rounded-full bg-primary px-8 py-6 text-lg text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary-light hover:shadow-xl"
            onClick={() => scrollToSection('contact')}
          >
            Visit Us
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-accent px-8 py-6 text-lg text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            onClick={() => scrollToSection('about')}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary p-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
