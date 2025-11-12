import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const collections = [
  {
    id: 1,
    name: "Spring Collection",
    description: "Delicate pieces for the new season",
    image: "/placeholder.svg",
    productCount: 12
  },
  {
    id: 2,
    name: "Signature Pieces",
    description: "Timeless elegance",
    image: "/placeholder.svg",
    productCount: 8
  },
  {
    id: 3,
    name: "Evening Wear",
    description: "Sophistication for special moments",
    image: "/placeholder.svg",
    productCount: 15
  },
  {
    id: 4,
    name: "Accessories",
    description: "Complete your look",
    image: "/placeholder.svg",
    productCount: 20
  }
];

const Collections = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Collections</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections, each telling its own story
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.id}`}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>
              <h2 className="font-serif text-2xl mb-2">{collection.name}</h2>
              <p className="text-muted-foreground mb-2">{collection.description}</p>
              <p className="text-sm text-muted-foreground">
                {collection.productCount} pieces
              </p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
