import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";

export const metadata = {
  title: "Meals Next.js",
  description: "Everything about Next.js meals",
};


//when to use client side and server side data featching
const Meals = async({searchParams}) => {
    const query=await searchParams;
 
 
const getMeals=async()=>{
    try{
     const res= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`);
    const data=await res.json();
    return data.meals;

    }catch(error){
     console.log(error)
     return [];
    }

}
const meals =await getMeals();
    
  
    return (
        
        <div className="min-h-screen bg-purple-50 p-8">
        <h1 className="text-3xl font-bold text-purple-800 mb-8 text-center">
          Total Meals  {meals?.length || 0}
        </h1>
      
        <div className="mb-8 flex justify-center">
          <MealSearchInput />
        </div>
      
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {meals?.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              {/* Meal Image */}
              <Image
               src={meal?.strMealThumb}
                alt={meal?.strMeal}
                width={500}
                height={100}

              >

              </Image>
           
      
              {/* Meal Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-purple-700 mb-3">
                  {meal?.strMeal}
                </h2>
                <p className="text-gray-600 text-sm h-28 overflow-hidden">
                  {meal?.strInstructions}
                </p>
      
                {/* Button */}
              <Link  href={`/meals/${meal.idMeal}`}>
                 <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-300">
                  View Recipe
                </button>
         
              </Link>
             
              </div> 
            </div>     
               ))}
        </div>
      </div>
    );
};

export default Meals;