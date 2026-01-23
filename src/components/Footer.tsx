import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-display font-bold text-gradient">TSA</span>
            <span className="text-sm text-muted-foreground">
              Training Superstar Academy
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#programs" className="hover:text-foreground transition-colors">Programs</a>
            <a href="#why-us" className="hover:text-foreground transition-colors">About</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Stories</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Instagram className="w-5 h-5 text-muted-foreground" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Facebook className="w-5 h-5 text-muted-foreground" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Youtube className="w-5 h-5 text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Training Superstar Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
