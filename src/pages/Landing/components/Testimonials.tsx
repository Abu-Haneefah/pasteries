import React from "react";
import { Star } from "lucide-react";
import customerOne from "../Assets/customer.png";
import customerTwo from "../Assets/customer2.png";
import customerThree from "../Assets/customer3.png";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  avatarSrc,
}) => (
  <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col">
    {/* Star Rating */}
    <div className="flex text-yellow-500 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-500 stroke-yellow-500" />
      ))}
    </div>

    {/* Quote */}
    <p className="text-gray-700 italic mb-6 grow">"{quote}"</p>

    {/* Client Info */}
    <div className="flex items-center space-x-3 mt-auto">
      <img
        src={avatarSrc}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="font-bold text-sm text-gray-900">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

// 2. Main Section Component (Renamed for clarity)
const CustomerTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "The best bakery in town! Their sourdough bread is absolutely incredible and the staff is always so friendly. I come here every morning for my coffee and pastry.",
      name: "Aisha Yussuf",
      role: "Regular Customer",
      avatarSrc: customerOne,
    },
    {
      quote:
        "Nimoh created the most beautiful wedding cake for us! Not only was it stunning, but it tasted even better than it looked. All our guests were asking for the bakery's name!",
      name: "Khodijah Bello",
      role: "Wedding Customer",
      avatarSrc: customerTwo,
    },
    {
      quote:
        "I've been coming to Sunshine Bakery for over 10 years. The quality never disappoints, and I love their family feel. Their croissants are 'to die for.'",
      name: "Kamilah Umar",
      role: "Local Resident",
      avatarSrc: customerThree,
    },
  ];

  return (
    // Updated background to a soft, warm beige/yellow tone
    <section className="py-16 md:py-24 bg-amber-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Updated text) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Our Customers <span className="text-orange-600">Say</span>
          </h2>
          <p className="mt-3 text-md text-gray-500 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers
            have to say about their experience at Sunshine Bakery.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              avatarSrc={testimonial.avatarSrc}
            />
          ))}
        </div>

        {/* Overall Rating Badge (Updated text) */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2 bg-white p-4 rounded-full shadow-lg border border-gray-100">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-500 stroke-yellow-500"
                />
              ))}
            </div>
            <div className="flex"></div>
            <span className="font-bold text-lg text-gray-800">4.8/5</span>
            <span className="text-gray-500 text-sm">
              | Based on 420+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonialsSection;
