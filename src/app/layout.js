import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// const fontPoppins=Poppins({
//   variable:"--font-poppins",
//   weights:[100,200,300,400,500,600,700,800,900],
//   subsets:["latin"],
  
// })

export const metadata = {

    title:{
      default:"Learning Next.js",
      template:"%s | Learning Next.js"
      },
      //important for SEO
      keywords:["next.js","react","javascript","web development"],
     description: "Learning Next.js from PH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      
      <Navbar></Navbar>

       <main>
        
       {children}
        
       </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
