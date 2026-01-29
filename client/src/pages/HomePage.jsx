import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const HomePage = () => {

  const { user } = useContext(AuthContext);

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

          {/* Welcome Badge */}
          <div className="mb-4">
            {!user ? (
              <span className="bg-white/20 backdrop-blur px-4 py-1 rounded-full text-xl font-medium">
                👋 Hi, Guest
              </span>
            ) : (
              <span className="bg-white/20 backdrop-blur px-4 py-1 rounded-full text-xl font-medium">
                👋 Hi, {user.username}
              </span>
            )}
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Welcome to <span className="text-yellow-300">GainKnowledge</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl max-w-3xl text-gray-100 mb-8">
            Learn, explore, and grow your skills with high-quality blogs on
            programming, web development, and modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <Link to="/blogs">
              <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:bg-gray-100 transition-all">
                Explore Blogs
              </button>
            </Link>

            {!user && (
              <Link to="/register">
                <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all">
                  Get Started
                </button>
              </Link>
            )}

          </div>

        </div>
      </section>

      {/* feature section*/}
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-blue-600">GainKnowledge?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-3">📘 Quality Content</h3>
              <p className="text-gray-600 leading-relaxed">
                Well-researched blogs with real-world examples to improve your
                learning experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-3">🚀 Beginner Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Easy-to-understand tutorials suitable for beginners and
                professionals.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-3">⏳ Regular Updates</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay updated with the latest trends and technologies in the tech
                world.
              </p>
            </div>

          </div>

        </div>

      </section>

     {/* latest blog redirect section */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Blogs
          </h2>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Read our latest articles, improve your development skills and stay
            updated with modern tech trends.
          </p>

          <Link to="/blogs">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all">
              View All Blogs
            </button>
          </Link>

        </div>

      </section>

    </div>
  );
};
