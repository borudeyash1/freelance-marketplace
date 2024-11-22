import React, { useState } from "react";
import { FiSearch, FiUser, FiMessageSquare, FiHome, FiBriefcase } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const FindWork = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filters, setFilters] = useState({
    budget: 5000,
    skills: [],
    deadline: ""
  });

  const dummyJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      description: "Looking for an experienced React developer to build a scalable web application",
      budget: "$4000-$6000",
      skills: ["React", "TypeScript", "Node.js"],
      deadline: "2024-03-20",
      companyLogo: "images.unsplash.com/photo-1549923746-c502d488b3ea"
    },
    {
      id: 2,
      title: "UI/UX Designer",
      description: "Need a creative UI/UX designer for our mobile app redesign project",
      budget: "$3000-$4500",
      skills: ["Figma", "UI/UX", "Mobile Design"],
      deadline: "2024-03-15",
      companyLogo: "images.unsplash.com/photo-1572044162444-ad60f128bdea"
    },
  ];

  const handleSearch = () => {
    setLoading(true);
    // Simulating API call
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const JobModal = ({ job, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold">{job.title}</h2>
            <p className="text-gray-600">{job.budget}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        <div className="mb-4">
          <img
            src={`https://${job.companyLogo}`}
            alt="Company Logo"
            className="w-16 h-16 rounded-full object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1572044162444-ad60f128bdea";
            }}
          />
        </div>
        <p className="text-gray-700 mb-4">{job.description}</p>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Required Skills:</h3>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <img
                src="https://images.unsplash.com/photo-1549923746-c502d488b3ea"
                alt="Logo"
                className="h-8 w-auto"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1572044162444-ad60f128bdea";
                }}
              />
              <div className="hidden md:flex space-x-8">
                <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                  <FiHome className="mr-1" /> Home
                </a>
                <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                  <FiBriefcase className="mr-1" /> Find Talent
                </a>
                <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                  <FiMessageSquare className="mr-1" /> Messages
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-purple-600 hover:text-purple-700">
                Sign In
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Search for jobs (e.g., React, UI/UX)"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                <>
                  <FiSearch className="mr-2" /> Search
                </>
              )}
            </button>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range: ${filters.budget}
              </label>
              <input
                type="range"
                min="0"
                max="10000"
                value={filters.budget}
                onChange={(e) =>
                  setFilters({ ...filters, budget: parseInt(e.target.value) })
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skills Required
              </label>
              <select
                multiple
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    skills: Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    ),
                  })
                }
              >
                <option>React</option>
                <option>Node.js</option>
                <option>UI/UX</option>
                <option>Python</option>
                <option>Java</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deadline
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                onChange={(e) =>
                  setFilters({ ...filters, deadline: e.target.value })
                }
              >
                <option value="">All</option>
                <option value="immediate">Immediate</option>
                <option value="1-week">1 Week</option>
                <option value="1-month">1 Month</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={`https://${job.companyLogo}`}
                  alt="Company Logo"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1572044162444-ad60f128bdea";
                  }}
                />
                <div>
                  <h3 className="font-bold text-lg">{job.title}</h3>
                  <p className="text-sm text-gray-500">{job.budget}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Deadline: {job.deadline}
                </span>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-2 rounded-lg bg-purple-600 text-white">
              1
            </button>
            <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </main>

      {/* Job Details Modal */}
      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default FindWork;