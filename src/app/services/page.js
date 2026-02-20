'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Services(){
    //for conditioning routing
    const router=useRouter();

//true hoel download page e niye jabe
const isloggedin=true;

//false hole home page e niye jabe
// const isloggedin=false;

 const handleNavigate=()=>{
    if(isloggedin){
        router.push('/services/download');
    }else{
        router.push('/');
    }


 }
 const services = [
  {
    id: 1,
    title: "Problem Solving",
    description:
      "Strong problem-solving skills with experience in competitive programming and logical thinking."
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Experienced in building responsive websites using HTML, CSS, JavaScript, and modern frameworks."
  },
  {
    id: 3,
    title: "Data Analysis",
    description:
      "Skilled in analyzing datasets using Python and data visualization tools to extract insights."
  },
  {
    id: 4,
    title: "Database Management",
    description:
      "Hands-on experience with MySQL and MongoDB for designing and managing structured data."
  },
  {
    id: 5,
    title: "API Integration",
    description:
      "Able to integrate REST APIs using Axios and Fetch for dynamic web applications."
  },
  {
    id: 6,
    title: "Frontend Development",
    description:
      "Proficient in React and TailwindCSS to create modern and responsive user interfaces."
  },
  {
    id: 7,
    title: "Backend Development",
    description:
      "Experience in building backend systems using Node.js and Express."
  },
  {
    id: 8,
    title: "Machine Learning",
    description:
      "Basic knowledge of machine learning concepts and model building using Python."
  },
  {
    id: 9,
    title: "Version Control",
    description:
      "Comfortable using Git and GitHub for collaboration and project management."
  },
  {
    id: 10,
    title: "Team Collaboration",
    description:
      "Able to work effectively in teams with strong communication and coordination skills."
  }
];



    return(
        <div>
             <section className="min-h-screen bg-purple-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

      <button onClick={handleNavigate} className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Go to Download
            </button>
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">
            My Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the services I offer to help build modern,
            responsive, and scalable applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Service Card 1 */}
        
          {
            services.map(service=>{
              return(
                <div key={service.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                   <h3 className="text-xl font-semibold text-purple-800 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
             {service.description}
            </p>
            <Link href={`services/${service.id}`} className="mt-6 text-purple-700 font-semibold hover:underline">
              Learn More →
            </Link>
                </div>
              )
            })
          }

        </div>

      </div>
    </section>

        </div>

    )
}