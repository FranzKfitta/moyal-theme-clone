import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fashion hero banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold text-softPink drop-shadow-lg leading-tight">
            ELEGANT
          </h2>
          <p className="font-script text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
            Collection
          </p>
          <div className="w-32 h-0.5 bg-white mx-auto" />
          <Button 
            size="lg" 
            className="bg-white text-foreground hover:bg-white/90 px-8 py-6 text-base font-medium tracking-wider transition-all hover:scale-105 shadow-elegant"
          >
            DISCOVER MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
