"use client";

import type React from "react";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  CheckCircle,
  Sparkles,
  Send,
  Clock,
} from "lucide-react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      info: "03119461104",
      subInfo: "Shahwaiz Nasir",
      action: "tel:+923119461104",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "03119461104",
      subInfo: "Available 24/7",
      action: "https://wa.me/923119461104",
    },
    {
      icon: Instagram,
      title: "Instagram",
      info: "@shelter_of_smiles",
      subInfo: "Follow our journey",
      action: "https://instagram.com/shelter_of_smiles",
    },
    {
      icon: Mail,
      title: "Founder",
      info: "@anjxni_05",
      subInfo: "Instagram profile",
      action: "https://instagram.com/anjxni_05",
    },
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 5000);
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
          <MessageCircle
            className="absolute top-1/4 left-1/4 w-6 h-6 text-purple-400 opacity-20 animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <Send
            className="absolute top-1/3 right-1/3 w-5 h-5 text-pink-400 opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <Phone
            className="absolute bottom-1/3 left-1/5 w-8 h-8 text-orange-400 opacity-25 animate-bounce"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-[60vh]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-lg mb-6 animate-slide-up">
              <MessageCircle className="w-4 h-4 mr-2 text-purple-500" />
              Get In Touch
            </div>
            <h1 className="text-6xl md:text-7xl font-heading font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Contact
              </span>
              <br />
              <span className="text-gray-800">Us</span>
            </h1>
            <p className="text-xl text-gray-600 animate-slide-up opacity-90 max-w-3xl mx-auto">
              Get in touch with us to learn more about our work, volunteer
              opportunities, or how you can support our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Information */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-700 mb-6">
              <Phone className="w-4 h-4 mr-2" />
              Contact Information
            </div>
            <h2 className="text-5xl font-heading font-bold text-gray-800 mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Choose the most convenient way to
              reach out to us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                hover
                className="p-8 text-center animate-slide-up group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
                animationDelay={`${index * 0.1}s`}
              >
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <contact.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {contact.title}
                </h3>
                <p className="text-gray-800 font-medium mb-2">{contact.info}</p>
                <p className="text-gray-600 text-sm mb-6">{contact.subInfo}</p>
                <a
                  href={contact.action}
                  target={
                    contact.action.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.action.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200 bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-full"
                >
                  Connect
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-sm font-medium text-orange-700 mb-6">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </div>
              <h2 className="text-4xl font-heading font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-10 text-lg">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              {isSubmitted ? (
                <Card className="p-10 text-center border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-gray-800 mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Thank you for reaching out. We'll respond to your message
                    within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://wa.me/923119461104"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </a>
                    <a
                      href="tel:+923119461104"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </a>
                  </div>
                </Card>
              ) : (
                <Card className="p-10 border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="volunteer">Volunteer Inquiry</option>
                        <option value="donation">Donation Information</option>
                        <option value="partnership">
                          Partnership Opportunity
                        </option>
                        <option value="event">Event Collaboration</option>
                        <option value="general">General Inquiry</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        required
                        placeholder="Tell us how we can help you or how you'd like to support our mission..."
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>

                    <Button type="submit" size="large" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </Card>
              )}
            </div>

            {/* Enhanced Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-heading font-bold text-gray-800 mb-6">
                  Why Contact Us?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg mb-2">
                        Volunteer Opportunities
                      </h4>
                      <p className="text-gray-600">
                        Learn about different ways to contribute your time and
                        skills.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg mb-2">
                        Donation Information
                      </h4>
                      <p className="text-gray-600">
                        Get details about how your donations make a direct
                        impact.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg mb-2">
                        Partnership Opportunities
                      </h4>
                      <p className="text-gray-600">
                        Explore how your organization can partner with us.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg mb-2">
                        Event Collaboration
                      </h4>
                      <p className="text-gray-600">
                        Organize events together to maximize our community
                        impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-purple-600" />
                  Quick Response Promise
                </h3>
                <p className="text-gray-700 mb-6">
                  We value your time and interest in our mission. Here's what
                  you can expect:
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Email responses within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>WhatsApp responses within 2 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Phone calls answered during business hours</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-orange-50 to-pink-50 border-2 border-orange-200">
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-orange-600" />
                  Follow Our Impact
                </h3>
                <p className="text-gray-700 mb-6">
                  Stay connected with our ongoing work and see the difference
                  we're making together.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/shelter_of_smiles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-white hover:bg-gray-50 text-gray-800 px-4 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Instagram
                  </a>
                  <a
                    href="https://wa.me/923119461104"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Service Areas
            </div>
            <h2 className="text-5xl font-heading font-bold text-gray-800 mb-6">
              Our Reach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We serve communities across multiple districts, bringing hope and
              support directly to children in need.
            </p>
          </div>
          <Card className="p-12 text-center bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <MapPin className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-gray-800 mb-4">
              Service Areas
            </h3>
            <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
              Currently serving 5+ districts with plans to expand our reach to
              help more children in need.
            </p>
            <p className="text-blue-600 font-medium text-lg">
              Contact us to learn more about our service areas and upcoming
              expansions.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
