import DataNotFound from '@/app/components/DataNotFound';
import { getPosts } from '@/utility/getposts';
import React from 'react';

const page =async ({params}) => {
    const {id}= await params;
    const posts=await getPosts();
    const post=posts.find(post => post.id ==id)
    if(post){
        return (
            <div>
                <h1>single post:{id} </h1>
                <p>title: {post.title}</p>
                <p>post body: {post.body}</p>
            </div>
        );

    }else{
        <DataNotFound></DataNotFound>
    }
  
};

export default page;