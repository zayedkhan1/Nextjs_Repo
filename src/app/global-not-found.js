import Link from 'next/link';
import React from 'react';

const NotFoundPage= () => {
    return (
        <div className='flex flex-col items-center justify-center h-[450px] '>
            <h1 className='text-red-600  text-3xl font-extrabold mb-5'>404 - NOT FOUND</h1>
            <Link className='hover:underline hover:text-blue-500' href='/'>Go back to home</Link>
        </div>
    );
};

export default NotFoundPage;