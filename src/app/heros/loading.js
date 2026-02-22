import React from 'react';

const loading = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-purple-50">
            <div className="relative">

                {/* Outer Spinner */}
                <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-700 rounded-full animate-spin"></div>


            </div>
        </div>
        </div>
    );
};

export default loading;