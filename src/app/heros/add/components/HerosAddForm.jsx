"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const HerosAddForm =() => {
    const router=useRouter();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        //form data handle code
        const form=e.target;
        const name=form.name.value;
        const age=form.age.value;
        const email=form.email.value;
        const hero={name,age,email};
        console.log(hero);
        //post data
        const res= await fetch("http://localhost:3000/api/items",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(hero)
        });
        // res.then(res=>res.json()).then(data=>console.log(data));
        const result= res.json();
        console.log(result);
      form.reset();
      //after submiting the form
      router.push("/heros") //to navigate to the heros page after adding new hero
      //router.refresh(); //to refresh the page and update the data on the page after adding new hero
    }
    return (
        <div>
            <h1 className="text-2xl font-bold text-center text-purple-800 mb-4">Heros Add Form</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-md mx-auto mt-8'>
                    <input type="text" name='name' placeholder='Name' className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500' />
                    <input type="number" name='age' placeholder='Age' className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500' />
                    <input type="email" name='email' placeholder='Email' className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500' />
                    <button  type='submit' className='bg-purple-600 text-white py-2 mb-5 rounded-lg hover:bg-purple-700 transition'>Add Hero</button>
                </form>
        </div>
    );
};

export default HerosAddForm;