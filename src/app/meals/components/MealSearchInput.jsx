"use client";
import { ReadonlyURLSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MealSearchInput = () => {
   // const [meals,setMeals]=useState([]);
    const [search,setSearch]=useState("");
    const router=useRouter();
    const pathname=usePathname();

    useEffect(()=>{
        const searchQuery={search};
        const urlQueryParam=new ReadonlyURLSearchParams(searchQuery);
        const url=`${pathname}?${urlQueryParam}`;
        router.push(url);
       
    },[search])
    return (
        <div className="flex justify-center">
  <input
    type="text"
    placeholder="Search meals..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-80 px-4 py-2 rounded-2xl border-2 border-purple-400 bg-purple-100 text-purple-800 placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
  />
</div>
    );
};

export default MealSearchInput;