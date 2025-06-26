import { Link } from "react-router-dom";
import {
  Heart,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-purple-800 via-violet-900 to-pink-800 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/15 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/15 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Enhanced Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Shelter Of Smiles
                </h3>
                <p className="text-purple-100 flex items-center text-sm">
                  <Sparkles className="h-4 w-4 mr-1 text-orange-300" />
                  Every smile tells a story
                </p>
              </div>
            </div>
            <p className="text-purple-100 mb-6 max-w-md leading-relaxed">
              Dedicated to helping orphaned and underprivileged children through
              events, donations, and volunteering.
            </p>

            {/* Enhanced Social Links */}
            <div className="flex space-x-3 mb-6">
              <a
                href="https://instagram.com/shelter_of_smiles"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 p-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Instagram className="h-5 w-5 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://wa.me/923119461104"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 p-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle className="h-5 w-5 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-xs text-purple-100">Children Helped</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-xl font-bold bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">
                  25+
                </div>
                <div className="text-xs text-purple-100">Projects</div>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 flex items-center">
              <div className="w-1 h-5 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-2"></div>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Gallery", path: "/gallery" },
                { name: "Projects", path: "/projects" },
                { name: "Donate", path: "/donate" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-purple-100 hover:text-white transition-all duration-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 flex items-center">
              <div className="w-1 h-5 bg-gradient-to-b from-orange-400 to-pink-400 rounded-full mr-2"></div>
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="group flex items-center space-x-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1.5 rounded-md">
                  <Instagram className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-purple-200">Instagram</div>
                  <div className="text-white text-sm font-medium">
                    @shelter_of_smiles
                  </div>
                </div>
              </div>

              <div className="group flex items-center space-x-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 rounded-md">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-purple-200">Phone</div>
                  <div className="text-white text-sm font-medium">
                    03119461104
                  </div>
                </div>
              </div>

              <div className="group flex items-center space-x-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-1.5 rounded-md">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-purple-200">Founder</div>
                  <div className="text-white text-sm font-medium">
                    Shahwaiz Nasir
                  </div>
                </div>
              </div>

              <div className="group flex items-center space-x-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1.5 rounded-md">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-purple-200">Service Area</div>
                  <div className="text-white text-sm font-medium">
                    5+ Districts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Newsletter Section */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl border border-white/10">
          <div className="text-center">
            <h4 className="text-xl font-heading font-bold mb-3 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Stay Connected
            </h4>
            <p className="text-purple-100 mb-4 max-w-2xl mx-auto text-sm">
              Follow our journey and see the impact we're making together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="https://instagram.com/shelter_of_smiles"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                <Instagram className="h-4 w-4 mr-2" />
                Follow Us
              </a>
              <a
                href="https://wa.me/923119461104"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Get Updates
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Footer Bottom */}
        <div className="border-t border-white/20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="flex items-center space-x-3">
              <p className="text-purple-200 text-xs">
                © 2024 Shelter Of Smiles. All rights reserved.
              </p>
              <div className="hidden md:flex items-center space-x-1 text-purple-200 text-xs">
                <Clock className="h-3 w-3" />
                <span>Making a difference since 2021</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-purple-200 text-xs">
              <p>Built with</p>
              <Heart className="h-3 w-3 text-red-300" />
              <p>by</p>
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Hizbullah
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
