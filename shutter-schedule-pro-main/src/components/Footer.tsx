import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tighter">
              KONAN’S KLIPZ
            </h3>
            <p className="text-sm text-primary-foreground/80">
              Professional Editorial Photography
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wide">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:konansklipz@gmail.com"
                className="flex items-center text-sm hover:underline hover:opacity-80 transition-all"
              >
                <Mail size={16} className="mr-2" />
                konansklipz@gmail.com
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wide">
              Follow
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/konansklipz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Konan’s Klipz on Instagram"
                className="flex items-center text-sm hover:underline hover:opacity-80 transition-all"
              >
                <Instagram size={16} className="mr-2" />
                @konansklipz
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Konan’s Klipz Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

