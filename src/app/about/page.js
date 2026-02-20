import Link from "next/link";

export default function About(){
    return(
        <div>
            <nav>
            <Link href="/about/address" className="hover:text-yellow-300 transition">
              address
            </Link>
            </nav>
            <section className="min-h-screen bg-purple-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">
            About Me
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what skills I have.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Description */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              I'm Zayed Khan
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I am a Computer Science student passionate about web development,
              software engineering, and building modern applications.
              I enjoy solving problems and continuously learning new technologies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My goal is to become a professional Software Engineer and
              contribute to impactful real-world projects.
            </p>

            <button className="mt-6 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg transition duration-300">
              Download CV
            </button>
          </div>

          {/* Right Side - Skills */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h3 className="text-xl font-semibold text-purple-800 mb-6">
              My Skills
            </h3>

            <div className="space-y-4">
              <div>
                <p className="flex justify-between mb-1">
                  <span>HTML</span>
                  <span>90%</span>
                </p>
                <div className="w-full bg-purple-100 rounded-full h-2">
                  <div className="bg-purple-700 h-2 rounded-full w-[90%]"></div>
                </div>
              </div>

              <div>
                <p className="flex justify-between mb-1">
                  <span>CSS / Tailwind</span>
                  <span>85%</span>
                </p>
                <div className="w-full bg-purple-100 rounded-full h-2">
                  <div className="bg-purple-700 h-2 rounded-full w-[85%]"></div>
                </div>
              </div>

              <div>
                <p className="flex justify-between mb-1">
                  <span>JavaScript</span>
                  <span>80%</span>
                </p>
                <div className="w-full bg-purple-100 rounded-full h-2">
                  <div className="bg-purple-700 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>

              <div>
                <p className="flex justify-between mb-1">
                  <span>React</span>
                  <span>75%</span>
                </p>
                <div className="w-full bg-purple-100 rounded-full h-2">
                  <div className="bg-purple-700 h-2 rounded-full w-[75%]"></div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
        </div>
    )
}