import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to GainKnowledge
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mb-6">
            Learn, explore, and grow your skills with high-quality blogs on
            programming, web development, and modern technologies.
          </p>

          <div className="flex gap-4">
            <Link to="/blogs">
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                Explore Blogs
              </button>
            </Link>

            <Link to="/register">
              <button className="border border-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition">
                Get Started
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose GainKnowledge?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                Quality Content
              </h3>
              <p className="text-gray-600">
                Well-researched blogs with real-world examples to improve your learning experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                Beginner Friendly
              </h3>
              <p className="text-gray-600">
                Easy-to-understand tutorials suitable for beginners and professionals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                Regular Updates
              </h3>
              <p className="text-gray-600">
                Stay updated with the latest trends and technologies in the tech world.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BLOG PREVIEW SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Latest Blogs
          </h2>

          <p className="text-gray-600 mb-8">
            Read our latest articles and improve your skills today.
          </p>

          <Link to="/blogs">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              View All Blogs
            </button>
          </Link>

        </div>
      </section>

    </div>
  );
};


