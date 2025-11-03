import heroImage from "@/assets/hero-collage.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
          IMARLEY
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light tracking-wide mb-8">
          EDITORIAL PHOTOGRAPHY
        </p>
        <button
          onClick={() => {
            const element = document.getElementById("booking");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-white text-black px-12 py-4 text-sm font-medium tracking-widest hover:bg-white/90 transition-colors"
        >
          BOOK A SESSION
        </button>
      </div>
    </section>
  );
};

export default Hero;
