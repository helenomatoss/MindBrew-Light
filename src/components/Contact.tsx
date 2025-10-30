import { MapPin, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="gradient-warm px-4 py-20 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
            Find Us in Dublin City Centre
          </h2>
          <p className="mb-12 text-xl text-muted-foreground">
            Visit us and experience the perfect blend of wellness and coffee
          </p>

          {/* Contact Info Cards */}
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-card p-6 transition-all duration-300 hover:shadow-lg">
              <MapPin className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-bold text-foreground">Location</h3>
              <p className="text-sm text-muted-foreground">
                45 South Great George's Street
                <br />
                Dublin, D02 X407
              </p>
            </div>

            <div className="rounded-xl bg-card p-6 transition-all duration-300 hover:shadow-lg">
              <Mail className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-bold text-foreground">Email</h3>
              <a
                href="mailto:hello@mindbrewlight.ie"
                className="text-sm text-accent transition-colors hover:text-accent-light"
              >
                hello@mindbrewlight.ie
              </a>
            </div>

            <div className="rounded-xl bg-card p-6 transition-all duration-300 hover:shadow-lg">
              <Instagram className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-bold text-foreground">Instagram</h3>
              <a
                href="https://instagram.com/mindbrewlight"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent transition-colors hover:text-accent-light"
              >
                @mindbrewlight
              </a>
            </div>
          </div>

          <Button
            size="lg"
            className="rounded-full bg-primary px-10 py-6 text-lg text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary-light hover:shadow-xl"
            onClick={() => window.open('https://maps.google.com', '_blank')}
          >
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
