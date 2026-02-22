import Image from "next/image";

import { Roboto } from "next/font/google";


const fontRoboto=Roboto({
  variable:"--font-roboto",
  weights:[100,300,400,500,700,900],
  subsets:["latin"],
  
})

export async function generateMetadata({ params}) {
  const id = (await params).id
 
  // fetch meals information
        const meals = await getMeal(id);
        const meal = meals.find(meal => meal.idMeal == id);
 
  return {
    title: meal?.strMeal || "Meal Not Found",
    description: meal?.strInstructions || "No description available.",
  }
}
 
const getMeal=async(id)=>{
    try{
     const res= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data=await res.json();
    return data.meals;

    }catch(error){
     console.log(error)
     return [];
    }

}


//when to use client side and server side data featching
const SingleMeal = async({params}) => {
    const p=await params;
 
 

const meals =await getMeal(p.id);
    
  
    return (
     
        <div className="min-h-screen bg-purple-50 p-8">
   
      
        <div className="w-100 mx-auto ">
          {meals?.map((meal) => (
            <div
              key={meal.idMeal}
              className={`bg-white rounded-2xl shadow-lg  transform hover:scale-105 transition duration-300 ${fontRoboto.className}`} 
            >
              {/* Meal Image */}
              <Image
                 src={meal?.strMealThumb}
                alt={meal?.strMeal}
                width={400}
                height={100}
              ></Image>
             
      
              {/* Meal Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-purple-700 mb-3">
                  {meal?.strMeal}
                </h2>
                <p className="text-gray-600 text-sm  ">
                  {meal?.strInstructions}
                </p>
      
              
             
              </div> 
            </div>     
               ))}
        </div>
      </div>
    );
};

export default SingleMeal;