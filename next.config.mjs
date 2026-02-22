/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
      
      },
    ],
  },
  //for redirecting the page (if we hit about page it will redirect to the dashbord/about page)
  // async redirects() {
  //   return [
  //     {
  //       source: "about",
  //       destination: "/dashbord/about",//need to create dashbord first(will working good for admin)
  //       permanent: true,
  //     },
  //   ];
  // }
};

export default nextConfig;
