import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold tracking-tighter">
            IMARLEY
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("booking")}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              BOOK A SESSION
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("booking")}
              className="block w-full text-left text-sm font-medium hover:text-muted-foreground transition-colors py-2"
            >
              BOOK A SESSION
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left text-sm font-medium hover:text-muted-foreground transition-colors py-2"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-sm font-medium hover:text-muted-foreground transition-colors py-2"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-sm font-medium hover:text-muted-foreground transition-colors py-2"
            >
              CONTACT
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
