import React from "react";
import { Utensils } from "lucide-react";
import ownerImage from "../Assets/baker.png";

interface StatProps {
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
  // Ensure stats maintain a minimum width and spacing, wrapping if needed
  <div className="text-center w-full min-[400px]:w-auto px-2 py-2">
    <p className="text-3xl font-extrabold text-orange-600 mb-1">{value}</p>
    <p className="text-gray-600 text-sm font-medium">{label}</p>
  </div>
);

const OurStorySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Responsive Text Size) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Our <span className="text-orange-600">Story</span>
          </h2>
        </div>

        {/* Content Grid: Image + Text (Responsive Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image and Badge */}
          <div className="relative">
            <img
              src={ownerImage}
              alt="Bakery Owner, Maria Gonzalez"
              // The w-full and h-auto ensures it scales correctly. object-cover handles cropping if needed.
              className="w-full h-auto rounded-xl shadow-2xl object-cover"
            />
            {/* Experience Badge (Fixed position relative to parent) */}
            <div className="absolute -bottom-6 right-0 bg-orange-600 text-white p-4 rounded-lg shadow-xl text-center h-max min-w-[120px]">
              <p className="text-2xl font-bold">2+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Right Column: Text and Stats (Responsive Padding) */}
          <div className="pt-8 lg:pt-0">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded by Nimoh, Sunshine Bakery began as a small neighborhood
              shop with a simple mission: to bring the authentic taste of
              traditional European baking to our community.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              What started with Maria's grandmother's secret sourdough recipe
              has grown into a beloved local institution, serving thousands of
              satisfied customers who return daily for our fresh-baked goods.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Today, we continue the tradition with the same commitment to
              quality, using only the finest ingredients and time-honored
              techniques that have made us the heart of our community.
            </p>

            {/* Statistics Row (UPDATED: Added flex-wrap and adjusted spacing for small screens) */}
            <div className="flex justify-between items-center bg-yellow-50/50 p-6 rounded-xl mb-8 space-x-2 sm:space-x-4 flex-wrap">
              <Stat value="500+" label="Happy Customers" />
              <Stat value="15" label="Bread Varieties" />
              <Stat value="100%" label="Fresh Daily" />
            </div>

            {/* Button (Responsive Width) */}
            <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-xl hover:scale-[1.01] cursor-pointer">
              <Utensils className="w-5 h-5" />
              <span>Meet Our Team</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
