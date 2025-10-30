import { Sun, Coffee, Leaf } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Sun,
      title: 'Light Therapy',
      description: 'Scientifically proven to boost mood and energy',
    },
    {
      icon: Coffee,
      title: 'Premium Coffee',
      description: 'Ethically sourced, expertly crafted',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable practices, local suppliers',
    },
  ];

  return (
    <section id="about" className="bg-background px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 animate-fade-in text-center">
          <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
            What is MindBrew Light?
          </h2>
          <div className="mx-auto max-w-3xl space-y-4 text-lg leading-relaxed text-foreground md:text-xl">
            <p>
              MindBrew Light is Dublin's first light therapy café — a wellness-focused space that
              combines premium coffee with scientifically backed light therapy.
            </p>
            <p>
              Designed for busy professionals and students, it helps boost mood and focus,
              especially during Ireland's darker months.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in rounded-2xl bg-card p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
