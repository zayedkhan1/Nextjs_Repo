import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
// export function proxy(request) {
//   return NextResponse.redirect(new URL('/', request.url))
// }
 
export function proxy(request) {
     const dummyData={
        //role:"user",
       role:"admin",
        email:"test@email.com",
     }

    let isServices=request.nextUrl.pathname.includes('/services');
    let isAdmin=dummyData.role == "admin";
    console.log(isServices);
 //jodi isservice path thake abong isAdmin jodi admin na hoye user hoy tahole home page chole jabe
    if(isServices && !isAdmin){
      //we can use rewrite(login korar por user je route e jete chay rewrite sei route e niye jay) instead of redirect
      return NextResponse.redirect(new URL('/login', request.url))

    }

  return NextResponse.next()
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
// export const config = {
//   matcher: '/about/:path*',
// }