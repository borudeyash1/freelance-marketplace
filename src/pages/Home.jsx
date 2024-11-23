import React, { useState, useRef } from "react";
import { FiSearch, FiMessageCircle, FiStar, FiBriefcase, FiUser, FiMail, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const FreelanceMarketplace = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [showChat, setShowChat] = useState(false);

  const dummyProjects = [
    {
      id: 1,
      title: "Website Redesign",
      description: "Looking for an experienced web designer to redesign our company website",
      budget: "$2000-$3000",
      skills: ["React", "Tailwind CSS", "UI/UX"],
      deadline: "2024-03-15"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Need a skilled developer for iOS/Android app development",
      budget: "$5000-$8000",
      skills: ["React Native", "Firebase", "API Integration"],
      deadline: "2024-04-01"
    }
  ];

  const dummyFreelancer = {
    name: "John Doe",
    title: "Senior Full Stack Developer",
    rating: 4.8,
    completedProjects: 45,
    hourlyRate: "$65",
    image: "images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    skills: ["React", "Node.js", "Python", "MongoDB", "AWS"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Navigation Bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-auto"
                  src="images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3"
                  alt="Logo"
                />
              </div>
              <div className="hidden md:block ml-10 space-x-8"> 
                <Link className="text-purple-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200" to={`/find-work`}>Find Work</Link>
                <Link className="text-purple-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Find Talent</Link>
                <Link className="text-purple-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Messages</Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Sign Up
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="text-purple-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors duration-200"
              >
                Log In
              </motion.button>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-purple-400 hover:text-purple-500 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-colors duration-200"
              >
                {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-purple-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Find the perfect</span>
                    <span className="block text-purple-600 xl:inline"> freelance services</span>
                  </h1>
                  <p className="mt-3 text-base text-purple-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Connect with talented freelancers and get your projects done quickly and efficiently.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200">
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full px-8 py-4 rounded-full border border-purple-200 placeholder-purple-400 text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                          placeholder="Search for services..."
                        />
                        <FiSearch className="absolute right-4 top-4 h-5 w-5 text-purple-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Job Listings */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h2 className="text-2xl font-bold text-purple-900 mb-8">Featured Jobs</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dummyProjects.map((project) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={project.id} 
              className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 border border-purple-100"
            >
              <h3 className="text-lg font-semibold text-purple-900 mb-2">{project.title}</h3>
              <p className="text-purple-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-sm text-purple-500">
                <span>Budget: {project.budget}</span>
                <span>Deadline: {project.deadline}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Rest of the component remains the same but with updated colors to match purple theme */}
      {/* ... */}

    </div>
  );
};

export default FreelanceMarketplace;



