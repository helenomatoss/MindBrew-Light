import { Leaf, Heart, Lightbulb } from 'lucide-react';

const Sustainability = () => {
  const practices = [
    {
      icon: Leaf,
      title: 'Ethically Sourced Beans',
      description: 'We partner with fair-trade coffee farmers',
    },
    {
      icon: Heart,
      title: 'Local Suppliers',
      description: "Supporting Dublin's community businesses",
    },
    {
      icon: Lightbulb,
      title: 'Energy Efficient',
      description: 'LED lighting and sustainable operations',
    },
  ];

  return (
    <section className="bg-secondary/50 px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 animate-fade-in text-center">
          <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
            Committed to Sustainability
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            We believe wellness extends beyond our café to the planet we share
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="animate-fade-in rounded-2xl bg-card p-8 text-center transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <practice.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{practice.title}</h3>
              <p className="text-muted-foreground">{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
