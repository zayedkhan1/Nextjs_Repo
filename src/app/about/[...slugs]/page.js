import React from 'react';

const SlugPages = async ({params}) => {
    const {p}=await params;
    console.log(p);
    return (
        <div>
            <h1>catch all segment</h1>
        </div>
    );
};

export default SlugPages;