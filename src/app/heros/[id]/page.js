import getHerosData from '@/utility/getHerosData';
import React from 'react';

const Hero =async ({params}) => {
    const {id}=params;
    const data=await getHerosData();

    const hero=data.find(hero=>hero._id.toString()===id); 
    console.log(hero);

    
     // const res=await fetch(`http://localhost:3000/api/items/${id}`);
    // const singleHero=await res.json();
    // console.log(singleHero);
    
    return (
        <div>
            just a single hero page
            <h1>name: {hero?.name}</h1>
            <h2>age: {hero?.age}</h2>
            <h3>email: {hero?.email}</h3>
        </div>
    );
};

export default Hero;
