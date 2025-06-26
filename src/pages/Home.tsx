import { Link } from "react-router-dom";
import {
  Heart,
  Users,
  Gift,
  Calendar,
  ArrowRight,
  Star,
  Sparkles,
  HandHeart,
} from "lucide-react";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

const Home = () => {
  const stats = [
    { icon: Heart, label: "Children Helped", value: "500+" },
    { icon: Users, label: "Volunteers", value: "50+" },
    { icon: Gift, label: "Events Organized", value: "25+" },
    { icon: Calendar, label: "Years Active", value: "3+" },
  ];

  const recentWork = [
    {
      image:
        "https://images.pexels.com/photos/8363026/pexels-photo-8363026.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Ramadan Food Drive 2024",
      description:
        "Distributed meals and gifts to 200+ children during the holy month of Ramadan.",
    },
    {
      image:
        "https://images.pexels.com/photos/8617634/pexels-photo-8617634.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Winter Clothing Campaign",
      description:
        "Provided warm clothing and blankets to orphanages across multiple districts.",
    },
    {
      image:
        "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Educational Supplies Drive",
      description:
        "Delivered books, stationery, and learning materials to underprivileged schools.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Volunteer",
      text: "Being part of Shelter Of Smiles has been the most rewarding experience. Seeing the joy on children's faces is priceless.",
      rating: 5,
    },
    {
      name: "Mohammad Ali",
      role: "Donor",
      text: "I trust this organization completely. They are transparent and truly dedicated to helping children in need.",
      rating: 5,
    },
    {
      name: "Fatima Khan",
      role: "Beneficiary Parent",
      text: "They helped my family during our most difficult time. Their support gave my children hope and smiles.",
      rating: 5,
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div
            className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Heart
            className="absolute top-1/4 left-1/4 w-8 h-8 text-pink-400 opacity-20 animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <Sparkles
            className="absolute top-1/3 right-1/3 w-6 h-6 text-yellow-400 opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <HandHeart
            className="absolute bottom-1/3 left-1/5 w-10 h-10 text-purple-400 opacity-25 animate-bounce"
            style={{ animationDelay: "3s" }}
          />
          <Gift
            className="absolute top-1/2 right-1/4 w-7 h-7 text-orange-400 opacity-20 animate-pulse"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-lg mb-6 animate-slide-up">
                <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
                Making a difference, one smile at a time
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-8 animate-slide-up">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Every Smile
              </span>
              <br />
              <span className="text-gray-800">Tells a Story</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Join us in bringing hope, joy, and support to orphaned and
              underprivileged children across our community. Together, we can
              create lasting change.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
              <Link to="/donate">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Volunteer With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600">
              See the difference we've made together
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
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

      {/* Enhanced About Snippet */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-sm font-medium text-orange-700 mb-6">
                <HandHeart className="w-4 h-4 mr-2" />
                Our Mission
              </div>
              <h2 className="text-5xl font-heading font-bold text-gray-800 mb-8 leading-tight">
                Spreading Smiles
                <span className="block text-orange-500">Everywhere</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Shelter Of Smiles is dedicated to making a meaningful difference
                in the lives of orphaned and underprivileged children. Through
                organized events, community donations, and volunteer efforts, we
                bring hope, education, and joy to those who need it most.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Founded with the belief that every child deserves love, care,
                and opportunities, we work tirelessly to create positive change
                in our community, one smile at a time.
              </p>
              <Link to="/about">
                <Button
                  icon={ArrowRight}
                  iconPosition="right"
                  className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="animate-slide-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl blur opacity-20"></div>
                <img
                  src="https://images.pexels.com/photos/8617634/pexels-photo-8617634.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Children smiling and playing"
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Recent Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
              <Gift className="w-4 h-4 mr-2" />
              Recent Impact
            </div>
            <h2 className="text-5xl font-heading font-bold text-gray-800 mb-6">
              Our Recent Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent initiatives and the impact we've
              made in our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentWork.map((work, index) => (
              <Card
                key={index}
                hover
                className={`animate-slide-up group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300`}
                animationDelay={`${index * 0.1}s`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button
                variant="outline"
                icon={ArrowRight}
                iconPosition="right"
                className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-700 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Testimonials
            </div>
            <h2 className="text-5xl font-heading font-bold text-gray-800 mb-6">
              What People Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our volunteers, donors, and beneficiaries about their
              experiences with Shelter Of Smiles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`p-8 animate-slide-up border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm`}
                animationDelay={`${index * 0.1}s`}
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-purple-600 font-medium">
                    {testimonial.role}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-heading font-bold mb-8">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto">
            Join our mission to bring smiles to children in need. Every
            contribution, big or small, makes a real impact in someone's life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/donate">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
              >
                <Heart className="w-5 h-5 mr-2" />
                Make a Donation
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-purple-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
              >
                <Users className="w-5 h-5 mr-2" />
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
