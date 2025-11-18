import React from "react";
import {
  ShoppingBag,
  Utensils,
  Cake,
  Coffee,
  Heart,
  CheckCircle,
  Clock,
} from "lucide-react";

import breadImage from "../assets/artisan-bread.png";
import pastryImage from "../assets/pasteries.png";
import cakeImage from "../assets/custom-cakes.png";
import coffeeImage from "../assets/cofee_treats.png";

// Define the structure for a single specialty card
interface SpecialtyCardProps {
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ReactNode;
  price: string;
}

// 1. Static Component: SpecialtyCard
const SpecialtyCard: React.FC<SpecialtyCardProps> = ({
  title,
  description,
  imageSrc,
  icon,
  price,
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition duration-300 hover:shadow-xl hover:scale-[1.02]">
    {/* Image and Price Tag */}
    <div className="relative h-48 sm:h-56 w-full">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      {/* Orange Price Tag */}
      <span className="absolute top-3 right-3 bg-orange-600 text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
        {price}
      </span>
    </div>

    {/* Content Area */}
    <div className="p-6 flex flex-col grow">
      {/* Icon and Title */}
      <div className="flex items-center space-x-3 mb-3">
        <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4 text-sm grow">{description}</p>

      {/* View Menu Link */}
      <a
        href="#menu"
        className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition duration-300 flex items-center"
      >
        View Menu →
      </a>
    </div>
  </div>
);

// 2. Main Section Component
const SpecialtiesSection: React.FC = () => {
  const specialtiesData = [
    {
      title: "Artisan Bread",
      description:
        "Handcrafted daily using traditional methods and the finest ingredients. From sourdough to whole grain varieties.",
      imageSrc: breadImage,
      icon: <ShoppingBag className="w-5 h-5" />,
      price: "FROM $4.00",
    },
    {
      title: "Fresh Pastries",
      description:
        "Delicate croissants, Danish pastries, and seasonal treats made with premium butter and fresh ingredients.",
      imageSrc: pastryImage,
      icon: <Utensils className="w-5 h-5" />,
      price: "FROM $2.50",
    },
    {
      title: "Custom Cakes",
      description:
        "Beautiful custom cakes for weddings, birthdays, and special occasions. Made to order with your vision in mind.",
      imageSrc: cakeImage,
      icon: <Cake className="w-5 h-5" />,
      price: "FROM $50.00",
    },
    {
      title: "Coffee & Treats",
      description:
        "Premium coffee, hot chocolate, and sweet breads. Perfect pairings for our fresh baked goods.",
      imageSrc: coffeeImage,
      icon: <Coffee className="w-5 h-5" />,
      price: "FROM $3.50",
    },
  ];

  const featuresData = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "Organic Ingredients",
      description: "Locally sourced, organic ingredients wherever possible.",
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Fresh Daily",
      description: "Everything baked fresh every morning.",
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Made with Love",
      description: "Family recipes passed down through generations.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Our <span className="text-orange-600">Specialties</span>
          </h2>
          <p className="mt-3 text-md text-gray-500 max-w-3xl mx-auto">
            Discover our signature offerings, each crafted with passion and the
            finest ingredients, to bring you the authentic taste of artisan
            baking.
          </p>
        </div>

        {/* Specialties Grid (Responsive: 1 column on mobile, 2 on tablet, 4 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {specialtiesData.map((item, index) => (
            <SpecialtyCard
              key={index}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              icon={item.icon}
              price={item.price}
            />
          ))}
        </div>

        {/* --- Separator --- */}
        <hr className="border-t border-gray-100 mb-16 max-w-4xl mx-auto hidden sm:block" />

        {/* Features Row (Responsive: 1 column on mobile, 3 on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
