const Menu = () => {
  const drinks = [
    {
      name: 'Sunrise Latte',
      description: 'Smooth espresso with vanilla and golden honey notes',
      price: '€4.50',
    },
    {
      name: 'Golden Brew',
      description: 'Rich pour-over with hints of caramel and nuts',
      price: '€4.20',
    },
    {
      name: 'Energize Espresso',
      description: 'Bold double shot to brighten your day',
      price: '€3.80',
    },
  ];

  return (
    <section className="bg-background px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 animate-fade-in text-center">
          <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
            Our Signature Menu
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Crafted with care, designed to complement your wellness experience
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {drinks.map((drink, index) => (
            <div
              key={index}
              className="animate-fade-in rounded-2xl border-2 border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-2xl font-bold text-foreground">{drink.name}</h3>
                <span className="text-2xl font-bold text-accent">{drink.price}</span>
              </div>
              <p className="leading-relaxed text-muted-foreground">{drink.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
