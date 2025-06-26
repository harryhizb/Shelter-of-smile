"use client";

import { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Instagram,
  Camera,
  ImageIcon,
} from "lucide-react";
import Card from "../components/UI/Card";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories = [
    { id: "all", name: "All", icon: Filter },
    { id: "orphanage", name: "Orphanage Visits" },
    { id: "ramadan", name: "Ramadan Drives" },
    { id: "education", name: "Educational Support" },
    { id: "events", name: "Holiday Events" },
  ];

  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/8363026/pexels-photo-8363026.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "ramadan",
      title: "Ramadan Food Distribution",
      description:
        "Distributing meals and gifts to children during Ramadan 2024",
      date: "April 2024",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/8617634/pexels-photo-8617634.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "orphanage",
      title: "Orphanage Visit",
      description: "Spending quality time with children at local orphanage",
      date: "March 2024",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "education",
      title: "Educational Supplies Drive",
      description: "Providing books and learning materials to students",
      date: "February 2024",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/8617624/pexels-photo-8617624.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "education",
      title: "Learning Session",
      description: "Volunteer teachers conducting educational activities",
      date: "January 2024",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/8617641/pexels-photo-8617641.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "events",
      title: "Winter Clothing Drive",
      description: "Distributing warm clothes during winter season",
      date: "December 2023",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/8617630/pexels-photo-8617630.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "orphanage",
      title: "Playtime Activities",
      description: "Fun games and activities with orphaned children",
      date: "November 2023",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/8617638/pexels-photo-8617638.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "events",
      title: "Eid Celebration",
      description: "Celebrating Eid festival with underprivileged children",
      date: "June 2023",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/8363024/pexels-photo-8363024.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "ramadan",
      title: "Iftar Distribution",
      description: "Organizing Iftar meals for fasting families",
      date: "April 2023",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/8617628/pexels-photo-8617628.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "education",
      title: "Scholarship Program",
      description:
        "Supporting deserving students with educational scholarships",
      date: "August 2023",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
      );
    }
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
          <Camera
            className="absolute top-1/4 left-1/4 w-6 h-6 text-purple-400 opacity-20 animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <ImageIcon
            className="absolute top-1/3 right-1/3 w-5 h-5 text-pink-400 opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-[60vh]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-lg mb-6 animate-slide-up">
              <Camera className="w-4 h-4 mr-2 text-purple-500" />
              Capturing Impact
            </div>
            <h1 className="text-6xl md:text-7xl font-heading font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Moments
              </span>
              <br />
              <span className="text-gray-800">of Joy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up opacity-90">
              Capturing smiles, hope, and community impact through our
              initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Filter Section */}
      <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-0 z-20 shadow-lg border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4 md:mb-0">
              Our Gallery
            </h2>

            {/* Mobile Filters Button */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Filter className="h-5 w-5 mr-2" />
              Categories
            </button>

            {/* Desktop Filters */}
            <div className="hidden md:flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-700 border border-purple-200"
                  }`}
                >
                  {category.id === "all" && <Filter className="h-4 w-4 mr-2" />}
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Filters Dropdown */}
          {mobileFiltersOpen && (
            <div className="mt-4 md:hidden grid grid-cols-2 gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setMobileFiltersOpen(false);
                  }}
                  className={`px-4 py-3 rounded-full font-medium transition-all duration-300 shadow-md ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-white text-gray-700 hover:bg-purple-50 border border-purple-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Gallery Grid */}
      <section className="py-20 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <ImageIcon className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-gray-800 mb-4">
                No images found in this category
              </h3>
              <button
                onClick={() => setSelectedCategory("all")}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View All Gallery
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image, index) => (
                <Card
                  key={image.id}
                  hover
                  className="cursor-pointer overflow-hidden group animate-slide-up border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
                  animationDelay={`${index * 0.05}s`}
                  onClick={() => openModal(index)}
                >
                  <div className="relative aspect-square">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-lg font-heading font-semibold text-white mb-2">
                        {image.title}
                      </h3>
                      <p className="text-sm text-white/90 mb-3">
                        {image.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full">
                          {image.date}
                        </span>
                        <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full capitalize">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full">
              <div className="flex-grow overflow-hidden">
                <img
                  src={filteredImages[selectedImage].src || "/placeholder.svg"}
                  alt={filteredImages[selectedImage].title}
                  className="w-full h-full max-h-[60vh] object-contain bg-gray-50"
                />
              </div>
              <div className="p-8 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-3">
                      {filteredImages[selectedImage].title}
                    </h3>
                    <p className="opacity-90 text-lg">
                      {filteredImages[selectedImage].description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-3">
                      {filteredImages[selectedImage].date}
                    </div>
                    <div className="text-sm bg-white text-purple-600 px-4 py-2 rounded-full capitalize font-medium">
                      {filteredImages[selectedImage].category}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Instagram CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm p-6 rounded-full mb-8">
            <Instagram className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-5xl font-heading font-bold mb-8">
            Join Our Community
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Follow us on Instagram for real-time updates, stories, and more
            moments of impact
          </p>
          <a
            href="https://instagram.com/shelter_of_smiles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <Instagram className="h-5 w-5 mr-2" />
            Follow @shelter_of_smiles
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
