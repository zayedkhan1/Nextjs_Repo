export default function Footer(){
    return(
        <div>
           <footer className="bg-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Zayed Khan</h2>
          <p className="text-gray-300 leading-relaxed">
            Computer Science student passionate about Web Development,
            Programming, and building modern responsive applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-purple-300 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-300 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-purple-300 transition duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-300 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-300">Email: zayed@email.com</p>
          <p className="text-gray-300">Phone: +880 1XXXXXXXXX</p>
          <p className="text-gray-300">Location: Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-purple-700 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Zayed Khan. All rights reserved.
      </div>
    </footer>
        </div>
    )
}