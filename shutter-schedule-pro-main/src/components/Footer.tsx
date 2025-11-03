import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tighter">IMARLEY</h3>
            <p className="text-sm text-primary-foreground/80">
              Professional Editorial Photography
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wide">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@imarley.com"
                className="flex items-center text-sm hover:text-primary-foreground/80 transition-colors"
              >
                <Mail size={16} className="mr-2" />
                contact@imarley.com
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wide">Follow</h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm hover:text-primary-foreground/80 transition-colors"
              >
                <Instagram size={16} className="mr-2" />
                @imarley
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} IMARLEY Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
