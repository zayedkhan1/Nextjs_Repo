import React from 'react';

const DashbordLayout = ({children}) => {
    return (
        <div>
            <h1>Dashbord layout</h1>
            <div className='grid grid-cols-12'>
                {/* side nav */}
                <div className='col-span-3'>
                      <ul>
                        <li>Users List</li>
                      </ul>
                </div>
                {/* Dashbord content */}
                <div>
                     {children}
                </div>


            </div>

        </div>
    );
};

export default DashbordLayout;