import { getPosts } from "@/utility/getposts";
import Link from "next/link";
export const metadata = {
  title: "Posts Next.js",
  description: "Everything about Next.js Posts",
};



const page = async() => {
const posts = await getPosts();
console.log(posts)
    return (
        <div>
            {/* <h1>Posts page</h1>
            {
                posts.map((post)=>{
                    return(
                        <div key={post.id}>
                            <h1>post id: {post.id}</h1>
                            <h2>post title: {post.title}</h2>
                            <p>post body: {post.body}</p>
                            <Link href={`/`}>See more</Link>
                            


                            
                         </div>
                    )
                })
            } */}


<section className="min-h-screen bg-purple-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

      
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">
            My Posts
          </h1>
         
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Service Card 1 */}
        
          {
            posts.map(post=>{
              return(
                <div key={post.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                   <h3 className="text-xl font-semibold text-purple-800 mb-4">
              {post.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
             {post.body}
            </p>
            <Link href={`/posts/${post.id}`} className="mt-6 text-purple-700 font-semibold hover:underline">
              Learn More →
            </Link>
                </div>
              )
            })
          }

        </div>

      </div>
    </section>
        </div>


     
    );
};

export default page;