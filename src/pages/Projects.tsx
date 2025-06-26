"use client";

import type React from "react";

import { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ArrowRight,
  Heart,
  Star,
  Award,
  Sparkles,
  Target,
} from "lucide-react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";

const Projects = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const upcomingEvents = [
    {
      id: 1,
      title: "Winter Clothing Drive 2024",
      date: "2024-12-15",
      location: "Multiple Districts",
      description:
        "Distributing warm clothes and blankets to children in need during the cold season.",
      volunteers: 20,
      status: "upcoming",
      image:
        "https://images.pexels.com/photos/8617641/pexels-photo-8617641.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      title: "New Year Celebration Event",
      date: "2024-12-31",
      location: "Local Orphanages",
      description:
        "Organizing fun activities and gift distribution to welcome the new year with joy.",
      volunteers: 15,
      status: "upcoming",
      image:
        "https://images.pexels.com/photos/8617630/pexels-photo-8617630.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      title: "Educational Workshop Series",
      date: "2025-01-10",
      location: "Community Centers",
      description:
        "Monthly educational workshops focusing on basic literacy and life skills.",
      volunteers: 10,
      status: "upcoming",
      image:
        "https://images.pexels.com/photos/8617624/pexels-photo-8617624.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const completedProjects = [
    {
      id: 4,
      title: "Ramadan Food Drive 2024",
      date: "2024-03-15",
      location: "Citywide",
      description:
        "Successfully distributed meals and gifts to over 200 families during the holy month.",
      impact: "200+ families helped",
      image:
        "https://images.pexels.com/photos/8363026/pexels-photo-8363026.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      title: "Back to School Campaign",
      date: "2024-08-20",
      location: "Rural Schools",
      description:
        "Provided educational supplies and uniforms to underprivileged students.",
      impact: "150+ students supported",
      image:
        "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      title: "Eid Celebration 2024",
      date: "2024-06-15",
      location: "Multiple Venues",
      description:
        "Organized joyful Eid celebrations with gifts and special meals for children.",
      impact: "300+ children celebrated",
      image:
        "https://images.pexels.com/photos/8617638/pexels-photo-8617638.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const impactStats = [
    { value: "500+", label: "Children Helped", icon: Heart },
    { value: "25+", label: "Projects Completed", icon: Award },
    { value: "5", label: "Districts Covered", icon: MapPin },
    { value: "50+", label: "Active Volunteers", icon: Users },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookSlot = (projectTitle: string) => {
    setSelectedProject(projectTitle);
    setShowBookingForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Booking form submitted:", { ...formData, selectedProject });
    alert("Thank you for your interest! We will contact you soon.");
    setShowBookingForm(false);
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
  };

  return (
    <div className="animate-fade-in">
      {/* Modern Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div
            className="absolute top-40 right-10 w-64 h-64 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Target
            className="absolute top-1/4 left-1/4 w-6 h-6 text-purple-400 opacity-20 animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <Sparkles
            className="absolute top-1/3 right-1/3 w-5 h-5 text-orange-400 opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <Heart
            className="absolute bottom-1/3 left-1/5 w-8 h-8 text-pink-400 opacity-25 animate-bounce"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-[60vh]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-lg mb-6 animate-slide-up">
              <Target className="w-4 h-4 mr-2 text-purple-500" />
              Our Initiatives
            </div>
            <h1 className="text-6xl md:text-7xl font-heading font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Impactful
              </span>
              <br />
              <span className="text-gray-800">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up opacity-90">
              Discover our initiatives designed to bring joy and support to
              children in need
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Impact Statistics */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-700 mb-6">
              <Award className="w-4 h-4 mr-2" />
              Our Impact
            </div>
            <h2 className="text-5xl font-heading font-bold text-gray-800 mb-6">
              Making a Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the positive change we've created together in our community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="h-10 w-10 text-purple-600" />
                </div>
                <div className="text-4xl font-heading font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Upcoming Events */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-sm font-medium text-orange-700 mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Upcoming Events
            </div>
            <h2 className="text-5xl font-heading font-bold text-gray-800 mb-6">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us in our upcoming initiatives and help make a difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.id}
                hover
                className="animate-slide-up overflow-hidden group border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
                animationDelay={`${index * 0.1}s`}
              >
                <div className="relative aspect-video">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Upcoming
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-purple-600 text-sm font-medium">
                      <Users className="h-4 w-4 mr-1" />
                      {event.volunteers} needed
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex items-center text-gray-600 text-sm mb-6">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <Button
                    onClick={() => handleBookSlot(event.title)}
                    className="w-full group-hover:shadow-xl transition-all duration-300"
                    icon={ArrowRight}
                    iconPosition="right"
                  >
                    Volunteer Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Completed Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-sm font-medium text-green-700 mb-6">
              <Award className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-5xl font-heading font-bold text-gray-800 mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating our successful initiatives and the positive impact
              we've achieved
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <Card
                key={project.id}
                hover
                className="animate-slide-up overflow-hidden group border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
                animationDelay={`${index * 0.1}s`}
              >
                <div className="relative aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Completed
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(project.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-green-600 font-medium text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {project.impact}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl transform animate-slide-up">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white p-8">
              <h3 className="text-2xl font-heading font-bold mb-3">
                Volunteer Signup
              </h3>
              <p className="opacity-90">
                For: <span className="font-medium">{selectedProject}</span>
              </p>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  placeholder="+92 312 3456789"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How would you like to help? *
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Select your role</option>
                  <option value="volunteer">Event Volunteer</option>
                  <option value="organizer">Event Organizer</option>
                  <option value="donor">Donate Supplies</option>
                  <option value="sponsor">Sponsor Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about yourself
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Why are you interested in volunteering?"
                />
              </div>
              <div className="flex space-x-4">
                <Button type="submit" className="flex-1">
                  Submit Application
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowBookingForm(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full inline-block mb-8">
            <Star className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-5xl font-heading font-bold mb-8">
            Become a Change Maker
          </h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto">
            Join our community of volunteers and help us create more success
            stories
          </p>
          <Button
            className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            View Upcoming Projects
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
