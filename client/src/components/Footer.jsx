export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              GainKnowledge
            </h2>
            <p className="text-sm leading-relaxed">
              A modern blogging platform to share ideas, tutorials, and
              technical knowledge with developers worldwide.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Blogs</li>
              <li className="hover:text-white cursor-pointer">Tutorials</li>
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Support</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect With Us
            </h3>

            <div className="flex space-x-4">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 cursor-pointer transition">
                F
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-sky-500 cursor-pointer transition">
                T
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-pink-600 cursor-pointer transition">
                I
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-gray-600 cursor-pointer transition">
                G
              </div>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-10 pt-6">

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">

            <p>
              © 2026 GainKnowledge. All rights reserved.
            </p>

            <div className="flex space-x-6 mt-3 md:mt-0">
              <span className="hover:text-white cursor-pointer">
                Terms
              </span>
              <span className="hover:text-white cursor-pointer">
                Privacy
              </span>
              <span className="hover:text-white cursor-pointer">
                Cookies
              </span>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};


