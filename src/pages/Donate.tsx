"use client";

import type React from "react";

import { useState } from "react";
import {
  CreditCard,
  Smartphone,
  Copy,
  CheckCircle,
  Heart,
  DollarSign,
  Users,
  Gift,
  Sparkles,
  Shield,
} from "lucide-react";
import Card from "../components/UI/Card";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const predefinedAmounts = [500, 1000, 2000, 5000, 10000];
  const easyPaisaNumber = "03119461104";
  const accountHolder = "Shahwaiz Nasir";

  const impactExamples = [
    {
      amount: 500,
      impact: "Provides basic school supplies for 1 child",
      icon: Gift,
    },
    {
      amount: 1000,
      impact: "Feeds 5 children for a day",
      icon: Heart,
    },
    {
      amount: 2000,
      impact: "Winter clothing for 2 children",
      icon: Users,
    },
    {
      amount: 5000,
      impact: "Educational support for 1 month",
      icon: Gift,
    },
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(easyPaisaNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getCurrentAmount = () => {
    return selectedAmount || Number.parseInt(customAmount) || 0;
  };

  const getCurrentImpact = () => {
    const amount = getCurrentAmount();
    for (let i = impactExamples.length - 1; i >= 0; i--) {
      if (amount >= impactExamples[i].amount) {
        return impactExamples[i];
      }
    }
    return null;
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
          <Heart
            className="absolute top-1/4 left-1/4 w-6 h-6 text-pink-400 opacity-20 animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <Gift
            className="absolute top-1/3 right-1/3 w-5 h-5 text-orange-400 opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <Sparkles
            className="absolute bottom-1/3 left-1/5 w-8 h-8 text-purple-400 opacity-25 animate-bounce"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-[60vh]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-lg mb-6 animate-slide-up">
              <Heart className="w-4 h-4 mr-2 text-pink-500" />
              Support Our Mission
            </div>
            <h1 className="text-6xl md:text-7xl font-heading font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Make a
              </span>
              <br />
              <span className="text-gray-800">Donation</span>
            </h1>
            <p className="text-xl text-gray-600 animate-slide-up opacity-90 max-w-3xl mx-auto">
              Your generous contribution helps us bring smiles, hope, and
              support to children who need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Impact Stats */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-700 mb-6">
              <Gift className="w-4 h-4 mr-2" />
              Your Impact
            </div>
            <h2 className="text-5xl font-heading font-bold text-gray-800 mb-6">
              Your Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every donation, no matter the size, creates a meaningful impact in
              a child's life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactExamples.map((example, index) => (
              <Card
                key={index}
                className="p-8 text-center animate-slide-up group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                animationDelay={`${index * 0.1}s`}
              >
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <example.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-heading font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                  PKR {example.amount.toLocaleString()}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {example.impact}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Donation Form */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-10 border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-heading font-bold text-gray-800 mb-6">
                Choose Your Donation
              </h2>
              <p className="text-gray-600 text-lg">
                Select an amount below or enter a custom amount to support our
                mission.
              </p>
            </div>

            {/* Enhanced Donation Type */}
            <div className="mb-10">
              <div className="flex justify-center space-x-4 mb-8">
                <button
                  onClick={() => setDonationType("one-time")}
                  className={`px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    donationType === "one-time"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-white text-gray-700 hover:bg-purple-50 border-2 border-purple-200"
                  }`}
                >
                  One-time Donation
                </button>
                <button
                  onClick={() => setDonationType("monthly")}
                  className={`px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    donationType === "monthly"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-white text-gray-700 hover:bg-purple-50 border-2 border-purple-200"
                  }`}
                >
                  Monthly Donation
                </button>
              </div>
            </div>

            {/* Enhanced Amount Selection */}
            <div className="mb-10">
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-6">
                Select Amount (PKR)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-6 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                      selectedAmount === amount
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "bg-white text-gray-700 hover:bg-purple-50 border-2 border-purple-200"
                    }`}
                  >
                    {amount.toLocaleString()}
                  </button>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Or enter custom amount
                </label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Enter amount in PKR"
                  className="w-full px-6 py-4 border-2 border-purple-200 rounded-2xl focus:ring-purple-500 focus:border-purple-500 text-lg"
                />
              </div>
            </div>

            {/* Enhanced Impact Preview */}
            {getCurrentAmount() > 0 && (
              <Card className="p-8 mb-10 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
                <div className="flex items-center justify-center space-x-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      PKR {getCurrentAmount().toLocaleString()}
                    </div>
                    {getCurrentImpact() && (
                      <p className="text-purple-700 text-lg font-medium">
                        {getCurrentImpact()!.impact}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            )}

            {/* Enhanced Donor Information */}
            <div className="mb-10">
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-6">
                Your Information (Optional)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Share why you're supporting our mission..."
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>

            {/* Enhanced Payment Methods */}
            <div className="border-t-2 border-purple-100 pt-10">
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-8">
                Payment Methods
              </h3>

              {/* Enhanced EasyPaisa */}
              <Card className="p-8 mb-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-heading font-semibold text-gray-800">
                      EasyPaisa
                    </h4>
                    <p className="text-gray-600">
                      Quick and secure mobile payment
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-inner">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium text-gray-700">
                      Account Number:
                    </span>
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-xl font-bold text-gray-800">
                        {easyPaisaNumber}
                      </span>
                      <button
                        onClick={copyToClipboard}
                        className="text-green-600 hover:text-green-700 transition-colors duration-200 p-2 bg-green-100 rounded-full hover:bg-green-200"
                      >
                        {copied ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">
                      Account Holder:
                    </span>
                    <span className="font-semibold text-gray-800">
                      {accountHolder}
                    </span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-100 rounded-2xl">
                  <p className="text-sm text-green-800">
                    <strong>Instructions:</strong> Send money to the above
                    EasyPaisa number and share the transaction screenshot with
                    us via WhatsApp for confirmation.
                  </p>
                </div>
              </Card>

              {/* Enhanced Bank Transfer */}
              <Card className="p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                    <CreditCard className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-heading font-semibold text-gray-800">
                      Bank Transfer
                    </h4>
                    <p className="text-gray-600">
                      Direct bank account transfer
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-inner">
                  <p className="text-gray-700 mb-4">
                    For bank transfer details, please contact us directly:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-5 w-5 text-blue-600" />
                      <span className="text-blue-600 font-semibold">
                        WhatsApp: {easyPaisaNumber}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-600">
                        Contact: {accountHolder}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Enhanced Contact for Confirmation */}
            <div className="mt-10 p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
              <h4 className="text-xl font-heading font-semibold text-purple-800 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                After Making Your Donation
              </h4>
              <p className="text-purple-700 mb-6 leading-relaxed">
                Please contact us via WhatsApp with your transaction details to
                ensure proper acknowledgment and transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923119461104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Smartphone className="h-5 w-5 mr-2" />
                  WhatsApp: {easyPaisaNumber}
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Enhanced Transparency Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-700 mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Transparency
          </div>
          <h2 className="text-5xl font-heading font-bold text-gray-800 mb-8">
            Our Commitment to Transparency
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            We believe in complete transparency about how your donations are
            used to make a real difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-4">
                100% Direct Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every donation goes directly to helping children - no
                administrative overhead deductions.
              </p>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-4">
                Regular Updates
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Follow our Instagram for regular updates and photos showing how
                your donations are being used.
              </p>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-4">
                Financial Accountability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain detailed records and are happy to share how funds
                are allocated upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Thank You Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-heading font-bold mb-8">
            Thank You for Your Generosity
          </h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto">
            Your donation helps us continue our mission of bringing smiles to
            children who need it most. Together, we can make a lasting
            difference in their lives.
          </p>
          <div className="flex justify-center">
            <a
              href="https://instagram.com/shelter_of_smiles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Follow Our Impact Story
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
