"use client";
import React from 'react';
import { Leaf, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const ailments = [
  "Hypertension", "Pile", "Rheumatism", "Infertility", "Waist pain", "Diabetes",
  "Tuberculosis", "Vaginal discharge", "Staphylococcus", "Body & Mouth Odour",
  "Low Sperm Count", "Gastric Ulcer", "Asthma", "Arthritis", "Menstrual Disorder",
  "Stroke", "Prostate Diseases", "Pelvic Inflammatory Disease", "Lupus",
  "Sickle Cell", "Exotic Bag Waste Infections"
];

const videos = [
  {
    title: "Natural Healing Methods",
    url: "https://www.youtube.com/embed/video1",
    description: "Learn about our traditional healing approaches"
  },
  {
    title: "Herbal Benefits",
    url: "https://www.youtube.com/embed/video2",
    description: "Discover the power of natural herbs"
  },
  {
    title: "Customer Testimonials",
    url: "https://www.youtube.com/embed/video3",
    description: "Hear from our satisfied customers"
  },
  {
    title: "Wellness Tips",
    url: "https://www.youtube.com/embed/video4",
    description: "Daily tips for natural health maintenance"
  }
];

const GreenishBee = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="fixed w-full bg-green-600 shadow-lg z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Logo Container in Header */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <img 
                src="/api/placeholder/64/64"
                alt="Greenish Bee Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <h1 className="text-2xl text-white font-bold">Greenish Bee</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-white hover:text-green-200 transition">Home</a>
            <a href="#benefits" className="text-white hover:text-green-200 transition">Health Benefits</a>
            <a href="#videos" className="text-white hover:text-green-200 transition">Videos</a>
            <a href="#services" className="text-white hover:text-green-200 transition">Services</a>
            <a href="#contact" className="text-white hover:text-green-200 transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section id="home" className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo Container in Body */}
            <div className="w-32 h-32 bg-white rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
              <img 
                src="/api/placeholder/128/128"
                alt="Greenish Bee Logo Large"
                className="w-24 h-24 object-contain"
              />
            </div>
            <h2 className="text-4xl text-green-800 font-bold mb-6">
              Natural Wellness Solutions
            </h2>
            <p className="text-xl text-green-600 mb-8">
              Holistic approaches to support your health journey
            </p>
          </div>
        </section>

        {/* Health Benefits Section */}
        <section id="benefits" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-green-800 font-bold text-center mb-12">
              Health Benefits of Greenish Bee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ailments.map((ailment, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-xl shadow-lg flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <p className="text-green-700 font-medium">{ailment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos" className="py-20 px-4 bg-green-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-green-800 font-bold text-center mb-12">
              Educational Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <iframe
                      src={video.url}
                      title={video.title}
                      className="w-full h-64 rounded-lg"
                      allowFullScreen
                    />
                  </div>
                  <h3 className="text-xl text-green-800 font-bold mb-2">{video.title}</h3>
                  <p className="text-green-600">{video.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl text-green-800 font-bold mb-12">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-green-600 mb-4" />
                <p className="text-green-700">+234 123 4567</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-green-600 mb-4" />
                <p className="text-green-700">contact@greenishbee.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-green-600 mb-4" />
                <p className="text-green-700">Ondo City, Nigeria</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 Greenish Bee Natural Herbals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GreenishBee;