import React from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare, Map } from "lucide-react";

// Define the structure for a single contact badge
interface ContactBadgeProps {
  icon: React.ReactNode;
  title: string;
  details: React.ReactNode;
}

const ContactBadge: React.FC<ContactBadgeProps> = ({
  icon,
  title,
  details,
}) => (
  <div className="flex items-start space-x-4 mb-6">
    <div className="p-3 bg-orange-600 rounded-lg text-white">{icon}</div>
    <div>
      <p className="text-gray-900 font-semibold text-lg">{title}</p>
      <div className="text-gray-600 text-sm">{details}</div>
    </div>
  </div>
);

const GetInTouchSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (UPDATED) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Get in <span className="text-orange-600">Touch</span>
          </h2>
          <p className="mt-3 text-md text-gray-500 max-w-3xl mx-auto">
            Have a special order or question? We'd love to hear from you.
            Contact us today and let us help make your day sweeter.
          </p>
        </div>

        {/* Content Grid: Info (Left) and Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Information (UPDATED) */}
          <div className="lg:pr-10">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            <ContactBadge
              icon={<MapPin className="w-5 h-5" />}
              title="Address"
              details={<p>Ojelade Street, Bariga, Lagos, Nigeria</p>}
            />
            <ContactBadge
              icon={<Phone className="w-5 h-5" />}
              title="Phone"
              details={<p>+234 708 994 8624</p>}
            />
            <ContactBadge
              icon={<Mail className="w-5 h-5" />}
              title="Email"
              details={<p>hello@sunshinebakery.com</p>}
            />
            <ContactBadge
              icon={<Clock className="w-5 h-5" />}
              title="Hours"
              details={
                <>
                  <p>Mon-Sun: 6:00 AM - 8:00 PM</p>
                </>
              }
            />

            {/* Action Buttons (WhatsApp and Get Directions - UPDATED ICONS/TEXT) */}
            <div className="flex space-x-4 mt-8">
              <button className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg cursor-pointer">
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </button>
              <button className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg cursor-pointer">
                <Map className="w-5 h-5" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>

          <div className="bg-amber-50 p-6 md:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>

            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your special order or ask any questions..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  maxLength={500}
                ></textarea>
                <p className="text-xs text-right text-gray-500 mt-1">
                  0/500 characters
                </p>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-lg mt-6 cursor-pointer"
              >
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
