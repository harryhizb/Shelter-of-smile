import {
  Heart,
  Target,
  Users,
  Award,
  Instagram,
  Sparkles,
  HandHeart,
} from "lucide-react";
import Card from "../components/UI/Card";

const About = () => {
  const milestones = [
    {
      year: "2021",
      event: "Shelter Of Smiles Founded",
      description: "Started with a vision to help underprivileged children",
    },
    {
      year: "2022",
      event: "First Major Drive",
      description:
        "Successfully organized Ramadan food distribution for 100+ families",
    },
    {
      year: "2023",
      event: "Education Initiative",
      description: "Launched educational support program for orphaned children",
    },
    {
      year: "2024",
      event: "Community Expansion",
      description: "Extended operations to 5 different districts",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We approach every child with love, understanding, and genuine care for their wellbeing.",
    },
    {
      icon: Target,
      title: "Impact",
      description:
        "We focus on creating meaningful, lasting change in the lives of children and families.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We believe in the power of community support and collective action for positive change.",
    },
    {
      icon: Award,
      title: "Transparency",
      description:
        "We maintain complete transparency in our operations and use of donations.",
    },
  ];

  const team = [
    {
      name: "Shahwaiz Nasir",
      role: "Founder & Director",
      bio: "Passionate about child welfare and community development. Leads all major initiatives and organizational strategy.",
      contact: "03119461104",
    },
  ];

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
          <Heart
            className="absolute top-1/4 left-1/4 w-6 h-6 text-pink-400 opacity-20 animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <Sparkles
            className="absolute top-1/3 right-1/3 w-5 h-5 text-orange-400 opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <HandHeart
            className="absolute bottom-1/3 left-1/5 w-8 h-8 text-purple-400 opacity-25 animate-bounce"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-[60vh]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-lg mb-6 animate-slide-up">
              <Heart className="w-4 h-4 mr-2 text-pink-500" />
              Our Story & Mission
            </div>
            <h1 className="text-6xl md:text-7xl font-heading font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="text-gray-800">Shelter Of Smiles</span>
            </h1>
            <p className="text-xl text-gray-600 animate-slide-up opacity-90 max-w-3xl mx-auto">
              Every smile tells a story of hope, resilience, and the power of
              community coming together to make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Mission Statement */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-700 mb-6">
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </div>
              <h2 className="text-5xl font-heading font-bold text-gray-800 mb-8 leading-tight">
                Transforming Lives
                <span className="block text-purple-600">
                  Through Compassion
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Shelter Of Smiles is dedicated to transforming the lives of
                orphaned and underprivileged children through compassionate
                action, community support, and sustainable initiatives. We
                believe that every child deserves love, care, education, and the
                opportunity to smile.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our organization works tirelessly to bridge the gap between
                those who want to help and those who need help, creating
                meaningful connections that result in lasting positive change.
              </p>
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl border border-orange-100">
                <h3 className="text-xl font-heading font-semibold text-orange-800 mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Our Vision
                </h3>
                <p className="text-orange-700 leading-relaxed">
                  To create a world where every child has access to love,
                  education, and opportunities, regardless of their
                  circumstances, ensuring that no child is left behind.
                </p>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-20"></div>
                <img
                  src="https://images.pexels.com/photos/8617624/pexels-photo-8617624.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Children learning and playing"
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-700 mb-6">
              <Award className="w-4 h-4 mr-2" />
              Core Values
            </div>
            <h2 className="text-5xl font-heading font-bold text-gray-800 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our approach to
              helping children and families.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center animate-slide-up group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                animationDelay={`${index * 0.1}s`}
              >
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Founder Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-sm font-medium text-orange-700 mb-6">
              <Users className="w-4 h-4 mr-2" />
              Leadership
            </div>
            <h2 className="text-5xl font-heading font-bold text-gray-800 mb-6">
              Meet Our Founder
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn about the passionate individual behind Shelter Of Smiles.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="p-10 text-center animate-slide-up border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50">
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Users className="h-16 w-16 text-purple-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-heading font-bold text-gray-800 mb-2">
                {team[0].name}
              </h3>
              <p className="text-purple-600 font-medium mb-6 text-lg">
                {team[0].role}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {team[0].bio}
              </p>
              <div className="flex justify-center items-center space-x-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                <div className="flex items-center space-x-2 text-gray-700">
                  <span className="font-medium">Contact:</span>
                  <span className="font-semibold">{team[0].contact}</span>
                </div>
                <a
                  href="https://instagram.com/anjxni_05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 transition-colors duration-200 p-2 bg-white rounded-full shadow-md hover:shadow-lg"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Milestones */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-sm font-medium text-orange-700 mb-6">
              <Award className="w-4 h-4 mr-2" />
              Our Journey
            </div>
            <h2 className="text-5xl font-heading font-bold text-gray-800 mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones and achievements that mark our progress in serving
              the community.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-300 via-pink-300 to-orange-300 h-full rounded-full"></div>
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card
                    className={`p-8 w-full max-w-md ${
                      index % 2 === 0 ? "mr-8" : "ml-8"
                    } border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300`}
                  >
                    <div className="text-3xl font-heading font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-gray-800 mb-4">
                      {milestone.event}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </Card>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Impact Statistics */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6">
              <Award className="w-4 h-4 mr-2" />
              Our Impact
            </div>
            <h2 className="text-5xl font-heading font-bold mb-6">Our Impact</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Together with our community, we've made a significant difference
              in the lives of children and families.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="text-5xl font-heading font-bold mb-3">500+</div>
              <div className="text-lg opacity-90">Children Supported</div>
            </div>
            <div
              className="text-center animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-5xl font-heading font-bold mb-3">25+</div>
              <div className="text-lg opacity-90">Events Organized</div>
            </div>
            <div
              className="text-center animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-5xl font-heading font-bold mb-3">50+</div>
              <div className="text-lg opacity-90">Active Volunteers</div>
            </div>
            <div
              className="text-center animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-5xl font-heading font-bold mb-3">5</div>
              <div className="text-lg opacity-90">Districts Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
