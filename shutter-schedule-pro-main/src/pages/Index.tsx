import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingCard from "@/components/BookingCard";
import PortfolioGallery from "@/components/PortfolioGallery";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import eventImage from "@/assets/event.jpg";
import birthdayImage from "@/assets/birthday.jpg";
import creativeImage from "@/assets/creative.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Index = () => {
  const { toast } = useToast();

  const handleBook = (packageName: string) => {
    toast({
      title: "Booking Request",
      description: `Thank you for your interest in the ${packageName} package! Please contact us to complete your booking.`,
    });
  };

  const portfolioImages = [
    { src: portfolio1, alt: "Portfolio Image 1" },
    { src: portfolio2, alt: "Portfolio Image 2" },
    { src: portfolio3, alt: "Portfolio Image 3" },
    { src: eventImage, alt: "Portfolio Image 4" },
    { src: birthdayImage, alt: "Portfolio Image 5" },
    { src: creativeImage, alt: "Portfolio Image 6" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />

      {/* Booking Section */}
      <section id="booking" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tighter">
            PHOTOGRAPHY PACKAGES
          </h2>
          
        <div className="space-y-10 mb-24">
  <BookingCard
    title="Event photography"
    duration="2 hours"
    price="€180"
    description="Includes: 60+ Edits  • Delivery within 5 business days • 1 locations • Unlimited poses."
    image={eventImage}
    imageAlt="Cold Summer Package"
    onBook={() => handleBook('Cold Summer')}
  />

  <BookingCard
    title="Creative shoot"
    duration="1 hour"
    price="€100"
    description="Includes: 35 Editorial pics   • Delivery within 5 business days • 2 locations • 2 outfit changes."
    image={creativeImage}
    imageAlt="Editorial Photography Package"
    onBook={() => handleBook('Editorial Photos')}
  />

  <BookingCard
    title="Birthday Shoot"
    duration="1 hour"
    price="€85"
    description="40 high-quality edits • Perfect for birthdays, dinners, and parties. • Basic editing included • Delivery within 5 business days."
    image={birthdayImage}
    imageAlt="Birthday Shoot Package"
    onBook={() => handleBook('Birthday Shoot')}
  />
</div>

          {/* Late Policy */}
          <div className="bg-secondary p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">
              Late Policy
            </h3>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                <strong>15 minutes grace period</strong> (anything after 20 is €25).
              </p>
              <p>
                <strong>Over 30 minutes is €45</strong> (if you can't pay, I will leave and you would have to reschedule).
              </p>
              <p className="font-bold mt-6">
                IN ORDER FOR US TO PROCEED WITH THE PAYMENT, PLEASE READ THE DESCRIPTION FOR EACH PHOTO SHOOT YOU ARE SCHEDULING.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tighter">
            PORTFOLIO
          </h2>
          <PortfolioGallery images={portfolioImages} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
            ABOUT
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Professional editorial and lifestyle photographer specializing in creating stunning visual narratives. With years of experience in fashion, portrait, and commercial photography, I bring your vision to life with artistic precision and creative excellence.
          </p>
          <p className="text-lg leading-relaxed">
            Each session is tailored to capture authentic moments and create images that tell your unique story. Let's create something beautiful together.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
