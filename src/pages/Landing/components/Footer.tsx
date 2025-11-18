import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Utensils,
} from "lucide-react";

// Define the structure for a group of links
interface FooterLink {
  name: string;
  href: string;
}

// Define data for the footer content
const quickLinks: FooterLink[] = [
  { name: "Menu", href: "#menu" },
  { name: "Custom Orders", href: "#order" },
  { name: "Catering", href: "#catering" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const specialtiesLinks: FooterLink[] = [
  { name: "Artisan Bread", href: "#bread" },
  { name: "Wedding Cakes", href: "#cakes" },
  { name: "Fresh Pastries", href: "#pastries" },
  { name: "Seasonal Items", href: "#seasonal" },
  { name: "Gift Cards", href: "#giftcards" },
];

const contactInfo = [
  {
    icon: <MapPin className="w-4 h-4 text-orange-400" />,
    text: "Ojelade Street, Bariga, Lagos, Nigeria",
  },
  {
    icon: <Phone className="w-4 h-4 text-orange-400" />,
    text: "+234 708 994 8624",
  },
  {
    icon: <Mail className="w-4 h-4 text-orange-400" />,
    text: "hello@sunshinebakery.com",
  },
  {
    icon: <Clock className="w-4 h-4 text-orange-400" />,
    text: "Mon-Sun: 6AM - 8PM",
  },
];

const BakeryFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Footer Section (Links and Info) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Logo and Brand Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Utensils className="w-6 h-6 text-orange-500 mr-2" />
              <span className="text-2xl font-serif font-bold text-white">
                Sunshine Bakery
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Fresh baked goods made with love since 1985. Your neighborhood
              bakery for all occasions.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 bg-gray-800 rounded-full hover:bg-orange-600 transition duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 bg-gray-800 rounded-full hover:bg-orange-600 transition duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 bg-gray-800 rounded-full hover:bg-orange-600 transition duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 border-b border-orange-500/50 pb-1">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Specialties */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 border-b border-orange-500/50 pb-1">
              Our Specialties
            </h4>
            <ul className="space-y-3">
              {specialtiesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 border-b border-orange-500/50 pb-1">
              Contact Info
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="pt-1">{item.icon}</div>
                  <span className="text-sm text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section (Copyright and Legal) */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p className="mb-2 md:mb-0">
            &copy; 2024 Sunshine Bakery. All rights reserved. | Website Builder
          </p>
          <div className="space-x-4">
            <a
              href="#"
              className="hover:text-orange-400 transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-orange-400 transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BakeryFooter;
