import getHerosData from '@/utility/getHerosData';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';



const Heros = async () => {
   const data=await getHerosData();

   if(data.length===15){
    //redirect function is for surver side redirection and it should be used in server components and page.js files only
      redirect("/"); //to redirect to the add hero page if there are already 15 heroes in the database   
}
    
    return (
        
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 py-10 px-4">
            <Link href="/heros/add">
              <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300">
                Add new Heros
              </button>
            </Link>

  {/* Page Title */}
  <h1 className="text-4xl font-bold text-center text-purple-900 mb-3">
    Heros Page
  </h1>

  <h2 className="text-center text-purple-700 mb-10 text-lg">
    {data.length} heroes found
  </h2>

  {/* Cards Grid */}
  <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    
    {data.map((hero) => (
      <div
        key={hero._id}
        className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2"
      >
        <h3 className="text-xl font-semibold text-purple-800 mb-4">
          {hero.name}
        </h3>

        <div className="space-y-2 text-gray-600">
          <p>
            <span className="font-medium text-purple-700">Age:</span> {hero.age}
          </p>

          <p>
            <span className="font-medium text-purple-700">Email:</span> {hero.email}
          </p>
        </div>

        {/* Optional Button */}
      <Link href={`/heros/${hero._id}`}>
        <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition duration-300">
          View Profile
        </button>
      </Link>
      </div>
    ))}

  </div>
</div>
    );
};

export default Heros;