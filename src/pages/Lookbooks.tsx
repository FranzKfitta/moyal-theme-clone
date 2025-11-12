import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lookbooks = [
  {
    id: 1,
    title: "Spring/Summer 2024",
    subtitle: "New Beginnings",
    image: "/placeholder.svg",
    date: "March 2024"
  },
  {
    id: 2,
    title: "Fall/Winter 2023",
    subtitle: "Timeless Elegance",
    image: "/placeholder.svg",
    date: "September 2023"
  },
  {
    id: 3,
    title: "Resort Collection",
    subtitle: "Escape",
    image: "/placeholder.svg",
    date: "January 2024"
  },
  {
    id: 4,
    title: "Bridal Collection",
    subtitle: "Forever",
    image: "/placeholder.svg",
    date: "June 2023"
  }
];

const Lookbooks = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Lookbooks</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our seasonal collections and be inspired by our vision
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-24">
          {lookbooks.map((lookbook, index) => (
            <div
              key={lookbook.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={lookbook.image}
                    alt={lookbook.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                <p className="text-sm text-muted-foreground">{lookbook.date}</p>
                <h2 className="font-serif text-3xl md:text-4xl">{lookbook.title}</h2>
                <p className="font-script text-2xl text-accent">{lookbook.subtitle}</p>
                <Link
                  to={`/lookbooks/${lookbook.id}`}
                  className="inline-block border-b border-foreground hover:border-accent transition-colors"
                >
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Lookbooks;
