"use client";
import registerUser from '@/app/actions/auth/registerUser';
import React from 'react';

const Register = () => {
  const handleRegister=async(e)=>{
        e.preventDefault();
        // Handle registration logic here
       const username=e.target.username.value;
        const password=e.target.password.value
        console.log(username,password);
        // You can send this data to your server or API for further processing
        const payload = { username, password };
        const result =await registerUser(payload);
        console.log(result);
        console.log("Registration successful:", result);
    }
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <form  onSubmit={handleRegister} className='register-form'>
                <input name='username' type="text" placeholder="Enter your username" className="border p-2 mb-2 w-full" />
                <input name='password' type="password" placeholder="Password" className="border p-2 mb-2 w-full" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Register</button>
            </form>
            
        </div>
    );
};

export default Register;