"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  signIn } from "next-auth/react"

export default function Navbar(){
  const pathname=usePathname();
  console.log(pathname,pathname.includes("dashbord"));
  //conditional navbar showing
  if(!pathname.includes("dashbord")){
    
  
return(
    <div>
         <nav className="bg-purple-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-2xl font-bold">
            Zayed<span className="text-yellow-300">Dev</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            <Link href="/" className="hover:text-yellow-300 transition">
              Home
            </Link>
            <Link href="/services" className="hover:text-yellow-300 transition">
              services
            </Link>
            <Link href="/posts" className="hover:text-yellow-300 transition">
              posts
            </Link>
            <Link href="/meals" className="hover:text-yellow-300 transition">
              Meals
            </Link>
            <Link href="/heros" className="hover:text-yellow-300 transition">
              Heros
            </Link>
            <Link href="/about" className="hover:text-yellow-300 transition">
              About
            </Link>
            {/* <Link href="#" className="hover:text-yellow-300 transition">
              Contact
            </Link> */}
          </div>

          {/* Button */}
          <div className="hidden md:block">
            <button onClick={() => signIn()} className="bg-yellow-400 mr-2 text-purple-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Login
            </button>
           <Link href={`/register`}>
            <button   className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Register
            </button>
           </Link>
          </div>
        

          {/* Mobile Icon */}
          <div className="md:hidden">
            <button className="text-white text-2xl focus:outline-none">
              ☰
            </button>
          </div>

        </div>
      </div>
    </nav>
    </div>
)
  }else{
    <></>
  }
}