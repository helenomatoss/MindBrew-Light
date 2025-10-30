const Footer = () => {
  return (
    <footer className="bg-primary px-4 py-12 text-primary-foreground">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-6">
          <h3 className="mb-2 text-3xl font-bold">MindBrew Light</h3>
          <p className="text-sm text-primary-foreground/80">The Light Therapy Café</p>
        </div>

        <div className="mt-6 border-t border-primary-foreground/20 pt-6">
          <p className="text-sm text-primary-foreground/70">
            © 2025 MindBrew Light. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
