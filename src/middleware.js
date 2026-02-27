import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import React from 'react';

const middleware =async (req) => {
    const token=await getToken({req});
    // if(token) console.log("token from middleware : ",token)
    const isTokenOK=Boolean(token)
    const isAdminUser=token?.role == 'admin';
    const isAdminSpecificRoute=req.nextUrl.pathname.startsWith('/heros')
    if(isAdminSpecificRoute && !isAdminUser){
        //send back where they came from
        const callbackUrl=encodeURIComponent(req.nextUrl.pathname)
        return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`,req.url))
    }

 


    return NextResponse.next();
    
};

export default middleware;




//proxy.js code
// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// // export function proxy(request) {
// //   return NextResponse.redirect(new URL('/', request.url))
// // }
 
// export function proxy(request) {
//      const dummyData={
//         //role:"user",
//        role:"admin",
//         email:"test@email.com",
//      }

//     let isServices=request.nextUrl.pathname.includes('/services');
//     let isAdmin=dummyData.role == "admin";
//     console.log(isServices);
//  //jodi isservice path thake abong isAdmin jodi admin na hoye user hoy tahole home page chole jabe
//     if(isServices && !isAdmin){
//       //we can use rewrite(login korar por user je route e jete chay rewrite sei route e niye jay) instead of redirect
//       return NextResponse.redirect(new URL('/login', request.url))

//     }

//   return NextResponse.next()
// }
 
// // Alternatively, you can use a default export:
// // export default function proxy(request) { ... }
 
// // export const config = {
// //   matcher: '/about/:path*',
// // }