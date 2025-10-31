import experienceImage from '@/assets/experience-cafe.jpg';
import { Sparkles } from 'lucide-react';

const Experience = () => {
  return (
    <section className="gradient-warm px-4 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="order-2 animate-fade-in md:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={experienceImage}
                alt="Relaxing café atmosphere with light therapy"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 animate-fade-in md:order-2">
            <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
              Relax. Recharge. Feel Good.
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                Step into a space designed for your well-being.
                Enjoy your favourite drink as you experience light therapy for the first time.
              </p>
              <p>
                Whether you’re working, reading, or simply taking a moment for yourself, 
                MindBrew Light offers the perfect environment to boost your mood and energy.
              </p>

              {/* Scientific Benefit Note */}
              <div className="mt-8 rounded-r-xl border-l-4 border-accent bg-accent/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-accent">Scientific Benefit</h3>
                    <p className="text-foreground">
                      Light therapy is clinically proven to improve mood, energy levels, and focus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
